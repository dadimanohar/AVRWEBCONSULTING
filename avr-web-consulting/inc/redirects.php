<?php
/**
 * AVR Web Consulting - Canonical URL & Redirect Handler
 * Ensures /local-seo/ permanently redirects to /seo-services/local-seo/
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('template_redirect', 'avr_handle_canonical_redirects');

function avr_handle_canonical_redirects() {
    $request_uri = untrailingslashit(strtok($_SERVER['REQUEST_URI'], '?'));
    
    // Redirect /local-seo to /seo-services/local-seo/
    if ($request_uri === '/local-seo') {
        wp_safe_redirect(home_url('/seo-services/local-seo/'), 301);
        exit;
    }
}
