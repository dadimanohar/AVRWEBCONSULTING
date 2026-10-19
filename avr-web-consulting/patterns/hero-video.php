<?php
/**
 * Title: AVR Video Hero Section
 * Slug: avr/hero-video
 * Categories: avr-heroes
 * Description: Full-width hero section with deferred background video, immediate high-priority LCP poster, and high-contrast call-to-action overlays.
 */
?>
<!-- wp:group {"align":"full","className":"relative isolate min-h-[38rem] overflow-hidden bg-ink text-ink-foreground lg:min-h-[44rem]","layout":{"type":"default"}} -->
<div class="wp-block-group alignfull relative isolate min-h-[38rem] overflow-hidden bg-ink text-ink-foreground lg:min-h-[44rem]">
  <!-- High-priority immediate static poster for fast First Contentful Paint and LCP -->
  <img
    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/home-hero-poster.jpg'); ?>"
    alt="AVR Web Consulting digital marketing workspace"
    fetchpriority="high"
    decoding="async"
    class="absolute inset-0 h-full w-full object-cover"
  />

  <!-- Deferred background video with reduced-motion fallback -->
  <video
    class="avr-hero-video absolute inset-0 h-full w-full object-cover motion-reduce:hidden transition-opacity duration-700"
    data-avr-deferred-video
    poster="<?php echo esc_url(get_template_directory_uri() . '/assets/images/home-hero-poster.jpg'); ?>"
    autoplay
    muted
    loop
    playsinline
    preload="none"
    aria-hidden="true"
    tabindex="-1"
  >
    <source data-src="<?php echo esc_url(get_template_directory_uri() . '/assets/video/avr.mp4'); ?>" type="video/mp4" />
  </video>

  <!-- Gradient overlay ensuring WCAG AAA contrast -->
  <div class="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/50" aria-hidden="true"></div>

  <!-- Hero Content -->
  <div class="container-page relative flex min-h-[38rem] flex-col justify-center py-20 lg:min-h-[44rem]">
    <!-- wp:paragraph {"className":"inline-flex w-fit items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/90 backdrop-blur"} -->
    <p class="inline-flex w-fit items-center gap-2 rounded-full border border-ink-foreground/25 bg-ink-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/90 backdrop-blur">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-3.5 w-3.5 text-primary" aria-hidden="true"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
      Full-service digital marketing agency
    </p>
    <!-- /wp:paragraph -->

    <!-- wp:heading {"level":1,"className":"mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl text-white"} -->
    <h1 class="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl text-white">
      Grow Your Business With Smarter Digital Marketing
    </h1>
    <!-- /wp:heading -->

    <!-- wp:paragraph {"className":"mt-6 max-w-2xl text-lg text-ink-foreground/80 lg:text-xl leading-relaxed"} -->
    <p class="mt-6 max-w-2xl text-lg text-ink-foreground/80 lg:text-xl leading-relaxed">
      AVR Web Consulting helps businesses build stronger online visibility, attract qualified traffic, generate leads, and grow through SEO, advertising, content marketing, and web development.
    </p>
    <!-- /wp:paragraph -->

    <!-- wp:paragraph {"className":"mt-3 max-w-2xl text-sm font-medium text-ink-foreground/70 lg:text-base"} -->
    <p class="mt-3 max-w-2xl text-sm font-medium text-ink-foreground/70 lg:text-base">
      Now expanding into AI Search, Advanced Web Development &amp; Business Automation.
    </p>
    <!-- /wp:paragraph -->

    <!-- Hero Buttons -->
    <div class="mt-10 flex flex-wrap gap-3">
      <a class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold cursor-pointer transition-colors bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 rounded-full" href="/contact">
        Request a digital audit
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </a>
      <a href="https://wa.me/919182543249?text=Hello%20AVR%20Web%20Consulting,%20I%20would%20like%20to%20discuss%20your%20services." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border shadow-sm h-10 px-8 rounded-full border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 transition-colors">
        WhatsApp
      </a>
      <a href="tel:+919182543249" class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold border shadow-sm h-10 px-8 rounded-full border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 transition-colors">
        Call +91-9182543249
      </a>
    </div>
  </div>
</div>
<!-- /wp:group -->
