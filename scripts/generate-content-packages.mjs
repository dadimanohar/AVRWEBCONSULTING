import { createJiti } from "jiti";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const jiti = createJiti(import.meta.url, {
  alias: {
    "@": path.resolve(root, "src"),
  },
});

function escapeXml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeHtml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function convertPageToBlocks(page) {
  const parts = [];

  // Hero Section
  let highlightsMarkup = "";
  if (page.highlights && page.highlights.length > 0) {
    highlightsMarkup = `
    <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-border/60 pt-6">
      ${page.highlights
        .map(
          (h) => `
        <div class="rounded-xl border border-border/80 bg-background/80 p-3 shadow-xs">
          <div class="text-xs text-muted-foreground">${escapeHtml(h.label)}</div>
          <div class="font-display text-lg font-bold text-primary">${escapeHtml(h.value)}</div>
        </div>
      `
        )
        .join("")}
    </div>`;
  }

  parts.push(`<!-- wp:group {"className":"py-12 lg:py-16 bg-mist border-b border-border","layout":{"type":"default"}} -->
<div class="py-12 lg:py-16 bg-mist border-b border-border">
  <div class="container-page max-w-4xl">
    ${page.eyebrow ? `<p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">${escapeHtml(page.eyebrow)}</p>` : ""}
    <h1 class="text-3xl font-bold leading-tight lg:text-5xl text-foreground mb-4">${escapeHtml(page.h1 || page.title)}</h1>
    <p class="text-lg text-muted-foreground leading-relaxed">${escapeHtml(page.description || "")}</p>
    ${highlightsMarkup}
  </div>
</div>
<!-- /wp:group -->`);

  // Direct Answer / Executive Summary Box
  if (page.answer) {
    parts.push(`<!-- wp:group {"className":"py-8 bg-card border-b border-border","layout":{"type":"default"}} -->
<div class="py-8 bg-card border-b border-border">
  <div class="container-page max-w-4xl">
    <div class="rounded-2xl border-l-4 border-primary bg-primary/5 p-6">
      <h2 class="text-base font-semibold text-foreground uppercase tracking-wide mb-2">Direct Answer &amp; Strategic Overview</h2>
      <p class="text-base leading-relaxed text-foreground/90">${escapeHtml(page.answer)}</p>
    </div>
  </div>
</div>
<!-- /wp:group -->`);
  }

  // Content Sections
  if (page.sections && page.sections.length > 0) {
    parts.push(`<!-- wp:group {"className":"py-12 bg-background","layout":{"type":"default"}} -->
<div class="py-12 bg-background">
  <div class="container-page max-w-4xl space-y-10">`);

    for (const section of page.sections) {
      parts.push(`    <section id="${escapeHtml(section.id || "")}" class="scroll-mt-24">
      <h2 class="text-2xl lg:text-3xl font-bold text-foreground mb-4">${escapeHtml(section.heading)}</h2>`);

      if (section.blocks && section.blocks.length > 0) {
        for (const block of section.blocks) {
          if (block.kind === "paragraph") {
            parts.push(`      <!-- wp:paragraph {"className":"text-base leading-relaxed text-muted-foreground mb-4"} -->
      <p class="text-base leading-relaxed text-muted-foreground mb-4">${escapeHtml(block.text)}</p>
      <!-- /wp:paragraph -->`);
          } else if (block.kind === "list") {
            if (block.title) {
              parts.push(`      <h3 class="text-lg font-semibold text-foreground mt-4 mb-2">${escapeHtml(block.title)}</h3>`);
            }
            parts.push(`      <!-- wp:list {"className":"space-y-2 mb-6"} -->
      <ul class="space-y-2 mb-6">
        ${block.items.map((it) => `<li class="flex items-start gap-2 text-foreground/90"><span class="text-primary mt-1">•</span> <span>${escapeHtml(it)}</span></li>`).join("\n        ")}
      </ul>
      <!-- /wp:list -->`);
          } else if (block.kind === "steps") {
            parts.push(`      <!-- wp:group {"className":"space-y-3 my-6","layout":{"type":"default"}} -->
      <div class="space-y-3 my-6">
        ${block.items
          .map(
            (st, idx) => `
          <div class="rounded-xl border border-border bg-card p-4">
            <h4 class="font-semibold text-foreground"><span class="text-primary font-bold mr-2">Step ${idx + 1}:</span> ${escapeHtml(st.title)}</h4>
            <p class="mt-1 text-sm text-muted-foreground leading-relaxed">${escapeHtml(st.text)}</p>
          </div>
        `
          )
          .join("")}
      </div>
      <!-- /wp:group -->`);
          } else if (block.kind === "table") {
            if (block.title) {
              parts.push(`      <h3 class="text-lg font-semibold text-foreground mt-4 mb-2">${escapeHtml(block.title)}</h3>`);
            }
            parts.push(`      <!-- wp:table {"className":"is-style-stripes my-6"} -->
      <figure class="wp-block-table is-style-stripes my-6 overflow-x-auto">
        <table class="w-full text-sm border-collapse border border-border">
          <thead>
            <tr class="bg-muted/40">
              ${block.head.map((h) => `<th class="p-3 text-left font-semibold border border-border text-foreground">${escapeHtml(h)}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${block.rows
              .map(
                (row) => `
              <tr class="hover:bg-muted/10 transition-colors">
                ${row.map((cell) => `<td class="p-3 border border-border text-muted-foreground">${escapeHtml(cell)}</td>`).join("")}
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </figure>
      <!-- /wp:table -->`);
          } else if (block.kind === "callout") {
            parts.push(`      <!-- wp:group {"className":"rounded-2xl border-l-4 border-amber-500 bg-amber-500/10 p-5 my-6","layout":{"type":"default"}} -->
      <div class="rounded-2xl border-l-4 border-amber-500 bg-amber-500/10 p-5 my-6">
        <h4 class="font-bold text-foreground mb-1">${escapeHtml(block.title)}</h4>
        <p class="text-sm text-muted-foreground leading-relaxed">${escapeHtml(block.text)}</p>
      </div>
      <!-- /wp:group -->`);
          } else if (block.kind === "social") {
            parts.push(`      <!-- wp:paragraph {"className":"text-sm text-muted-foreground my-4"} -->
      <p class="text-sm text-muted-foreground my-4">Follow AVR Web Consulting on LinkedIn, X (Twitter), Facebook, and Instagram for ongoing search algorithms and AI updates.</p>
      <!-- /wp:paragraph -->`);
          }
        }
      }

      parts.push(`    </section>`);
    }

    parts.push(`  </div>
</div>
<!-- /wp:group -->`);
  }

  // FAQs Section
  if (page.faqs && page.faqs.length > 0) {
    parts.push(`<!-- wp:group {"className":"py-12 bg-card border-t border-border","layout":{"type":"default"}} -->
<section class="py-12 bg-card border-t border-border">
  <div class="container-page max-w-4xl">
    <div class="mb-6">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Frequently Asked Questions</p>
      <h2 class="text-2xl lg:text-3xl font-bold text-foreground mt-2">Answers About ${escapeHtml(page.serviceName || page.title)}</h2>
    </div>
    <div class="space-y-4">
      ${page.faqs
        .map(
          (faq) => `
      <!-- wp:details {"className":"avr-faq-item"} -->
      <details class="avr-faq-item rounded-2xl border border-border bg-background p-5 group transition-all duration-200">
        <summary class="cursor-pointer font-semibold text-foreground flex items-center justify-between list-none">
          <span class="text-base">${escapeHtml(faq.question)}</span>
          <span class="text-primary font-bold text-xl ml-2 group-open:rotate-45 transition-transform">+</span>
        </summary>
        <div class="mt-3 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-3">
          ${escapeHtml(faq.answer)}
        </div>
      </details>
      <!-- /wp:details -->
      `
        )
        .join("")}
    </div>
  </div>
</section>
<!-- /wp:group -->`);
  }

  // Bottom Call To Action & Inquiry Form
  parts.push(`<!-- wp:pattern {"slug":"avr/cta-section"} /-->`);

  return parts.join("\n\n");
}

function convertHomeToBlocks(home, seoHub) {
  return `<!-- wp:pattern {"slug":"avr/hero-video"} /-->

<!-- wp:pattern {"slug":"avr/stat-band"} /-->

<!-- wp:pattern {"slug":"avr/services-grid"} /-->

<!-- wp:pattern {"slug":"avr/seo-services-overview"} /-->

<!-- wp:pattern {"slug":"avr/ai-seo-feature"} /-->

<!-- wp:group {"className":"py-16 lg:py-24 bg-card border-t border-border","layout":{"type":"default"}} -->
<section class="py-16 lg:py-24 bg-card border-t border-border">
  <div class="container-page">
    <div class="max-w-3xl">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Process</p>
      <h2 class="text-3xl font-bold leading-tight lg:text-4xl">How We Grow Your Search &amp; Digital Presence</h2>
      <p class="mt-4 text-balance-pretty text-lg text-muted-foreground">A structured four-phase growth framework that aligns search visibility, targeted customer acquisition, credible digital experiences, and scalable automation.</p>
    </div>
    <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      ${(home.homeProcess || [])
        .map(
          (proc, idx) => `
        <div class="rounded-2xl border border-border bg-background p-6 shadow-xs">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">0${idx + 1}</span>
          <h3 class="mt-4 font-display text-lg font-semibold text-foreground">${escapeHtml(proc.title)}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">${escapeHtml(proc.text)}</p>
        </div>
      `
        )
        .join("")}
    </div>
  </div>
</section>
<!-- /wp:group -->

<!-- wp:group {"className":"py-16 lg:py-24 bg-mist border-t border-border","layout":{"type":"default"}} -->
<section id="faqs" class="py-16 lg:py-24 bg-mist border-t border-border">
  <div class="container-page max-w-4xl">
    <div class="max-w-3xl mb-10">
      <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Clear Answers</p>
      <h2 class="text-3xl font-bold leading-tight lg:text-4xl">Frequently Asked Questions</h2>
      <p class="mt-3 text-lg text-muted-foreground">Everything you need to know about working with AVR Web Consulting, our SEO processes, timelines, and deliverables.</p>
    </div>
    <div class="space-y-4">
      ${(home.homeFaqs || [])
        .map(
          (faq) => `
      <!-- wp:details {"className":"avr-faq-item"} -->
      <details class="avr-faq-item rounded-2xl border border-border bg-card p-5 group transition-all duration-200">
        <summary class="cursor-pointer font-semibold text-foreground flex items-center justify-between list-none">
          <span class="text-base">${escapeHtml(faq.question)}</span>
          <span class="text-primary font-bold text-xl ml-2 group-open:rotate-45 transition-transform">+</span>
        </summary>
        <div class="mt-3 text-muted-foreground text-sm leading-relaxed border-t border-border/50 pt-3">
          ${escapeHtml(faq.answer)}
        </div>
      </details>
      <!-- /wp:details -->
      `
        )
        .join("")}
    </div>
  </div>
</section>
<!-- /wp:group -->

<!-- wp:pattern {"slug":"avr/cta-section"} /-->

<!-- wp:pattern {"slug":"avr/inquiry-form"} /-->`;
}

async function main() {
  console.log("Loading all content modules via JITI...");

  const seo = await jiti.import("../src/content/pages/seo.ts");
  const aiSeo = await jiti.import("../src/content/pages/ai-seo.ts");
  const ads = await jiti.import("../src/content/pages/advertising.ts");
  const content = await jiti.import("../src/content/pages/content-marketing.ts");
  const web = await jiti.import("../src/content/pages/web-design.ts");
  const dev = await jiti.import("../src/content/pages/development-automation.ts");
  const ind = await jiti.import("../src/content/pages/industries.ts");
  const loc = await jiti.import("../src/content/pages/locations.ts");
  const cs = await jiti.import("../src/content/pages/case-studies.ts");
  const comp = await jiti.import("../src/content/pages/company.ts");
  const blog = await jiti.import("../src/content/pages/blog.ts");
  const home = await jiti.import("../src/content/pages/home.ts");

  const allItems = [];
  let postIdCounter = 100;

  // 1. Homepage
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: "Home — AVR Web Consulting | SEO & Digital Marketing Agency",
    slug: "home",
    isFrontPage: true,
    parentSlug: "",
    metaDesc: "AVR Web Consulting is a full-service digital marketing agency in Visakhapatnam, India offering SEO, AI SEO, advertising, content, and web development.",
    content: convertHomeToBlocks(home, seo.seoServicesHub),
  });

  // 2. SEO Hub & Pages
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: seo.seoServicesHub.title,
    slug: "seo-services",
    parentSlug: "",
    metaDesc: seo.seoServicesHub.description,
    content: convertPageToBlocks(seo.seoServicesHub),
  });

  for (const p of seo.seoPages) {
    const cleanSlug = p.slug.replace(/^\/seo-services\//, "").replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "seo-services",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 3. AI SEO Hub & Pages
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: aiSeo.aiSeoHub.title,
    slug: "ai-seo",
    parentSlug: "",
    metaDesc: aiSeo.aiSeoHub.description,
    content: convertPageToBlocks(aiSeo.aiSeoHub),
  });

  for (const p of aiSeo.aiSeoPages) {
    const cleanSlug = p.slug.replace(/^\/ai-seo\//, "").replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "ai-seo",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 4. Advertising Hub & Pages
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: ads.paidAdvertisingHub.title,
    slug: "paid-advertising",
    parentSlug: "",
    metaDesc: ads.paidAdvertisingHub.description,
    content: convertPageToBlocks(ads.paidAdvertisingHub),
  });

  for (const p of ads.advertisingPages) {
    const cleanSlug = p.slug.replace(/^\/paid-advertising\//, "").replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "paid-advertising",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 5. Content Marketing Hub & Pages
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: content.contentMarketingHub.title,
    slug: "content-marketing",
    parentSlug: "",
    metaDesc: content.contentMarketingHub.description,
    content: convertPageToBlocks(content.contentMarketingHub),
  });

  for (const p of content.contentPages) {
    const cleanSlug = p.slug.replace(/^\/content-marketing\//, "").replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "content-marketing",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 6. Web Design Hub & Pages
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: web.webDesignHub.title,
    slug: "web-design-development",
    parentSlug: "",
    metaDesc: web.webDesignHub.description,
    content: convertPageToBlocks(web.webDesignHub),
  });

  for (const p of web.webDesignPages) {
    const cleanSlug = p.slug.replace(/^\/web-design-development\//, "").replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "web-design-development",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 7. Dev & Automation Pages
  for (const p of dev.developmentAutomationPages) {
    const parts = p.slug.split("/").filter(Boolean);
    const parentSlug = parts.length > 1 ? parts[0] : "";
    const cleanSlug = parts.length > 1 ? parts[1] : parts[0];
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug,
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 8. Industries Hub & Pages
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: ind.industriesHub.title,
    slug: "industries",
    parentSlug: "",
    metaDesc: ind.industriesHub.description,
    content: convertPageToBlocks(ind.industriesHub),
  });

  for (const p of ind.industryPages) {
    const cleanSlug = p.slug.replace(/^\/industries\//, "").replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "industries",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 9. Locations Hub & Pages
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: loc.locationsHub.title,
    slug: "locations",
    parentSlug: "",
    metaDesc: loc.locationsHub.description,
    content: convertPageToBlocks(loc.locationsHub),
  });

  for (const p of loc.locationPages) {
    const cleanSlug = p.slug.replace(/^\/locations\//, "").replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "locations",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 10. Case Studies Hub & Pages
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: cs.caseStudiesHub.title,
    slug: "case-studies",
    parentSlug: "",
    metaDesc: cs.caseStudiesHub.description,
    content: convertPageToBlocks(cs.caseStudiesHub),
  });

  for (const p of cs.caseStudyPages) {
    const cleanSlug = p.slug.replace(/^\/case-studies\//, "").replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "case-studies",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // 11. Company Pages (Pricing, About, Privacy, Terms, Contact)
  for (const p of comp.companyPages) {
    const cleanSlug = p.slug.replace(/^\//, "");
    allItems.push({
      id: postIdCounter++,
      type: "page",
      title: p.title,
      slug: cleanSlug,
      parentSlug: "",
      metaDesc: p.description,
      content: convertPageToBlocks(p),
    });
  }

  // Contact Page
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: "Contact AVR Web Consulting — SEO & AI Visibility Audit",
    slug: "contact",
    parentSlug: "",
    metaDesc: "Contact AVR Web Consulting in Visakhapatnam to request an SEO and AI visibility audit. Email, phone and WhatsApp support.",
    content: `<!-- wp:group {"className":"py-12 lg:py-16 bg-mist border-b border-border","layout":{"type":"default"}} -->
<div class="py-12 lg:py-16 bg-mist border-b border-border">
  <div class="container-page max-w-4xl text-center">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Contact</p>
    <h1 class="text-3xl font-bold leading-tight lg:text-5xl text-foreground mb-4">Talk to AVR Web Consulting</h1>
    <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">Get in touch with our team for strategic SEO, AI visibility, and digital consulting. We reply within one business day.</p>
  </div>
</div>
<!-- /wp:group -->

<!-- wp:pattern {"slug":"avr/inquiry-form"} /-->

<!-- wp:group {"className":"py-16 bg-background","layout":{"type":"default"}} -->
<section class="py-16 bg-background">
  <div class="container-page max-w-4xl">
    <h2 class="text-2xl font-bold text-foreground mb-6">Direct Communication Channels</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-2xl border border-border bg-card p-6">
        <h3 class="font-semibold text-foreground">Email</h3>
        <p class="mt-2 text-sm text-primary font-medium"><a href="mailto:info@avrwebconsulting.com">info@avrwebconsulting.com</a></p>
        <p class="mt-1 text-xs text-muted-foreground">Proposals &amp; technical briefs</p>
      </div>
      <div class="rounded-2xl border border-border bg-card p-6">
        <h3 class="font-semibold text-foreground">Phone</h3>
        <p class="mt-2 text-sm text-primary font-medium"><a href="tel:+919876543210">+91 98765 43210</a></p>
        <p class="mt-1 text-xs text-muted-foreground">Quick scoping discussions</p>
      </div>
      <div class="rounded-2xl border border-border bg-card p-6">
        <h3 class="font-semibold text-foreground">WhatsApp</h3>
        <p class="mt-2 text-sm text-primary font-medium"><a href="https://wa.me/919876543210">Chat on WhatsApp</a></p>
        <p class="mt-1 text-xs text-muted-foreground">Fast status &amp; reporting</p>
      </div>
      <div class="rounded-2xl border border-border bg-card p-6">
        <h3 class="font-semibold text-foreground">Office</h3>
        <p class="mt-2 text-sm text-foreground font-medium">Visakhapatnam, AP, India</p>
        <p class="mt-1 text-xs text-muted-foreground">Mon–Sat, 9:00 AM – 6:00 PM IST</p>
      </div>
    </div>
  </div>
</section>
<!-- /wp:group -->

<!-- wp:pattern {"slug":"avr/cta-section"} /-->`,
  });

  // Blog Hub Page
  allItems.push({
    id: postIdCounter++,
    type: "page",
    title: "Blog — Insights on SEO, AI Search & Growth | AVR Web Consulting",
    slug: "blog",
    parentSlug: "",
    metaDesc: "Practical insights on SEO, AI search engines (Perplexity, ChatGPT, Gemini), local rankings, and web development from AVR Web Consulting.",
    content: `<!-- wp:group {"className":"py-12 lg:py-16 bg-mist border-b border-border","layout":{"type":"default"}} -->
<div class="py-12 lg:py-16 bg-mist border-b border-border">
  <div class="container-page max-w-4xl text-center">
    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">Industry Knowledge</p>
    <h1 class="text-3xl font-bold leading-tight lg:text-5xl text-foreground mb-4">Latest Insights on SEO &amp; AI Visibility</h1>
    <p class="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">Original research, technical guides, and practical playbooks to help your business navigate traditional and AI-powered search engines.</p>
  </div>
</div>
<!-- /wp:group -->

<!-- wp:query {"queryId":1,"query":{"perPage":12,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true}} -->
<div class="wp-block-query py-16 container-page">
  <!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
  <div class="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between shadow-xs hover:border-primary transition-all">
    <div>
      <div class="text-xs font-medium text-primary mb-2"><!-- wp:post-date /--></div>
      <h3 class="text-xl font-bold text-foreground mb-3"><a href="#" class="hover:text-primary transition-colors"><!-- wp:post-title {"isLink":true} /--></a></h3>
      <div class="text-sm text-muted-foreground leading-relaxed mb-4"><!-- wp:post-excerpt {"moreText":"Read Article →"} /--></div>
    </div>
  </div>
  <!-- /wp:post-template -->

  <!-- wp:query-pagination {"layout":{"type":"flex","justifyContent":"center"}} -->
  <div class="wp-block-query-pagination mt-8 flex justify-center gap-2">
    <!-- wp:query-pagination-previous /-->
    <!-- wp:query-pagination-numbers /-->
    <!-- wp:query-pagination-next /-->
  </div>
  <!-- /wp:query-pagination -->
</div>
<!-- /wp:query -->

<!-- wp:pattern {"slug":"avr/cta-section"} /-->`,
  });

  // 12. Blog Posts
  const blogList = blog.blogPosts || blog.blogSeeds || [];
  for (const b of blogList) {
    allItems.push({
      id: postIdCounter++,
      type: "post",
      title: b.title,
      slug: b.slug,
      category: b.category || "SEO",
      date: b.date || "2026-03-15",
      parentSlug: "",
      metaDesc: b.description,
      content: convertPageToBlocks(b),
    });
  }

  console.log(`Successfully converted ${allItems.length} total items (${allItems.filter((i) => i.type === "page").length} pages, ${allItems.filter((i) => i.type === "post").length} posts)!`);

  // Write content-seeds.json
  const seedsPath = path.resolve(root, "avr-web-consulting/inc/content-seeds.json");
  fs.writeFileSync(seedsPath, JSON.stringify(allItems, null, 2), "utf8");
  console.log(`Saved JSON seeds to: ${seedsPath}`);

  // Build WXR 1.2 XML
  const xmlParts = [];
  xmlParts.push(`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
	xmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:wp="http://wordpress.org/export/1.2/"
>
<channel>
	<title>AVR Web Consulting</title>
	<link>https://avrwebconsulting.com</link>
	<description>Digital Marketing &amp; AI SEO Agency</description>
	<pubDate>Mon, 19 Oct 2026 10:00:00 +0000</pubDate>
	<language>en-US</language>
	<wp:wxr_version>1.2</wp:wxr_version>
	<wp:base_site_url>https://avrwebconsulting.com</wp:base_site_url>
	<wp:base_blog_url>https://avrwebconsulting.com</wp:base_blog_url>

	<wp:author>
		<wp:author_id>1</wp:author_id>
		<wp:author_login><![CDATA[admin]]></wp:author_login>
		<wp:author_email><![CDATA[info@avrwebconsulting.com]]></wp:author_email>
		<wp:author_display_name><![CDATA[AVR Web Consulting]]></wp:author_display_name>
		<wp:author_first_name><![CDATA[AVR]]></wp:author_first_name>
		<wp:author_last_name><![CDATA[Consulting]]></wp:author_last_name>
	</wp:author>
`);

  for (const item of allItems) {
    const postDate = item.date ? `${item.date} 10:00:00` : "2026-10-19 10:00:00";
    xmlParts.push(`	<item>
		<title><![CDATA[${item.title}]]></title>
		<link>https://avrwebconsulting.com/${item.parentSlug ? item.parentSlug + "/" : ""}${item.slug}</link>
		<pubDate>Mon, 19 Oct 2026 10:00:00 +0000</pubDate>
		<dc:creator><![CDATA[admin]]></dc:creator>
		<guid isPermaLink="false">https://avrwebconsulting.com/?p=${item.id}</guid>
		<description></description>
		<content:encoded><![CDATA[${item.content}]]></content:encoded>
		<excerpt:encoded><![CDATA[${item.metaDesc || ""}]]></excerpt:encoded>
		<wp:post_id>${item.id}</wp:post_id>
		<wp:post_date><![CDATA[${postDate}]]></wp:post_date>
		<wp:post_date_gmt><![CDATA[${postDate}]]></wp:post_date_gmt>
		<wp:comment_status><![CDATA[closed]]></wp:comment_status>
		<wp:ping_status><![CDATA[closed]]></wp:ping_status>
		<wp:post_name><![CDATA[${item.slug}]]></wp:post_name>
		<wp:status><![CDATA[publish]]></wp:status>
		<wp:post_parent>0</wp:post_parent>
		<wp:menu_order>0</wp:menu_order>
		<wp:post_type><![CDATA[${item.type}]]></wp:post_type>
		<wp:post_password><![CDATA[]]></wp:post_password>
		<wp:is_sticky>0</wp:is_sticky>
		${item.category ? `<category domain="category" nicename="${item.category.toLowerCase().replace(/\s+/g, "-")}"><![CDATA[${item.category}]]></category>` : ""}
		<wp:postmeta>
			<wp:meta_key><![CDATA[_yoast_wpseo_title]]></wp:meta_key>
			<wp:meta_value><![CDATA[${item.title}]]></wp:meta_value>
		</wp:postmeta>
		<wp:postmeta>
			<wp:meta_key><![CDATA[_yoast_wpseo_metadesc]]></wp:meta_key>
			<wp:meta_value><![CDATA[${item.metaDesc || ""}]]></wp:meta_value>
		</wp:postmeta>
		<wp:postmeta>
			<wp:meta_key><![CDATA[_avr_parent_slug]]></wp:meta_key>
			<wp:meta_value><![CDATA[${item.parentSlug || ""}]]></wp:meta_value>
		</wp:postmeta>
	</item>`);
  }

  xmlParts.push(`</channel>
</rss>`);

  const importDir = path.resolve(root, "avr-web-consulting/import");
  if (!fs.existsSync(importDir)) {
    fs.mkdirSync(importDir, { recursive: true });
  }

  const xmlPath = path.resolve(importDir, "avr-web-consulting-content.xml");
  fs.writeFileSync(xmlPath, xmlParts.join("\n"), "utf8");
  console.log(`Saved WXR 1.2 XML export to: ${xmlPath}`);
}

main().catch(console.error);
