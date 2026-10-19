<?php
/**
 * AVR Web Consulting - Theme Functions & Definitions
 * Block Theme with full Gutenberg block patterns, site editor support, and non-destructive page importer.
 */

if (!defined('ABSPATH')) {
    exit;
}

define('AVR_THEME_VERSION', '2.0.0');
define('AVR_THEME_DIR', get_template_directory());
define('AVR_THEME_URI', get_template_directory_uri());

// Include supporting modules
require_once AVR_THEME_DIR . '/inc/redirects.php';
require_once AVR_THEME_DIR . '/inc/seo-schema.php';
require_once AVR_THEME_DIR . '/inc/class-avr-importer.php';

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function avr_theme_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support('post-thumbnails');

    // Add support for Block Styles.
    add_theme_support('wp-block-styles');

    // Enqueue editor styles.
    add_theme_support('editor-styles');
    add_editor_style('assets/css/theme.css');

    // Add support for full and wide align images.
    add_theme_support('align-wide');

    // Add support for responsive embedded content.
    add_theme_support('responsive-embeds');

    // Add support for custom logo.
    add_theme_support('custom-logo', array(
        'height'      => 48,
        'width'       => 48,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    // HTML5 markup support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Register navigation menus (for classic/block menu fallback)
    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'avr-web-consulting'),
        'footer'  => __('Footer Navigation', 'avr-web-consulting'),
    ));
}
add_action('after_setup_theme', 'avr_theme_setup');

/**
 * Enqueue scripts and styles properly without duplicate downloads.
 */
function avr_theme_scripts() {
    // Google Fonts (Space Grotesk + DM Sans) with display=swap
    wp_enqueue_style(
        'avr-google-fonts',
        'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap',
        array(),
        null
    );

    // Main Theme Compiled Stylesheet (loaded ONCE)
    wp_enqueue_style(
        'avr-theme-css',
        AVR_THEME_URI . '/assets/css/theme.css',
        array(),
        AVR_THEME_VERSION
    );

    // Root style.css metadata and resets
    wp_enqueue_style(
        'avr-style',
        get_stylesheet_uri(),
        array('avr-theme-css'),
        AVR_THEME_VERSION
    );

    // Production Vanilla JavaScript (Mobile navigation, FAQ details, Video deferral)
    wp_enqueue_script(
        'avr-theme-js',
        AVR_THEME_URI . '/assets/js/theme.js',
        array(),
        AVR_THEME_VERSION,
        true
    );

    // Localize theme script for AJAX inquiry submissions
    wp_localize_script('avr-theme-js', 'avr_theme_data', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce'    => wp_create_nonce('avr_inquiry_nonce'),
        'home_url' => home_url('/'),
    ));
}
add_action('wp_enqueue_scripts', 'avr_theme_scripts');

/**
 * Register Block Pattern Categories
 */
function avr_register_block_pattern_categories() {
    $categories = array(
        'avr-heroes'   => array('label' => __('AVR - Hero Sections', 'avr-web-consulting')),
        'avr-services' => array('label' => __('AVR - Services & Cards', 'avr-web-consulting')),
        'avr-content'  => array('label' => __('AVR - Content Sections', 'avr-web-consulting')),
        'avr-faqs'     => array('label' => __('AVR - FAQ Accordions', 'avr-web-consulting')),
        'avr-cta'      => array('label' => __('AVR - Call to Action', 'avr-web-consulting')),
    );

    foreach ($categories as $slug => $properties) {
        if (!WP_Block_Pattern_Categories_Registry::get_instance()->is_registered($slug)) {
            register_block_pattern_category($slug, $properties);
        }
    }
}
add_action('init', 'avr_register_block_pattern_categories');

/**
 * Handle Consultation & Inquiry Form AJAX Submissions
 */
function avr_handle_inquiry_submission() {
    check_ajax_referer('avr_inquiry_nonce', 'nonce');

    $name    = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : '';
    $email   = isset($_POST['email']) ? sanitize_email($_POST['email']) : '';
    $phone   = isset($_POST['phone']) ? sanitize_text_field($_POST['phone']) : '';
    $service = isset($_POST['service']) ? sanitize_text_field($_POST['service']) : '';
    $message = isset($_POST['message']) ? sanitize_textarea_field($_POST['message']) : '';

    if (empty($email) && empty($phone)) {
        wp_send_json_error(array('message' => 'Please provide an email or phone number.'));
        exit;
    }

    // Prepare notification email
    $to      = get_option('admin_email', 'info@avrwebconsulting.com');
    $subject = 'New Consultation Inquiry from ' . ($name ? $name : 'Website Visitor');
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\nService: $service\n\nMessage:\n$message\n";
    $headers = array('Content-Type: text/plain; charset=UTF-8', "Reply-To: $email");

    @wp_mail($to, $subject, $body, $headers);

    wp_send_json_success(array(
        'message' => 'Thank you! Your inquiry has been sent successfully. Our digital marketing team will reach out within 24 hours.'
    ));
}
add_action('wp_ajax_avr_submit_inquiry', 'avr_handle_inquiry_submission');
add_action('wp_ajax_nopriv_avr_submit_inquiry', 'avr_handle_inquiry_submission');
