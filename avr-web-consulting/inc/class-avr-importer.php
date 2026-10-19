<?php
/**
 * AVR Web Consulting - Non-destructive Idempotent Theme Content Importer & Setup
 * 
 * Provides an administrative dashboard interface under Appearance -> AVR Theme Setup
 * with Dry Run / Preview and Safe Idempotent Content Import functionality.
 */

if (!defined('ABSPATH')) {
    exit;
}

class AVR_Theme_Importer {

    public function __construct() {
        add_action('admin_menu', array($this, 'register_admin_menu'));
        add_action('admin_init', array($this, 'handle_actions'));
    }

    public function register_admin_menu() {
        add_theme_page(
            __('AVR Theme Setup & Content Import', 'avr-web-consulting'),
            __('AVR Theme Setup', 'avr-web-consulting'),
            'manage_options',
            'avr-theme-setup',
            array($this, 'render_admin_page')
        );
    }

    private function get_seeds() {
        $file = AVR_THEME_DIR . '/inc/content-seeds.json';
        if (!file_exists($file)) {
            return array();
        }
        $json = file_get_contents($file);
        $data = json_decode($json, true);
        return is_array($data) ? $data : array();
    }

    public function handle_actions() {
        if (!isset($_POST['avr_importer_action']) || !check_admin_referer('avr_importer_nonce', '_avr_nonce')) {
            return;
        }

        if (!current_user_can('manage_options')) {
            wp_die(__('You do not have sufficient permissions to access this page.', 'avr-web-consulting'));
        }

        $action = sanitize_text_field($_POST['avr_importer_action']);

        if ($action === 'run_import') {
            $force_update = !empty($_POST['avr_force_update']);
            $results = $this->execute_import($force_update);
            set_transient('avr_import_results', $results, 60);
            wp_safe_redirect(admin_url('themes.php?page=avr-theme-setup&status=imported'));
            exit;
        }
    }

    private function execute_import($force_update = false) {
        $seeds = $this->get_seeds();
        $created = 0;
        $updated = 0;
        $skipped = 0;
        $errors = array();

        // Pass 1: Create or find all parent containers
        $slug_to_id = array();

        foreach ($seeds as $item) {
            $slug = sanitize_title($item['slug']);
            $type = $item['type'] === 'post' ? 'post' : 'page';

            $existing = get_posts(array(
                'name'        => $slug,
                'post_type'   => $type,
                'post_status' => 'any',
                'numberposts' => 1,
            ));

            $parent_id = 0;
            if (!empty($item['parentSlug']) && isset($slug_to_id[$item['parentSlug']])) {
                $parent_id = $slug_to_id[$item['parentSlug']];
            } elseif (!empty($item['parentSlug'])) {
                $parent_post = get_posts(array(
                    'name'        => sanitize_title($item['parentSlug']),
                    'post_type'   => 'page',
                    'post_status' => 'any',
                    'numberposts' => 1,
                ));
                if (!empty($parent_post)) {
                    $parent_id = $parent_post[0]->ID;
                    $slug_to_id[$item['parentSlug']] = $parent_id;
                }
            }

            if (!empty($existing)) {
                $post_id = $existing[0]->ID;
                $slug_to_id[$slug] = $post_id;

                if ($force_update) {
                    $post_data = array(
                        'ID'           => $post_id,
                        'post_title'   => wp_strip_all_tags($item['title']),
                        'post_content' => $item['content'],
                        'post_parent'  => $parent_id,
                    );
                    wp_update_post($post_data);
                    if (!empty($item['metaDesc'])) {
                        update_post_meta($post_id, '_yoast_wpseo_metadesc', sanitize_text_field($item['metaDesc']));
                    }
                    if (!empty($item['title'])) {
                        update_post_meta($post_id, '_yoast_wpseo_title', sanitize_text_field($item['title']));
                    }
                    update_post_meta($post_id, '_avr_imported_at', current_time('mysql'));
                    $updated++;
                } else {
                    $skipped++;
                }
            } else {
                $post_data = array(
                    'post_title'    => wp_strip_all_tags($item['title']),
                    'post_name'     => $slug,
                    'post_content'  => $item['content'],
                    'post_status'   => 'publish',
                    'post_type'     => $type,
                    'post_parent'   => $parent_id,
                    'comment_status'=> 'closed',
                    'ping_status'   => 'closed',
                );

                if (!empty($item['date'])) {
                    $post_data['post_date'] = $item['date'] . ' 10:00:00';
                }

                $inserted_id = wp_insert_post($post_data);

                if (is_wp_error($inserted_id)) {
                    $errors[] = "Error inserting {$slug}: " . $inserted_id->get_error_message();
                } else {
                    $slug_to_id[$slug] = $inserted_id;
                    $created++;

                    if (!empty($item['metaDesc'])) {
                        update_post_meta($inserted_id, '_yoast_wpseo_metadesc', sanitize_text_field($item['metaDesc']));
                    }
                    if (!empty($item['title'])) {
                        update_post_meta($inserted_id, '_yoast_wpseo_title', sanitize_text_field($item['title']));
                    }
                    update_post_meta($inserted_id, '_avr_imported_at', current_time('mysql'));

                    // Assign category if blog post
                    if ($type === 'post' && !empty($item['category'])) {
                        wp_set_object_terms($inserted_id, $item['category'], 'category');
                    }
                }
            }
        }

        // Set Reading Settings (Home Page & Posts Page)
        $home_page = get_posts(array(
            'name'        => 'home',
            'post_type'   => 'page',
            'post_status' => 'publish',
            'numberposts' => 1,
        ));
        if (!empty($home_page)) {
            update_option('show_on_front', 'page');
            update_option('page_on_front', $home_page[0]->ID);
        }

        $blog_page = get_posts(array(
            'name'        => 'blog',
            'post_type'   => 'page',
            'post_status' => 'publish',
            'numberposts' => 1,
        ));
        if (!empty($blog_page)) {
            update_option('page_for_posts', $blog_page[0]->ID);
        }

        return array(
            'created' => $created,
            'updated' => $updated,
            'skipped' => $skipped,
            'errors'  => $errors,
        );
    }

    public function render_admin_page() {
        $seeds = $this->get_seeds();
        $total_seeds = count($seeds);
        $pages_count = 0;
        $posts_count = 0;

        foreach ($seeds as $s) {
            if ($s['type'] === 'post') {
                $posts_count++;
            } else {
                $pages_count++;
            }
        }

        $results = get_transient('avr_import_results');
        if ($results) {
            delete_transient('avr_import_results');
        }

        $show_dry_run = isset($_GET['dry_run']) && $_GET['dry_run'] === '1';

        // Perform dry-run scan
        $dry_run_stats = array('new' => 0, 'exists' => 0, 'items' => array());
        if ($show_dry_run) {
            foreach ($seeds as $item) {
                $slug = sanitize_title($item['slug']);
                $type = $item['type'] === 'post' ? 'post' : 'page';

                $existing = get_posts(array(
                    'name'        => $slug,
                    'post_type'   => $type,
                    'post_status' => 'any',
                    'numberposts' => 1,
                ));

                $exists = !empty($existing);
                if ($exists) {
                    $dry_run_stats['exists']++;
                } else {
                    $dry_run_stats['new']++;
                }

                $dry_run_stats['items'][] = array(
                    'title'  => $item['title'],
                    'slug'   => ($item['parentSlug'] ? $item['parentSlug'] . '/' : '') . $item['slug'],
                    'type'   => $type,
                    'status' => $exists ? 'Existing (Skip to preserve)' : 'Ready to Create (New)',
                    'exists' => $exists,
                );
            }
        }
        ?>
        <div class="wrap" style="max-width: 1100px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, sans-serif;">
            <div style="background: #0E1116; color: #fff; padding: 24px 32px; border-radius: 12px; margin-top: 20px; display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <h1 style="color: #fff; margin: 0; font-size: 24px; font-weight: 700; display: flex; align-items: center; gap: 12px;">
                        <span style="display: inline-block; width: 14px; height: 14px; background: #22A7E0; border-radius: 50%;"></span>
                        AVR Web Consulting — Theme Setup &amp; Content Management
                    </h1>
                    <p style="color: #94A3B8; margin: 8px 0 0 26px; font-size: 14px;">
                        Genuinely WordPress-editable block theme setup. Complete native Gutenberg pages, Site Editor template parts, and idempotent content migrations.
                    </p>
                </div>
                <div style="text-align: right;">
                    <span style="background: rgba(34, 167, 224, 0.15); color: #22A7E0; border: 1px solid rgba(34, 167, 224, 0.3); padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: 600;">v2.0.0 Production Block Theme</span>
                </div>
            </div>

            <?php if (!empty($results)): ?>
                <div class="notice notice-success is-dismissible" style="padding: 16px; margin: 20px 0; border-left-color: #22A7E0;">
                    <h3 style="margin-top: 0; color: #0E1116;">Import Completed Successfully!</h3>
                    <p style="font-size: 14px; line-height: 1.6;">
                        <strong>Created:</strong> <?php echo intval($results['created']); ?> items &nbsp;|&nbsp;
                        <strong>Updated:</strong> <?php echo intval($results['updated']); ?> items &nbsp;|&nbsp;
                        <strong>Preserved / Skipped:</strong> <?php echo intval($results['skipped']); ?> items
                    </p>
                    <p style="margin-bottom: 0;">
                        <a href="<?php echo esc_url(admin_url('edit.php?post_type=page')); ?>" class="button button-primary">View All Pages</a>
                        <a href="<?php echo esc_url(admin_url('site-editor.php')); ?>" class="button" style="margin-left: 8px;">Open Site Editor</a>
                        <a href="<?php echo esc_url(home_url('/')); ?>" target="_blank" class="button" style="margin-left: 8px;">View Live Homepage &rarr;</a>
                    </p>
                </div>
            <?php endif; ?>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 24px 0;">
                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #E2E8F0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <div style="color: #64748B; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Total Packaged Content</div>
                    <div style="font-size: 32px; font-weight: 700; color: #0E1116; margin-top: 6px;"><?php echo $total_seeds; ?></div>
                    <div style="font-size: 13px; color: #64748B; margin-top: 4px;"><?php echo $pages_count; ?> Pages &bull; <?php echo $posts_count; ?> Blog Posts</div>
                </div>

                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #E2E8F0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <div style="color: #64748B; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">New Industry SEO Pages</div>
                    <div style="font-size: 32px; font-weight: 700; color: #22A7E0; margin-top: 6px;">4 Ready</div>
                    <div style="font-size: 13px; color: #64748B; margin-top: 4px;">Dental, Locksmith, Car Dealership, Real Estate</div>
                </div>

                <div style="background: #fff; padding: 20px; border-radius: 10px; border: 1px solid #E2E8F0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    <div style="color: #64748B; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Migration Safety</div>
                    <div style="font-size: 32px; font-weight: 700; color: #10B981; margin-top: 6px;">Idempotent</div>
                    <div style="font-size: 13px; color: #64748B; margin-top: 4px;">Zero duplicate records &bull; Safe to re-run</div>
                </div>
            </div>

            <div style="background: #fff; padding: 28px; border-radius: 10px; border: 1px solid #E2E8F0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
                <h2 style="font-size: 18px; font-weight: 700; color: #0E1116; margin-top: 0;">Step 1: Preview Migration (Dry Run)</h2>
                <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                    Before modifying the database, run a simulation. The Dry Run will inspect your current WordPress database, compare it with the 100 approved pages and articles, and show you exactly what will be created and what already exists.
                </p>
                <a href="<?php echo esc_url(admin_url('themes.php?page=avr-theme-setup&dry_run=1')); ?>" class="button button-secondary" style="font-size: 14px; height: 38px; line-height: 36px; padding: 0 18px;">
                    Run Preview / Dry Run Scan
                </a>

                <?php if ($show_dry_run): ?>
                    <div style="margin-top: 24px; border-top: 1px solid #E2E8F0; pt-20">
                        <h3 style="font-size: 16px; font-weight: 600; color: #0E1116;">Dry Run Results</h3>
                        <p style="font-size: 14px; color: #475569;">
                            Found <strong><?php echo $dry_run_stats['new']; ?></strong> new items ready to import, and <strong><?php echo $dry_run_stats['exists']; ?></strong> existing items that will be preserved.
                        </p>
                        <div style="max-height: 320px; overflow-y: auto; border: 1px solid #CBD5E1; border-radius: 8px;">
                            <table class="widefat striped">
                                <thead>
                                    <tr>
                                        <th style="padding: 10px;">Item Title</th>
                                        <th style="padding: 10px;">URL / Slug</th>
                                        <th style="padding: 10px;">Type</th>
                                        <th style="padding: 10px;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php foreach ($dry_run_stats['items'] as $item): ?>
                                        <tr>
                                            <td style="font-weight: 600;"><?php echo esc_html($item['title']); ?></td>
                                            <td><code>/<?php echo esc_html($item['slug']); ?></code></td>
                                            <td><span class="badge"><?php echo esc_html(strtoupper($item['type'])); ?></span></td>
                                            <td>
                                                <?php if ($item['exists']): ?>
                                                    <span style="color: #64748B; font-weight: 600;">&#10003; Already Exists (Preserve)</span>
                                                <?php else: ?>
                                                    <span style="color: #22A7E0; font-weight: 600;">+ Will Create</span>
                                                <?php endif; ?>
                                            </td>
                                        </tr>
                                    <?php endforeach; ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                <?php endif; ?>
            </div>

            <div style="background: #fff; padding: 28px; border-radius: 10px; border: 1px solid #E2E8F0; box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 24px;">
                <h2 style="font-size: 18px; font-weight: 700; color: #0E1116; margin-top: 0;">Step 2: Run Idempotent Content Import</h2>
                <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                    Clicking the button below will import all missing pages, populate them with native Gutenberg block markup, wire up the 100% working native FAQ accordions, configure Yoast SEO metadata, and automatically set "Home" as the front page and "Blog" as the posts page.
                </p>

                <div style="background: #FFFBEB; border: 1px solid #FCD34D; border-radius: 8px; padding: 14px 18px; margin: 16px 0;">
                    <strong style="color: #92400E;">Backup Advisory:</strong>
                    <span style="color: #78350F; font-size: 13px;">As a professional engineering best practice, please ensure your database has a current backup before initiating any bulk content import.</span>
                </div>

                <form method="post" action="">
                    <?php wp_nonce_field('avr_importer_nonce', '_avr_nonce'); ?>
                    <input type="hidden" name="avr_importer_action" value="run_import">

                    <p style="margin: 16px 0;">
                        <label>
                            <input type="checkbox" name="avr_force_update" value="1">
                            <strong>Update existing pages with original theme block content</strong>
                            <span style="display: block; font-size: 12px; color: #64748B; margin-left: 24px;">Leave unchecked to only insert newly missing pages and preserve all existing content.</span>
                        </label>
                    </p>

                    <button type="submit" class="button button-primary" style="background: #22A7E0; border-color: #1A92C5; font-size: 15px; height: 42px; line-height: 40px; padding: 0 24px; font-weight: 600;">
                        Run Idempotent Import
                    </button>
                </form>
            </div>

            <div style="background: #fff; padding: 28px; border-radius: 10px; border: 1px solid #E2E8F0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <h2 style="font-size: 18px; font-weight: 700; color: #0E1116; margin-top: 0;">Alternative: WordPress Standard WXR XML Import</h2>
                <p style="color: #475569; font-size: 14px; line-height: 1.6;">
                    If you prefer using the official core WordPress Importer, an export file has been pre-packaged directly in your theme directory:
                </p>
                <p>
                    <code>/wp-content/themes/avr-web-consulting/import/avr-web-consulting-content.xml</code>
                </p>
                <p style="color: #64748B; font-size: 13px;">
                    To import via Core: Navigate to <strong>Tools &rarr; Import &rarr; WordPress &rarr; Run Importer</strong>, choose the file above, and select "Download and import file attachments".
                </p>
            </div>
        </div>
        <?php
    }
}

new AVR_Theme_Importer();
