<?php
/**
 * AVR Web Consulting - Structured Data & Schema Output
 * Emits clean, validated JSON-LD for Organization and LocalBusiness without duplication.
 */

if (!defined('ABSPATH')) {
    exit;
}

add_action('wp_head', 'avr_output_structured_data', 20);

function avr_output_structured_data() {
    // Check if an SEO plugin has already emitted the schema graph
    if (defined('WPSEO_VERSION') || defined('RANK_MATH_VERSION')) {
        // Yoast or RankMath is present. Only output enhanced LocalBusiness and services if needed.
        return;
    }

    $schema = array(
        '@context' => 'https://schema.org',
        '@graph' => array(
            array(
                '@type' => 'Organization',
                '@id' => home_url('/#organization'),
                'name' => 'AVR Web Consulting',
                'url' => home_url('/'),
                'logo' => get_template_directory_uri() . '/assets/images/1790648464804.png',
                'email' => 'info@avrwebconsulting.com',
                'telephone' => '+91-9182543249',
                'sameAs' => array(
                    'https://www.linkedin.com/company/avr-webconsulting/',
                    'https://x.com/avrwebconsult',
                    'https://www.instagram.com/avrwebconsulting/',
                    'https://www.facebook.com/avrwebconsulting'
                )
            ),
            array(
                '@type' => 'LocalBusiness',
                '@id' => home_url('/#localbusiness'),
                'name' => 'AVR Web Consulting',
                'url' => home_url('/'),
                'telephone' => '+91-9182543249',
                'priceRange' => '$$',
                'address' => array(
                    '@type' => 'PostalAddress',
                    'streetAddress' => 'Hero Showroom Lane, D No: 43-18-16, Venkatarajunagar, TSN Colony, Beside Sri Ram Insurance, Dondaparthy',
                    'addressLocality' => 'Visakhapatnam',
                    'addressRegion' => 'Andhra Pradesh',
                    'postalCode' => '530016',
                    'addressCountry' => 'IN'
                ),
                'geo' => array(
                    '@type' => 'GeoCoordinates',
                    'latitude' => 17.7231,
                    'longitude' => 83.3012
                ),
                'openingHoursSpecification' => array(
                    array(
                        '@type' => 'OpeningHoursSpecification',
                        'dayOfWeek' => array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
                        'opens' => '09:30',
                        'closes' => '19:00'
                    )
                )
            )
        )
    );

    echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>' . "\n";
}
