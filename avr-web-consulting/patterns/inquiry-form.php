<?php
/**
 * Title: AVR Consultation Inquiry Form
 * Slug: avr/inquiry-form
 * Categories: avr-cta, avr-content
 * Description: Clean inquiry and consultation contact form with real-time feedback and direct email notification handling.
 */
?>
<!-- wp:group {"className":"py-16 bg-card border-y border-border","layout":{"type":"default"}} -->
<section class="py-16 bg-card border-y border-border">
  <div class="container-page">
    <div class="mx-auto max-w-2xl rounded-3xl border border-border bg-background p-8 shadow-sm lg:p-12">
      <div class="text-center">
        <!-- wp:paragraph {"className":"text-xs font-semibold uppercase tracking-[0.2em] text-primary"} -->
        <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get In Touch</p>
        <!-- /wp:paragraph -->

        <!-- wp:heading {"level":3,"className":"mt-2 text-2xl font-bold text-foreground lg:text-3xl"} -->
        <h3 class="mt-2 text-2xl font-bold text-foreground lg:text-3xl">Request Your Free Technical SEO &amp; Growth Audit</h3>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"className":"mt-3 text-sm text-muted-foreground"} -->
        <p class="mt-3 text-sm text-muted-foreground">Fill in your details below and an AVR growth consultant will analyze your website and reply within 24 hours.</p>
        <!-- /wp:paragraph -->
      </div>

      <form class="mt-8 space-y-4 avr-inquiry-form">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-medium text-foreground mb-1.5" for="inq-name">Full Name *</label>
            <input type="text" id="inq-name" name="name" required placeholder="Alex Turner" class="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
          </div>
          <div>
            <label class="block text-xs font-medium text-foreground mb-1.5" for="inq-email">Email Address *</label>
            <input type="email" id="inq-email" name="email" required placeholder="alex@company.com" class="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-xs font-medium text-foreground mb-1.5" for="inq-phone">Phone Number</label>
            <input type="tel" id="inq-phone" name="phone" placeholder="+1 (555) 000-0000" class="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
          </div>
          <div>
            <label class="block text-xs font-medium text-foreground mb-1.5" for="inq-service">Interested Service</label>
            <select id="inq-service" name="service" class="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
              <option value="SEO Services">SEO Services (Local, Global, Technical)</option>
              <option value="AI SEO &amp; AEO">AI SEO &amp; Answer Engine Optimization</option>
              <option value="Industry SEO">Industry SEO (Dental, Auto, Legal, Locksmith, Real Estate)</option>
              <option value="Paid Advertising">Paid Advertising (Google &amp; Social Ads)</option>
              <option value="Content Marketing">Content Marketing &amp; Authority Links</option>
              <option value="Web Design &amp; Development">Web Design &amp; Custom Development</option>
              <option value="AI Automation &amp; Agents">AI Automation &amp; n8n Workflows</option>
            </select>
          </div>
        </div>

        <div>
          <label class="block text-xs font-medium text-foreground mb-1.5" for="inq-message">Website URL &amp; Project Notes</label>
          <textarea id="inq-message" name="message" rows="4" placeholder="Tell us about your website, current monthly traffic, and primary growth goals..." class="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
        </div>

        <div class="avr-form-status text-sm py-2 px-3 rounded-lg hidden"></div>

        <button type="submit" class="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          Submit Strategy Inquiry
        </button>
      </form>
    </div>
  </div>
</section>
<!-- /wp:group -->
