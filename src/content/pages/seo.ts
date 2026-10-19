import type { PageContent } from "@/content/types";
import seoConcept from "@/assets/seo-concept.jpg.asset.json";
import entrepreneur from "@/assets/entrepreneur.jpg.asset.json";
import laptopWork from "@/assets/laptop-work.jpg.asset.json";
import teamMeeting from "@/assets/team-meeting.jpg.asset.json";
import aiSearch from "@/assets/ai-search.jpg.asset.json";

const crumb = (label: string, to: string) => ({ label, to });
const base = [crumb("Home", "/"), crumb("SEO Services", "/seo-services")];

export const seoServicesHub: PageContent = {
  slug: "/seo-services",
  title: "SEO Services for Business Websites | AVR Web Consulting",
  h1: "SEO services that earn rankings in Google and citations in AI answers",
  description:
    "Improve your rankings with SEO services from AVR Web Consulting: audits, on-page optimization, technical fixes and backlinks. Request a free audit.",
  keywords: "search engine optimization service, search optimization services, seo optimization companies",
  eyebrow: "SEO Services",
  serviceName: "Search Engine Optimization",
  answer:
    "AVR Web Consulting provides four core SEO services: global SEO for multi-country organic growth, local SEO for map and near-me visibility, technical SEO for crawlability and Core Web Vitals, and GEO targeting for city-level rankings. Packages start at $200 per month with manual, penalty-safe execution.",
  hero: { image: "/images/seo-typing-laptop.webp", imageAlt: "SEO Services — Global, Local, Technical & GEO | AVR Web Consulting illustration" },
  highlights: [
    { label: "Starting price", value: "$200/mo" },
    { label: "Citations live in", value: "3 days" },
    { label: "Technical fixes", value: "1 week" },
    { label: "Markets served", value: "India + Global" },
  ],
  breadcrumb: [crumb("Home", "/"), crumb("SEO Services", "/seo-services")],
  related: [
    { label: "AI SEO services", to: "/ai-seo" },
    { label: "Content marketing", to: "/content-marketing" },
    { label: "Pricing", to: "/pricing" },
  ],
  sections: [
    
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        { kind: "list", items: [
          "Expert strategies tailored for SEO Services — Global, Local, Technical & GEO",
          "Data-driven approach without relying on guesswork",
          "Focus on sustainable, long-term search visibility",
          "Fully aligned with modern Answer Engine and AI search requirements"
        ]}
      ]
    }, {
      id: "what-you-get",
      heading: "What our SEO services include",
      blocks: [
        {
          kind: "paragraph",
          text: "Every engagement starts with a full technical and content audit, then moves into a prioritised roadmap. We do not sell traffic for its own sake — the goal is qualified visibility: the queries that produce enquiries, calls and orders for your business, in the countries and cities where you actually sell.",
        },
        {
          kind: "list",
          title: "Included in every SEO retainer",
          items: [
            "Technical audit covering crawlability, indexation, site speed and Core Web Vitals",
            "Keyword and intent mapping across informational, commercial and transactional queries",
            "On-page optimisation: titles, meta descriptions, headings, internal links, schema markup",
            "Content briefs and answer-first content production for priority pages",
            "Manual link building and citation placement — no PBNs, no automated spam",
            "Monthly reporting with rankings, traffic, conversions and AI-answer visibility tracking",
          ],
        },
        {
          kind: "callout",
          title: "Hybrid by default",
          text: "Every SEO retainer now includes baseline AEO and LLM optimisation — schema, answer blocks and entity consistency — because a growing share of searches ends in an AI summary rather than a blue link.",
        },
      ],
    },
    {
      id: "service-lines",
      heading: "Choose the SEO service that matches your goal",
      blocks: [
        {
          kind: "table",
          head: ["Service", "Best for", "Primary outcome"],
          rows: [
            ["Global SEO", "SaaS, e-commerce and exporters selling in multiple countries", "Organic revenue across US, UK, UAE and Europe"],
            ["Local SEO", "Clinics, showrooms, service providers with a service area", "Map pack rankings, calls and direction requests"],
            ["Technical SEO", "Large or legacy sites with crawl and speed problems", "Clean indexation and faster page experience"],
            ["GEO Targeting SEO", "Multi-city operators in Indian metros", "City-level ranking for 'service + city' queries"],
            ["Dental SEO Services", "Dental clinics, orthodontists & cosmetic practices", "Top 3-Pack rankings and new patient appointments"],
            ["Locksmith SEO", "Emergency locksmiths and mobile security pros", "Immediate mobile click-to-call emergency dispatch leads"],
            ["Car Dealership SEO", "Auto dealerships and certified service centers", "Showroom foot traffic, test drives, and service bay bookings"],
            ["Real Estate SEO Services", "Brokers, realtors, and regional agencies", "Exclusive listing seller leads and active homebuyer inquiries"],
          ],
        },
        {
          kind: "paragraph",
          text: "Most clients combine two: technical SEO to remove the ceiling, then either local or global depending on where revenue comes from. If you are unsure, our audit tells you which lever moves first.",
        },
      ],
    },
    {
      id: "process",
      heading: "Our SEO process",
      blocks: [
        {
          kind: "steps",
          items: [
            { title: "Audit (week 1)", text: "Technical crawl, content inventory, backlink review, competitor gap analysis and AI-answer baseline." },
            { title: "Roadmap (week 1–2)", text: "A prioritised list ranked by impact and effort, with owners and dates. You approve before work starts." },
            { title: "Fix and optimise (week 2–4)", text: "Technical fixes shipped, priority pages rewritten answer-first, schema deployed, internal links rebuilt." },
            { title: "Build authority (ongoing)", text: "Manual citations, guest posts and digital PR that earn real editorial links and AI-citable mentions." },
            { title: "Measure and iterate (monthly)", text: "Rankings, organic sessions, conversions and AI visibility reviewed monthly; the roadmap is re-prioritised each cycle." },
          ],
        },
      ],
    },
    {
      id: "why-avr",
      heading: "Why businesses choose AVR Web Consulting",
      blocks: [
        {
          kind: "list",
          items: [
            "Affordable, transparent pricing — SEO from $200/month, local SEO from $100/month, guest posts from $20",
            "Fast delivery: citations live in 3 days, technical fixes shipped within a week",
            "100% manual work — every citation, link and guest post is placed by a human",
            "Hybrid expertise: classic SEO plus AEO, GEO, LLM SEO and LLMO under one roof",
            "Global plus local: teams experienced with US, UK, UAE, European and Indian search markets",
          ],
        },
      ],
    },
  ],
  faqs: [
    { question: "How much do your SEO services cost?", answer: "SEO retainers start at $200 per month for global SEO and $100 per month for local SEO. Guest posts start at $20 per placement. Final pricing depends on the number of target keywords, languages and markets; you get a fixed monthly figure before work begins." },
    { question: "How long does SEO take to show results?", answer: "Technical fixes and on-page improvements often move rankings within 4–8 weeks. Competitive commercial keywords typically take 4–6 months of consistent content and link building. Local SEO and citation work usually shows movement in the map pack within 30–60 days." },
    { question: "Do you guarantee first-page rankings?", answer: "No credible agency can guarantee a specific position, because ranking systems are controlled by Google and AI engines. We guarantee deliverables, timelines and transparent reporting, and we track ranking, traffic and conversion trends so progress is measurable." },
    { question: "Which countries do you provide SEO services in?", answer: "We serve clients globally, with focus markets in the United States, United Kingdom, United Arab Emirates and Europe, plus national coverage across India including Delhi, Mumbai, Chennai, Bangalore, Hyderabad and Visakhapatnam." },
    { question: "Is your link building safe?", answer: "Yes. All links and citations are placed manually on real, indexed sites with genuine traffic. We do not use private blog networks, automated tools or link farms, which is why our clients avoid manual actions and algorithmic penalties." },
    { question: "Do you work with small businesses and startups?", answer: "Yes. A large part of our client base is small businesses, local service providers and early-stage startups. Local SEO from $100 per month is designed specifically for businesses that need enquiries rather than vanity traffic." },
    { question: "What reporting do you provide?", answer: "You receive a monthly report covering keyword rankings, organic sessions, conversions, links and citations built, technical health and AI-answer visibility, along with a short written summary of what changed and what happens next." },
    { question: "Can you fix an existing site or do you need to rebuild it?", answer: "In most cases we optimise the existing site. Rebuilds are only recommended when the platform blocks indexation, speed or schema — and we will tell you plainly if that is the case rather than selling a redesign by default." },
    { question: "Do your SEO packages include content writing?", answer: "Yes. Content briefs and answer-first article production are included in all standard retainers. Volume depends on the package; additional articles and landing pages can be added at any time." },
    { question: "How is SEO different from AI SEO?", answer: "Classic SEO optimises for ranked links in Google and Bing. AI SEO — AEO, GEO, LLM SEO and LLMO — optimises for being quoted inside AI answers from ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews. We run both together because users now move between them." },
  ],
};

export const globalSeo: PageContent = {
  slug: "/seo-services/global-seo",
  title: "Organic SEO Agency and Consultant | AVR Web Consulting",
  h1: "Global SEO services for multi-country organic growth",
  description:
    "Build steady, long-term search visibility without paid ads. Our organic SEO agency focuses on content, on-page work and quality backlinks. Get a free audit.",
  keywords: "organic seo agency, organic seo consultant",
  eyebrow: "SEO Services",
  serviceName: "Global SEO",
  answer:
    "Global SEO makes one website rank in several countries at once. AVR Web Consulting builds the country and language architecture, hreflang tags, localised keyword sets and market-specific links required for a single domain to compete in US, UK, UAE and European search results.",
  hero: { image: "/images/digital-marketing.webp", imageAlt: "Global SEO Services for US, UK, UAE & Europe | AVR Web Consulting illustration" },
  highlights: [
    { label: "From", value: "$200/mo" },
    { label: "Markets", value: "US · UK · UAE · EU" },
    { label: "Audit delivery", value: "5 days" },
    { label: "Work type", value: "100% manual" },
  ],
  breadcrumb: [...base, crumb("Global SEO", "/seo-services/global-seo")],
  related: [
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "LLM SEO", to: "/ai-seo/llm-seo" },
  ],
  sections: [
    
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        { kind: "list", items: [
          "Expert strategies tailored for Global SEO Services for US, UK, UAE & Europe",
          "Data-driven approach without relying on guesswork",
          "Focus on sustainable, long-term search visibility",
          "Fully aligned with modern Answer Engine and AI search requirements"
        ]}
      ]
    }, {
      id: "definition",
      heading: "What is global SEO?",
      blocks: [
        { kind: "paragraph", text: "Global SEO — also called international SEO — is the practice of structuring and optimising a website so it can rank in more than one country or language. It combines a technical layer (URL structure, hreflang, indexing rules), a content layer (localised keywords, currency, spelling, examples) and an authority layer (links and mentions from each target market)." },
        { kind: "paragraph", text: "The mistake most brands make is translating pages and hoping Google sorts it out. Search intent differs by market: a UK buyer searches 'SEO agency pricing', a US buyer searches 'SEO agency cost', and a UAE buyer often searches in English but expects local currency and WhatsApp contact. Global SEO is intent research repeated per market." },
      ],
    },
    {
      id: "architecture",
      heading: "Choosing the right international architecture",
      blocks: [
        {
          kind: "table",
          head: ["Structure", "Example", "When we recommend it"],
          rows: [
            ["ccTLD", "example.co.uk", "Strong local trust needed, budget for separate authority building"],
            ["Subdirectory", "example.com/uk/", "Most clients — consolidates authority, cheapest to maintain"],
            ["Subdomain", "uk.example.com", "Separate tech stacks or regional teams"],
            ["Parameter", "example.com?loc=uk", "Not recommended — weak signals and crawl waste"],
          ],
        },
        { kind: "callout", title: "Our default recommendation", text: "Subdirectories with correct hreflang and a clear canonical policy. It concentrates link equity, is cheapest to run, and is the fastest structure to get indexed correctly." },
      ],
    },
    {
      id: "deliverables",
      heading: "What is included in a global SEO engagement",
      blocks: [
        {
          kind: "list",
          items: [
            "Market prioritisation based on demand, competition and your fulfilment capacity",
            "Country and language keyword research with local search volume and intent labels",
            "hreflang implementation and validation, including x-default handling",
            "Localised on-page optimisation: titles, meta, headings, currency, spelling, units",
            "Duplicate-content control across similar English variants (US/UK/AU)",
            "Country-specific link building and digital PR",
            "Geo-targeted schema, Organization data and consistent NAP across markets",
            "Search Console property setup and per-country performance reporting",
          ],
        },
      ],
    },
    {
      id: "ai-layer",
      heading: "Global SEO in the age of AI answers",
      blocks: [
        { kind: "paragraph", text: "AI assistants answer country-specific questions using region-aware retrieval. If your UK page has no pricing in GBP, no UK entity signals and no UK citations, an LLM will summarise a competitor instead. We add answer blocks, localised FAQ schema and per-market entity consistency so your pages are retrievable in every market you serve." },
        { kind: "list", title: "AI signals we add per market", items: ["Answer-first summary paragraphs in local phrasing", "FAQPage schema with market-specific questions", "Consistent brand, address and service naming across all locales", "Citable statistics and clearly attributed claims"] },
      ],
    },
  ],
  faqs: [
    { question: "What is the difference between global SEO and local SEO?", answer: "Global SEO targets audiences in multiple countries through language and country signals, while local SEO targets buyers near a physical location through Google Business Profile, citations and map-pack signals. Many clients run both: local for their home city and global for export markets." },
    { question: "Do I need separate websites for each country?", answer: "Usually not. For most businesses a single domain with country subdirectories and correct hreflang performs better than several weak websites, because all links and authority accumulate on one domain." },
    { question: "How does hreflang work?", answer: "Hreflang tags tell search engines which language and regional version of a page to show. Each version must reference every other version, including itself, and pair with a self-referencing canonical. Incorrect or one-way hreflang is one of the most common international SEO faults we fix." },
    { question: "How long does global SEO take?", answer: "Architecture and technical work is typically complete in 3–6 weeks. Ranking traction in a new country usually appears from month three, and compounds from month six as market-specific links and content accumulate." },
    { question: "Can you handle non-English markets?", answer: "Yes. We manage localisation with native reviewers for major European languages and Arabic, and we always localise intent and examples rather than machine-translating existing pages." },
    { question: "How much does global SEO cost?", answer: "Global SEO retainers start at $200 per month for a single market and scale with the number of countries, languages and pages. You receive a fixed monthly price after the audit, with no long lock-in contracts." },
    { question: "Will duplicate English pages hurt my rankings?", answer: "Not if handled correctly. Near-duplicate US, UK and AU pages need hreflang plus meaningful localisation — pricing, spelling, examples and contact details — so each version is genuinely useful for its market." },
    { question: "Do you build links in each target country?", answer: "Yes. Local relevance matters, so we place manual guest posts, listings and digital PR mentions on sites based in or read by each target market rather than relying on generic global directories." },
    { question: "How do you measure global SEO performance?", answer: "We segment Search Console and analytics by country, then report impressions, clicks, average position, conversions and AI-answer citations per market so you can see which country is paying back its investment." },
    { question: "Can global SEO work for a small business?", answer: "Yes, if you focus. We usually start with one or two priority countries and a tight keyword set rather than launching ten locales at once, which keeps costs low and produces measurable wins faster." },
  ],
};

export const localSeo: PageContent = {
  slug: "/seo-services/local-seo",
  title: "Local SEO Agency for Small Businesses | AVR Web Consulting",
  h1: "Local SEO services that fill the map pack with your business",
  description:
    "Get found by nearby customers with local SEO from AVR Web Consulting: keyword research, on-page fixes, GMB setup and citations. Request a free audit.",
  keywords: "local seo agency, best local seo agency, best local search engine optimization companies, local business seo services, local seo for small businesses, search engine optimization for local business",
  eyebrow: "SEO Services",
  serviceName: "Local SEO",
  answer:
    "Local SEO makes your business appear when nearby customers search. AVR Web Consulting optimises your Google Business Profile, builds manually verified local citations within three days, fixes NAP consistency, and targets 'near me' and 'service + city' keywords from $100 per month.",
  hero: { image: "/images/local-seo-hero.jpg", imageAlt: "Local SEO Services from $100/month | AVR Web Consulting illustration" },
  highlights: [
    { label: "From", value: "$100/mo" },
    { label: "Citations live", value: "3 days" },
    { label: "GMB posts", value: "Weekly" },
    { label: "Review support", value: "Included" },
  ],
  breadcrumb: [...base, crumb("Local SEO", "/seo-services/local-seo")],
  related: [
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Locations we serve", to: "/locations" },
  ],
  sections: [
    
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        { kind: "list", items: [
          "Expert strategies tailored for Local SEO Services from $100/month",
          "Data-driven approach without relying on guesswork",
          "Focus on sustainable, long-term search visibility",
          "Fully aligned with modern Answer Engine and AI search requirements"
        ]}
      ]
    }, {
      id: "how-it-works",
      heading: "How local ranking actually works",
      blocks: [
        { kind: "paragraph", text: "Google ranks local results on three factors: relevance (does your profile and site match the query), distance (how close you are to the searcher) and prominence (how well known and well cited your business is). You cannot change distance, so local SEO is the discipline of maximising relevance and prominence." },
        { kind: "list", title: "The levers we pull", items: ["Google Business Profile categories, services, attributes and description", "Consistent name, address and phone number across every directory", "Location and service landing pages with genuine local content", "Review volume, recency and keyword-rich review responses", "Local links from chambers, associations, sponsorships and regional media", "Geo and LocalBusiness schema on the website"] },
      ],
    },
    {
      id: "citations",
      heading: "Manual citations delivered in three days",
      blocks: [
        { kind: "paragraph", text: "Citations are mentions of your business name, address and phone number on directories and industry sites. Their value comes from consistency: a single wrong suite number or old phone line can suppress map rankings. We build every citation by hand, then send a live URL sheet you can verify." },
        { kind: "table", head: ["Package", "Citations", "Turnaround"], rows: [["Starter", "30 manual citations", "3 days"], ["Growth", "60 manual citations + cleanup", "5 days"], ["Multi-location", "30 per location", "5–7 days"]] },
      ],
    },
    {
      id: "content",
      heading: "Location pages that rank without duplication",
      blocks: [
        { kind: "paragraph", text: "Spun city pages no longer rank. Each location page we build carries a distinct opening answer, local proof (projects, reviews, landmarks, service radius), local FAQs and its own LocalBusiness schema with correct coordinates — which also makes the page usable by AI assistants answering 'best X near me' questions." },
        { kind: "steps", items: [{ title: "Research", text: "Local intent keywords, competitor map pack analysis and review gap review." }, { title: "Build", text: "One optimised page per genuine service area with unique copy and schema." }, { title: "Prove", text: "Add local reviews, case snippets and photos to establish real presence." }, { title: "Promote", text: "Local citations, GMB posts and regional links pointing at the location page." }] },
      ],
    },
    {
      id: "ai-local",
      heading: "Local visibility inside AI assistants",
      blocks: [
        { kind: "paragraph", text: "AI assistants increasingly answer local queries by summarising directory data, reviews and structured markup rather than a map. Businesses with consistent NAP, rich LocalBusiness schema and quotable review content get named in those answers; businesses with conflicting listings simply disappear." },
        { kind: "callout", title: "Included in every local retainer", text: "LocalBusiness schema, 10 local FAQs with FAQPage markup, and entity consistency checks across Google, Bing Places, Apple Maps and the top directories in your market." },
      ],
    },
  ],
  faqs: [
    { question: "How much does local SEO cost?", answer: "Local SEO starts at $100 per month per location. That includes Google Business Profile optimisation, weekly posts, citation maintenance, review guidance and on-page work for your location pages." },
    { question: "How fast will I appear in the map pack?", answer: "Most single-location businesses see map pack movement in 30–60 days once citations are consistent and the profile is fully completed. Competitive metro categories such as dentistry or real estate usually take three to four months." },
    { question: "What is a citation and why does it matter?", answer: "A citation is any online mention of your business name, address and phone number. Search engines use the consistency of those mentions to verify that your business is real and located where you claim, which directly affects map rankings." },
    { question: "Do you manage Google Business Profile posts and photos?", answer: "Yes. We publish weekly posts, add geo-tagged photos, keep services and hours accurate, answer Q&A entries and monitor for unauthorised profile edits or suspensions." },
    { question: "Can you help with reviews?", answer: "We provide a compliant review generation system — request templates, QR cards and follow-up sequences — plus response writing. We never buy or fabricate reviews, which risks profile suspension." },
    { question: "Do I need a physical address for local SEO?", answer: "You need either a physical address or a defined service area. Service-area businesses can hide the address and still rank, provided the profile, citations and website all describe the same service radius." },
    { question: "Can you rank one business in multiple cities?", answer: "Yes, through a combination of genuine service-area pages, city-specific content and, where you have real premises, additional verified Google Business Profiles. We never create fake listings — they get removed and can suspend the main profile." },
    { question: "How do you report local SEO results?", answer: "You receive monthly grid rank tracking around your location, Google Business Profile insights (calls, direction requests, website clicks), citation status and organic conversions from location pages." },
    { question: "What is NAP consistency?", answer: "NAP stands for name, address and phone number. Consistency means every listing uses the exact same format everywhere. Variations such as 'Ste 4' versus 'Suite 4' weaken the trust signal and can hold back map rankings." },
    { question: "Does local SEO help with AI search?", answer: "Yes. Assistants like ChatGPT and Gemini pull from directories, reviews and structured data. Clean NAP, LocalBusiness schema and answer-formatted content make your business far more likely to be named when someone asks an AI for a local recommendation." },
  ],
};

export const technicalSeo: PageContent = {
  slug: "/seo-services/technical-seo",
  title: "SEO Website Optimization Services | AVR Web Consulting",
  h1: "Technical SEO that removes the ceiling on your rankings",
  description:
    "Improve an existing website's rankings with SEO website optimization: page speed, on-page fixes and technical clean-up. Request a free website audit.",
  keywords: "seo website optimization services",
  eyebrow: "SEO Services",
  serviceName: "Technical SEO",
  answer:
    "Technical SEO ensures search engines and AI crawlers can find, render, understand and index every important page. AVR Web Consulting audits crawlability, indexation, speed, structured data and rendering, then ships the critical fixes within one week of approval.",
  hero: { image: "/images/analytics-yearly-growth-2025.webp", imageAlt: "Technical SEO Services & Site Audits | AVR Web Consulting illustration" },
  highlights: [
    { label: "Audit delivery", value: "5 days" },
    { label: "Critical fixes", value: "1 week" },
    { label: "Checks run", value: "180+" },
    { label: "Includes", value: "Schema + CWV" },
  ],
  breadcrumb: [...base, crumb("Technical SEO", "/seo-services/technical-seo")],
  related: [
    { label: "Global SEO", to: "/seo-services/global-seo" },
    { label: "AI retrieval systems", to: "/ai-seo/ai-retrieval-systems" },
    { label: "Web design & development", to: "/web-design-development" },
  ],
  sections: [
    
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        { kind: "list", items: [
          "Expert strategies tailored for Technical SEO Services & Site Audits",
          "Data-driven approach without relying on guesswork",
          "Focus on sustainable, long-term search visibility",
          "Fully aligned with modern Answer Engine and AI search requirements"
        ]}
      ]
    }, {
      id: "audit",
      heading: "What our technical audit covers",
      blocks: [
        { kind: "list", items: ["Crawl analysis: orphan pages, redirect chains, crawl traps, faceted URL bloat", "Indexation review: coverage reports, canonical conflicts, noindex accidents, duplicate clusters", "Rendering: JavaScript dependency, hydration issues, server-side vs client-side content parity", "Core Web Vitals: LCP, INP and CLS diagnosis at template level, not just page level", "Structured data: coverage, validity and opportunity mapping across page types", "Internal linking: depth, anchor distribution and hub-and-spoke integrity", "Log file review for large sites: what crawlers actually request versus what you publish", "Security and hygiene: HTTPS, mixed content, status codes, robots.txt and sitemap accuracy"] },
      ],
    },
    {
      id: "common-issues",
      heading: "The technical problems we find most often",
      blocks: [
        { kind: "table", head: ["Issue", "Typical impact", "Usual fix time"], rows: [["Client-side rendered content", "Key copy invisible to some crawlers", "1–3 weeks (dev)"], ["Missing or invalid schema", "No rich results, weak AI retrieval", "2–4 days"], ["Slow LCP on templates", "Ranking and conversion loss on mobile", "1–2 weeks"], ["Canonical conflicts", "Wrong URL indexed, split authority", "1–3 days"], ["Broken internal link depth", "Important pages crawled rarely", "3–5 days"]] },
        { kind: "paragraph", text: "We separate findings into three buckets — critical (blocking indexation or revenue), high (measurable ranking drag) and hygiene — so your developers know exactly what to do first. Where you have no development capacity, our team implements the fixes directly." },
      ],
    },
    {
      id: "ai-crawlers",
      heading: "Technical SEO for AI crawlers",
      blocks: [
        { kind: "paragraph", text: "AI answer engines run their own crawlers — GPTBot, ClaudeBot, PerplexityBot, Google-Extended — and most of them execute little or no JavaScript. If your content only exists after hydration, you are invisible to them even if Google renders you fine." },
        { kind: "list", title: "What we implement", items: ["Server-rendered HTML for all indexable content", "robots.txt rules that deliberately allow the AI crawlers you want", "Clean semantic HTML: one H1, real headings, tables and definition lists", "Complete JSON-LD entity graph linking Organization, Service, Article and FAQ", "An llms.txt summary file describing the site for LLM retrieval"] },
      ],
    },
    {
      id: "deliverable",
      heading: "What you receive",
      blocks: [
        { kind: "steps", items: [{ title: "Findings document", text: "Every issue with evidence, affected URLs, business impact and a recommended fix." }, { title: "Prioritised backlog", text: "Ticket-ready items your developers can pick up, ordered by impact and effort." }, { title: "Implementation", text: "We ship the fixes ourselves where you prefer, then re-test each item." }, { title: "Verification", text: "Post-fix crawl, Search Console monitoring and a written confirmation of what changed." }] },
      ],
    },
  ],
  faqs: [
    { question: "How long does a technical SEO audit take?", answer: "A standard audit is delivered within five working days. Enterprise sites with log-file analysis and multiple templates take up to ten working days." },
    { question: "Do you implement fixes or only recommend them?", answer: "Both. Many clients hand the prioritised backlog to their own developers; others ask us to implement directly. We are comfortable working in WordPress, Shopify and custom stacks." },
    { question: "What are Core Web Vitals and do they still matter?", answer: "Core Web Vitals measure loading (LCP), responsiveness (INP) and visual stability (CLS). They are a real but modest ranking factor, and a large conversion factor — slow mobile pages lose revenue regardless of rankings." },
    { question: "Will technical SEO alone increase my traffic?", answer: "Technical SEO removes constraints; content and authority create growth. When a site has serious crawl, index or rendering issues, fixing them can produce immediate gains. On a technically healthy site, the returns come from content and links instead." },
    { question: "How do you handle JavaScript-heavy websites?", answer: "We test rendered versus raw HTML, identify content that only appears after hydration, and recommend server-side rendering, static generation or prerendering for critical pages so both Google and AI crawlers see complete content." },
    { question: "What schema markup should my site have?", answer: "At minimum Organization and WebSite sitewide, Service on service pages, Article on posts, FAQPage where you answer questions, LocalBusiness for physical locations and BreadcrumbList on deep pages. We map schema per template rather than page by page." },
    { question: "How often should a technical audit be repeated?", answer: "A full audit annually, with quarterly health checks. Any time you migrate platforms, redesign or change URL structure, run an audit before and after launch." },
    { question: "Can technical SEO recover a traffic drop?", answer: "Often yes, when the drop came from an accidental noindex, a broken migration, canonical errors or a server performance regression. We start by matching the drop date against deployments, Search Console coverage and algorithm updates." },
    { question: "Do you do site migrations?", answer: "Yes. We plan URL mapping, redirect rules, schema parity and staging QA, then monitor coverage and rankings daily for the first four weeks after launch." },
    { question: "Does technical SEO affect AI visibility?", answer: "Significantly. Most AI crawlers do not render JavaScript and rely heavily on structured data and clean semantics, so a technically sound site is a precondition for being cited in AI answers." },
  ],
};

export const geoTargetingSeo: PageContent = {
  slug: "/seo-services/geo-targeting-seo",
  title: "Multi Location SEO for Growing Brands | AVR Web Consulting",
  h1: "GEO targeting SEO for city-level search dominance",
  description:
    "Help every branch rank in its own city. Our multi location SEO covers location pages, local listings and city-level keywords. Talk to AVR Web Consulting.",
  keywords: "multi location seo",
  eyebrow: "SEO Services",
  serviceName: "GEO Targeting SEO",
  answer:
    "GEO targeting SEO wins searches that include a place name, such as 'SEO agency Delhi' or 'web design Bangalore'. AVR Web Consulting builds unique city landing pages with local proof, geo schema and city-specific links so each metro ranks independently rather than competing with itself.",
  hero: { image: "/images/glowing-ai-brain.webp", imageAlt: "GEO Targeting SEO for Indian Metro Cities | AVR Web Consulting illustration" },
  highlights: [
    { label: "Cities covered", value: "8 metros" },
    { label: "Page build", value: "5–7 days" },
    { label: "Includes", value: "Geo schema" },
    { label: "Also serves", value: "US · UK · UAE" },
  ],
  breadcrumb: [...base, crumb("GEO Targeting SEO", "/seo-services/geo-targeting-seo")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "GEO SEO for AI engines", to: "/ai-seo/geo-seo" },
    { label: "Locations we serve", to: "/locations" },
  ],
  sections: [
    
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        { kind: "list", items: [
          "Expert strategies tailored for GEO Targeting SEO for Indian Metro Cities",
          "Data-driven approach without relying on guesswork",
          "Focus on sustainable, long-term search visibility",
          "Fully aligned with modern Answer Engine and AI search requirements"
        ]}
      ]
    }, {
      id: "what",
      heading: "What GEO targeting means in search",
      blocks: [
        { kind: "paragraph", text: "GEO targeting is optimisation for queries that carry an explicit location. These queries convert far better than generic ones because the searcher has already decided where they want the service delivered. In Indian metros, 'service + city' searches often account for the majority of commercial volume in a category." },
        { kind: "callout", title: "Two meanings of GEO", text: "In classic SEO, GEO means geographic targeting. In AI search, GEO also stands for Generative Engine Optimisation. We run both — see our GEO SEO page for the generative side." },
      ],
    },
    {
      id: "pages",
      heading: "How we build city pages that actually rank",
      blocks: [
        { kind: "list", items: ["A unique 40–60 word answer paragraph naming the city and service", "Locally researched keywords, including regional-language transliterations where relevant", "Genuine local proof: clients served, neighbourhoods covered, delivery timelines", "City-specific FAQs with FAQPage schema — ten per page", "LocalBusiness or Service schema with correct coordinates and area served", "Internal links from the national service hub and related city pages", "City-relevant links: local media, business associations, regional directories"] },
        { kind: "paragraph", text: "The failure mode is templating: replacing the city name in an identical block of text. Search engines cluster those pages as duplicates and rank none of them. Every page we produce has a different first paragraph, different proof and different questions." },
      ],
    },
    {
      id: "coverage",
      heading: "Cities and markets we cover",
      blocks: [
        { kind: "table", head: ["Market", "Cities", "Typical competition"], rows: [["India — tier 1", "Delhi, Mumbai, Bangalore, Hyderabad, Chennai", "High"], ["India — tier 2", "Pune, Kolkata, Visakhapatnam", "Medium"], ["Gulf", "Dubai, Abu Dhabi, Sharjah", "High"], ["Western", "London, New York, Manchester, Berlin", "Very high"]] },
      ],
    },
  ],
  faqs: [
    { question: "What is GEO targeting in SEO?", answer: "GEO targeting is optimising pages for searches that include a location, such as 'SEO services Hyderabad'. It combines city-specific content, geographic schema and locally relevant links so the page ranks in and for that place." },
    { question: "How is GEO targeting different from local SEO?", answer: "Local SEO focuses on map pack visibility around a physical location and relies heavily on Google Business Profile. GEO targeting is about organic pages ranking for location keywords, which works even in cities where you have no office." },
    { question: "Can I rank in a city where I have no office?", answer: "Yes, in organic results. You can build a service-area page for that city with genuine local content and links. You cannot legitimately appear in the map pack there without a verified address in that city." },
    { question: "How many city pages should I create?", answer: "Only as many as you can make genuinely different and genuinely serve. Ten strong city pages outperform a hundred templated ones, which risk being classified as doorway pages." },
    { question: "Do city pages count as doorway pages?", answer: "They do if they offer no unique value. Pages with distinct copy, real local proof, unique FAQs and clear service information are legitimate and rank well." },
    { question: "How long do city pages take to rank?", answer: "Tier-2 city pages often rank within 6–10 weeks. Tier-1 metros with entrenched competitors typically need four to six months of supporting links and content." },
    { question: "Do you handle regional languages?", answer: "We handle English plus transliterated regional terms that people actually search, and can arrange native-language content for Hindi, Telugu and Tamil where the demand justifies it." },
    { question: "What schema do city pages need?", answer: "Service or LocalBusiness schema with areaServed and geo coordinates, plus BreadcrumbList and FAQPage. This combination is also what AI engines use when answering location-based questions." },
    { question: "Can GEO targeting work internationally?", answer: "Yes. The same approach applies to Dubai, London or New York, with the addition of hreflang and currency localisation when multiple countries are in play." },
    { question: "How do you measure GEO targeting success?", answer: "We track rankings by city keyword group, organic sessions and conversions filtered by landing page, and grid-based local rank where a Google Business Profile exists in that city." },
  ],
};

export const localCitationsGmb: PageContent = {
  slug: "/seo-services/local-citations-gmb",
  title: "Google My Business SEO Services | AVR Web Consulting",
  h1: "Local citations and GMB optimisation, delivered in three days",
  description:
    "Set up and optimize your Google My Business profile so local searchers can find, call and visit you. See how AVR Web Consulting can help your listing.",
  keywords: "google my business and seo, google my business seo services",
  eyebrow: "SEO Services",
  serviceName: "Local Citations and GMB Optimisation",
  answer:
    "Local citations are consistent listings of your business name, address and phone number across directories. AVR Web Consulting builds 30–60 manual citations within three days, cleans conflicting listings, and fully optimises your Google Business Profile for categories, services, posts and reviews.",
  hero: { image: "/images/online-learning-video-call.webp", imageAlt: "Local Citations & Google Business Profile Optimisation | AVR illustration" },
  highlights: [
    { label: "Turnaround", value: "3 days" },
    { label: "Placement", value: "100% manual" },
    { label: "Report", value: "Live URLs" },
    { label: "Cleanup", value: "Included" },
  ],
  breadcrumb: [...base, crumb("Local Citations & GMB", "/seo-services/local-citations-gmb")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Pricing", to: "/pricing" },
  ],
  sections: [
    
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        { kind: "list", items: [
          "Expert strategies tailored for Local Citations & Google Business Profile Optimisation",
          "Data-driven approach without relying on guesswork",
          "Focus on sustainable, long-term search visibility",
          "Fully aligned with modern Answer Engine and AI search requirements"
        ]}
      ]
    }, {
      id: "why",
      heading: "Why citations still matter",
      blocks: [
        { kind: "paragraph", text: "Citations are the verification layer of local search. When your name, address and phone number appear identically across dozens of trusted sources, search engines and AI assistants gain confidence that the business exists as described. When those details conflict, confidence drops and so do rankings." },
        { kind: "list", title: "Where we list you", items: ["Global directories: Google, Bing Places, Apple Business Connect, Yelp, Foursquare", "Indian directories: JustDial, Sulekha, IndiaMART, TradeIndia and regional portals", "Industry directories relevant to your vertical", "Data aggregators that feed dozens of downstream listings"] },
      ],
    },
    {
      id: "gmb",
      heading: "Google Business Profile optimisation checklist",
      blocks: [
        { kind: "list", items: ["Primary and secondary category selection based on competitor analysis", "Complete service list with individual descriptions", "Keyword-informed business description within Google's guidelines", "Product and service photos, geo-tagged, refreshed monthly", "Weekly Google posts: offers, updates and event announcements", "Q&A seeding and moderation", "Review response templates and reputation monitoring", "Booking, messaging and UTM-tagged website links"] },
      ],
    },
    {
      id: "cleanup",
      heading: "Duplicate and conflict cleanup",
      blocks: [
        { kind: "steps", items: [{ title: "Discovery", text: "We scan directories and aggregators for every version of your listing, including old addresses and closed profiles." }, { title: "Decision", text: "We agree one canonical NAP format with you — exact spelling, suite formatting and phone number." }, { title: "Correction", text: "Duplicates are claimed and merged or suppressed; incorrect data is edited at the source." }, { title: "Verification", text: "You receive a spreadsheet of every listing with its live URL and current status." }] },
      ],
    },
  ],
  faqs: [
    { question: "How many citations does my business need?", answer: "Most single-location businesses need 30–60 quality citations. Beyond that, accuracy matters far more than volume — one conflicting listing can do more damage than ten extra directories add value." },
    { question: "How fast are citations delivered?", answer: "Standard packages of 30 manual citations are delivered within three working days, with a report of live URLs and login details for each submission." },
    { question: "Are the citations manual or automated?", answer: "Every citation is created manually by a team member. We do not use automated submission tools, which frequently produce broken or duplicate listings that later require cleanup." },
    { question: "What happens if my address changes?", answer: "We run a full NAP update across every listing we control, prioritising Google, Bing, Apple and the aggregators that feed other directories, then verify each change." },
    { question: "Do citations help if I have no physical storefront?", answer: "Yes. Service-area businesses still benefit from consistent listings; we simply hide the street address where the directory allows and emphasise the service radius." },
    { question: "Can you fix a suspended Google Business Profile?", answer: "We can prepare and submit a reinstatement request with supporting documentation, and correct the underlying issue — most often address mismatch, keyword stuffing in the name or ineligible virtual offices." },
    { question: "Do you manage multi-location businesses?", answer: "Yes. We manage bulk uploads, per-location profiles, location-specific posts and reporting, with 30 citations per location as standard." },
  ],
};

export const dentalSeo: PageContent = {
  slug: "/seo-services/dental-seo-services",
  title: "Dental SEO Services | Patient Acquisition for Dental Clinics | AVR Web Consulting",
  h1: "Dental SEO services that attract high-value patients to your clinic",
  description:
    "Attract more dental patients with tailored Dental SEO from AVR Web Consulting. Local map rankings, emergency dental intent, cosmetic dentistry keywords, and HIPAA-aware content.",
  keywords: "dental seo services, dental seo agency, seo for dentists, dental clinic search engine optimization, cosmetic dentistry seo",
  eyebrow: "SEO Services",
  serviceName: "Dental SEO Services",
  answer:
    "Dental SEO optimizes dental practice websites to attract local patients actively searching for cleanings, implants, emergency dentistry, and cosmetic procedures. AVR Web Consulting combines Google Maps 3-pack optimization, procedure-specific landing pages, review acceleration strategies, and LocalBusiness schema to keep your appointment books full from $200 per month.",
  hero: { image: "/images/local-seo-new.webp", imageAlt: "Dental SEO Services for practices and clinics | AVR Web Consulting illustration" },
  highlights: [
    { label: "From", value: "$200/mo" },
    { label: "Audit delivery", value: "3 days" },
    { label: "Focus", value: "Appointments & Calls" },
    { label: "Map 3-pack", value: "Priority" },
  ],
  breadcrumb: [...base, crumb("Dental SEO Services", "/seo-services/dental-seo-services")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Tailored patient-acquisition search strategies for general, cosmetic, pediatric, and orthodontic practices",
            "Dominance in the Google Local 3-Pack for 'dentist near me' and urgent dental inquiries",
            "Procedure-specific landing pages targeting high-margin services like Invisalign, dental implants, and veneers",
            "HIPAA and healthcare compliant content creation with physician schema and review syndication",
          ],
        },
      ],
    },
    {
      id: "why-dental-seo",
      heading: "Why dental practices require specialized SEO",
      blocks: [
        {
          kind: "paragraph",
          text: "Dental patient acquisition is governed by two distinct search intents: urgent immediate needs (e.g., 'emergency root canal near me', 'broken tooth extraction') and high-consideration elective procedures (e.g., 'all-on-4 dental implants cost', 'clear aligners vs braces'). Generic SEO strategies treat these queries identically, wasting budget on low-converting informational clicks.",
        },
        {
          kind: "paragraph",
          text: "Because patients rarely travel more than 15–20 minutes for routine care, geographical precision within your clinic's immediate radius is vital. We optimize your local prominence so neighboring families and professionals choose your clinic first.",
        },
      ],
    },
    {
      id: "procedure-architecture",
      heading: "Procedure-specific landing page architecture",
      blocks: [
        {
          kind: "table",
          head: ["Dental Service", "Target Patient Intent", "Core SEO Strategy"],
          rows: [
            ["General Dentistry", "Routine exams, cleanings, toothache", "Local 3-Pack, neighborhood keywords, insurance match"],
            ["Cosmetic Dentistry", "Teeth whitening, porcelain veneers", "Visual before/after galleries, commercial intent queries"],
            ["Dental Implants", "High-value tooth replacement", "Cost breakdowns, procedure explanation, patient testimonials"],
            ["Orthodontics", "Invisalign, clear aligners, teen braces", "Brand-name comparison, monthly financing queries"],
            ["Emergency Dental", "Acute pain, knocked-out tooth", "Mobile click-to-call, 24/7 schema, fast-loading mobile pages"],
          ],
        },
      ],
    },
    {
      id: "map-pack-dominance",
      heading: "Google Business Profile & Local 3-Pack dominance",
      blocks: [
        {
          kind: "paragraph",
          text: "Over 65% of dental appointment calls originate directly from the Google Maps interface. We meticulously optimize your Google Business Profile categories, clinic amenities (e.g., wheelchair accessibility, free parking), insurance accepted, and patient photo portfolios.",
        },
        {
          kind: "list",
          title: "Clinic map optimization checklist",
          items: [
            "Primary category 'Dentist' with secondary categories ('Cosmetic Dentist', 'Pediatric Dentist', 'Emergency Dental Service')",
            "Automated review acquisition workflows that prompt satisfied patients after appointments",
            "Geo-tagged interior operatory and friendly team photos establishing immediate trust",
            "Accurate business hours including emergency coverage schedules and holiday hours",
            "Dentist and MedicalBusiness JSON-LD schema linking physical address to Google Maps coordinates",
          ],
        },
      ],
    },
    {
      id: "deliverables",
      heading: "What our dental SEO packages include",
      blocks: [
        {
          kind: "steps",
          items: [
            { title: "Local Practice Audit", text: "Competitor map radius analysis, local citation audit, and clinic website speed crawl." },
            { title: "On-Page Procedure Optimization", text: "Rewriting service pages with patient-friendly clinical explanations, doctor bios, and appointment booking CTAs." },
            { title: "Healthcare Schema & Technical SEO", text: "Deploying Dentist schema, MedicalProcedure markup, openingHours, and Core Web Vitals optimization." },
            { title: "Local Authority Building", text: "Securing listings on healthcare portals (Healthgrades, Zocdoc, local medical associations) and verified citations." },
            { title: "Tracking & Patient Growth", text: "Tracking inbound phone calls, online appointment requests, and target procedure rankings monthly." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { question: "How long does Dental SEO take to generate new patient appointments?", answer: "Local map pack optimizations and citation cleanups typically generate increased phone calls within 45 to 60 days. Highly competitive elective keywords like 'dental implants' generally achieve top-three organic rankings within 4 to 6 months of steady content and backlink development." },
    { question: "Can Dental SEO help attract patients for cosmetic and implant procedures?", answer: "Yes. We create dedicated, in-depth service pages tailored specifically to cosmetic dentistry, veneers, and dental implants. These pages answer patient questions regarding financing, candidacy, recovery time, and longevity, converting high-value searchers into scheduled consultations." },
    { question: "How do you handle patient reviews and Google compliance?", answer: "We provide compliant review acquisition playbooks that help front-desk staff gather genuine Google reviews from happy patients. We never incentivize reviews or publish fake testimonials, maintaining full compliance with FTC and healthcare regulations." },
    { question: "Do you optimize our Google Business Profile for multiple dentists at one clinic?", answer: "Yes. Google allows practitioner profiles alongside the clinic practice profile. We establish proper canonical relationships between the practice listing and individual associate dentists to avoid cannibalization." },
    { question: "Does my dental practice need separate pages for each dental procedure?", answer: "Absolutely. Bundling all treatments onto a single 'Services' page prevents Google from understanding which procedure to rank. Dedicated pages for implants, pediatric care, teeth whitening, and emergency dentistry maximize keyword relevance." },
    { question: "What is Dentist structured data schema?", answer: "Dentist schema is structured code added to your website that explicitly informs Google of your clinic address, telephone, accepted insurances, doctor credentials, medical specializations, and office hours, helping search engines display rich snippets." },
    { question: "How do you track whether SEO is generating actual dental patients?", answer: "We track unique call tracking numbers, online booking submissions, click-to-call actions on mobile devices, and Google Business Profile direction requests, giving you clear monthly ROI metrics." },
    { question: "Can you help our clinic rank in surrounding suburbs or towns?", answer: "Yes. We build targeted service-area location pages for neighboring communities within your realistic patient travel radius, supported by local citations and localized content." },
    { question: "What should an emergency dental landing page include?", answer: "Emergency dental pages must load under 2 seconds, feature a sticky one-tap phone call button, specify accepted walk-in hours, display pain relief instructions, and reassure patients of same-day treatment." },
    { question: "How much do AVR Web Consulting Dental SEO services cost?", answer: "Our dental SEO retainers start at $200 per month for single-location clinics. Multi-location practices or clinics targeting highly competitive metropolitan markets receive custom transparent monthly proposals with zero long-term lock-in." },
  ],
};

export const locksmithSeo: PageContent = {
  slug: "/seo-services/locksmith-seo",
  title: "Locksmith SEO Services | Emergency & Commercial Locksmith Marketing | AVR Web Consulting",
  h1: "Locksmith SEO services engineered for emergency calls and high-intent local searches",
  description:
    "Rank #1 when customers are locked out. Our locksmith SEO services drive immediate phone calls for 24/7 emergency lockouts, automotive rekeying, and commercial security installations.",
  keywords: "locksmith seo, locksmith marketing, seo for locksmiths, emergency locksmith seo, local locksmith marketing services",
  eyebrow: "SEO Services",
  serviceName: "Locksmith SEO",
  answer:
    "Locksmith SEO is hyper-local and urgency-driven. When someone is locked out of their home or car, search decisions happen within 60 seconds on mobile. AVR Web Consulting optimizes Google Business Profiles for verified service areas, builds mobile-first click-to-call landing pages, defends against spam listings, and deploys local citations to dominate emergency search results.",
  hero: { image: "/images/lead-generation-phone-laptop.jpg", imageAlt: "Locksmith SEO emergency call optimization | AVR Web Consulting illustration" },
  highlights: [
    { label: "From", value: "$150/mo" },
    { label: "Turnaround", value: "3 days" },
    { label: "Focus", value: "Emergency Mobile Calls" },
    { label: "Execution", value: "100% Manual" },
  ],
  breadcrumb: [...base, crumb("Locksmith SEO", "/seo-services/locksmith-seo")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "Local citations & GMB", to: "/seo-services/local-citations-gmb" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Hyper-focused mobile SEO tailored for immediate distress searches like 'emergency locksmith near me'",
            "Compliant Google Service-Area Business (SAB) configuration to protect against directory suspensions",
            "Instant click-to-call conversion architecture delivering sub-second load times on mobile devices",
            "Defense against predatory lead-gen networks and automated spam listings in your local service area",
          ],
        },
      ],
    },
    {
      id: "urgency-factor",
      heading: "The unique dynamics of locksmith search",
      blocks: [
        {
          kind: "paragraph",
          text: "Locksmith services have one of the highest mobile search ratios in local marketing: over 88% of emergency residential and automotive lockout queries occur on smartphones. Customers standing outside their locked front door in the rain do not browse multiple blog articles; they tap the first credible, verified local result with transparent pricing and active emergency response.",
        },
        {
          kind: "paragraph",
          text: "At the same time, the locksmith industry faces intense scrutiny from Google due to historical lead-generation spam. Legitimate locksmith businesses require strict NAP consistency, state licensing proof, and properly configured Service-Area Business (SAB) profiles to rank safely without facing sudden verification suspensions.",
        },
      ],
    },
    {
      id: "service-lines",
      heading: "Targeted locksmith search categories",
      blocks: [
        {
          kind: "table",
          head: ["Locksmith Vertical", "Primary Search Queries", "Key Conversion Factor"],
          rows: [
            ["Emergency Lockouts", "'24 hour locksmith near me', 'locked out of house'", "Immediate call button, arrival ETA, transparent dispatch fee"],
            ["Automotive Locksmith", "'car key replacement', 'transponder key programming'", "Vehicle make/model coverage, mobile van dispatch details"],
            ["Residential Security", "'smart lock installation', 'rekey locks after moving'", "Trust badges, security hardware certifications, appointment scheduling"],
            ["Commercial Locksmith", "'master key system installation', 'access control repair'", "B2B credibility, licensing credentials, commercial invoicing support"],
          ],
        },
      ],
    },
    {
      id: "local-sab-strategy",
      heading: "Service-Area Business (SAB) optimization & Google verification",
      blocks: [
        {
          kind: "list",
          title: "Protecting and boosting your Google profile",
          items: [
            "Configuring appropriate service radius without artificial keyword stuffing that triggers Google suspensions",
            "Assisting with Google Advanced Verification requirements (licenses, business insurance, branded mobile van photos)",
            "Creating verified neighborhood landing pages detailing actual emergency response times and local street landmarks",
            "Building high-trust manual citations on local business directories, auto trade associations, and hardware suppliers",
            "Deploying Locksmith LocalBusiness structured data highlighting 24/7 availability and pricing ranges",
          ],
        },
      ],
    },
  ],
  faqs: [
    { question: "Why is locksmith SEO different from standard local business SEO?", answer: "Locksmith queries are overwhelmingly mobile and urgent. Customers decide within seconds, making click-to-call buttons, response time promises, and Google Local 3-Pack placement paramount. Furthermore, Google enforces strict anti-spam verification rules for locksmiths, requiring careful compliance." },
    { question: "How do you prevent Google Business Profile suspensions for locksmiths?", answer: "We configure your profile strictly according to Google guidelines—using legitimate business documentation, concealing residential addresses for mobile service-area businesses, avoiding fake virtual offices, and submitting proper licensing." },
    { question: "Can locksmith SEO help win commercial and corporate rekeying accounts?", answer: "Yes. While emergency searches drive immediate call volume, high-margin commercial master key and access control contracts come from property managers and retail businesses searching during business hours. We build dedicated B2B service pages to capture these contracts." },
    { question: "How fast can my locksmith business expect phone calls from SEO?", answer: "Cleanups of existing Google Business Profiles and local citation alignments often produce increased call volume within 3 to 4 weeks. Organic rankings for competitive automotive key programming queries usually mature over 60 to 90 days." },
    { question: "Do you recommend displaying phone numbers prominently on mobile?", answer: "Yes. Every locksmith page we build features prominent, sticky click-to-call buttons that dial your dispatch line with a single thumb tap, eliminating all conversion friction for distressed customers." },
    { question: "How do you optimize for 'car key replacement' and automotive lockouts?", answer: "We build dedicated pages targeting key programming, laser-cut transponder keys, and key fob duplication for specific car makes and models, answering price and turnaround concerns that drivers search for." },
    { question: "What citations matter most for local locksmiths?", answer: "Authoritative local directories like Google, Bing Places, Apple Maps, Yelp, YellowPages, Better Business Bureau, and automotive/hardware trade associations provide the strongest trust signals to search algorithms." },
    { question: "Can a locksmith rank in multiple towns without physical shops in each?", answer: "Yes, by configuring a compliant Service-Area Business (SAB) in Google and creating distinct service-area pages for each recognized town, provided each page offers genuine localized details rather than duplicate doorway content." },
    { question: "Does structured data help locksmith search rankings?", answer: "Yes. Using Schema.org 'Locksmith' markup clarifies your 24/7 emergency opening hours, telephone number, accepted payment methods, and geographic service boundaries directly to search engine crawlers." },
    { question: "What does locksmith SEO cost with AVR Web Consulting?", answer: "Our locksmith SEO packages start at $150 per month, which includes Google Business Profile management, local citation building, on-page optimization, and monthly call-tracking reporting." },
  ],
};

export const carDealershipSeo: PageContent = {
  slug: "/seo-services/car-dealership-seo",
  title: "Car Dealership SEO Services | New & Used Auto Dealer Marketing | AVR Web Consulting",
  h1: "Car dealership SEO that moves vehicle inventory off the lot and into driveways",
  description:
    "Drive more showroom visits and test drive bookings. Expert car dealership SEO covering dynamic inventory VDP optimization, regional brand search, and local Google Map pack dominance.",
  keywords: "car dealership seo, automotive seo services, auto dealer seo agency, used car dealership seo, car dealer search optimization",
  eyebrow: "SEO Services",
  serviceName: "Car Dealership SEO",
  answer:
    "Car Dealership SEO maximizes organic visibility for new car dealerships, pre-owned lots, and certified auto service centers. AVR Web Consulting optimizes Vehicle Detail Pages (VDPs) with dynamic Vehicle schema, builds regional search relevance for 'make + model + city' queries, and optimizes service & repair departments to drive steady showroom foot traffic and test drives.",
  hero: { image: "/images/marketing-data-table.webp", imageAlt: "Car Dealership SEO and automotive inventory visibility | AVR Web Consulting illustration" },
  highlights: [
    { label: "From", value: "$250/mo" },
    { label: "Audit turnaround", value: "5 days" },
    { label: "Coverage", value: "Sales + Service Center" },
    { label: "Schema", value: "Automotive & Vehicle" },
  ],
  breadcrumb: [...base, crumb("Car Dealership SEO", "/seo-services/car-dealership-seo")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "Technical SEO", to: "/seo-services/technical-seo" },
    { label: "Global SEO", to: "/seo-services/global-seo" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Comprehensive automotive SEO covering new vehicle sales, certified pre-owned (CPO), and service center repair revenue",
            "Dynamic inventory optimization for Vehicle Detail Pages (VDPs) and Vehicle Listing Pages (VLPs) with automated Vehicle schema",
            "Multi-department Google Business Profile setup for Sales, Parts, and Service to dominate multiple local map categories",
            "Targeted regional keyword clustering for competitive 'make + model + city' and vehicle lease queries",
          ],
        },
      ],
    },
    {
      id: "auto-buyer-journey",
      heading: "Winning each stage of the car buyer's search journey",
      blocks: [
        {
          kind: "paragraph",
          text: "Modern car buyers spend over 14 hours researching online across 18 distinct digital touchpoints before stepping foot into an automotive showroom. The search journey begins with broad model comparisons (e.g., 'compact SUV with best gas mileage'), moves into local inventory discovery (e.g., 'used hybrid cars under $20k in [city]'), and culminates in dealership trust searches (e.g., '[dealership name] reviews and trade-in value').",
        },
        {
          kind: "paragraph",
          text: "Dealerships that rely solely on expensive third-party listing portals (AutoTrader, Cars.com, CarDekho) surrender customer relationships and endure exorbitant monthly costs. Our automotive SEO builds sustainable organic showroom traffic directly to your own domain.",
        },
      ],
    },
    {
      id: "dual-revenue-funnel",
      heading: "The dual-revenue strategy: showroom sales & service bays",
      blocks: [
        {
          kind: "table",
          head: ["Dealership Department", "Target Search Intent", "Expected Business Outcome"],
          rows: [
            ["New Vehicle Sales", "'new [make] [model] lease specials', 'test drive [model] near me'", "Qualified showroom appointments, customer trade-in leads"],
            ["Used & Certified Pre-Owned", "'used trucks under $25,000', 'certified pre-owned sedan'", "Fast lot turnover on fluctuating pre-owned inventory"],
            ["Service & Maintenance", "'brake pad replacement cost', 'certified [make] oil change'", "High-margin, recurring monthly service bay appointments"],
            ["OEM Parts & Accessories", "'genuine [make] replacement battery', 'all-weather floor mats'", "Direct over-the-counter parts sales and e-commerce orders"],
          ],
        },
      ],
    },
    {
      id: "technical-vdp-seo",
      heading: "Technical SEO for dynamic vehicle inventory",
      blocks: [
        {
          kind: "paragraph",
          text: "Car dealerships face unique technical challenges: hundreds of vehicle detail pages are published and removed each month as cars sell. Poor inventory handling leads to thousands of 404 errors, index bloat, and wasted search crawl budget.",
        },
        {
          kind: "steps",
          items: [
            { title: "Smart Inventory Redirects", text: "When a vehicle sells, dynamically suggest comparable vehicles rather than serving an empty dead-end 404 page." },
            { title: "Vehicle Schema Markup", text: "Injecting Schema.org 'Vehicle' and 'Car' structured data specifying VIN, mileage, fuel type, transmission, price, and availability." },
            { title: "Model Research Hubs", text: "Creating evergreen trim-level comparison guides that retain high rankings year-round regardless of current day-to-day stock." },
            { title: "Department Google Profiles", text: "Establishing verified nested Google Business Profiles for your Service and Parts departments with distinct hours and phone numbers." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { question: "How does car dealership SEO handle vehicle inventory that changes weekly?", answer: "We create evergreen Vehicle Listing Pages (VLPs) and model showroom hubs (e.g., 'Used Honda Civic in [City]') that rank permanently. For individual Vehicle Detail Pages (VDPs), we implement structured Vehicle schema and automated redirects to comparable inventory once a car sells, preserving crawl equity." },
    { question: "Can dealership SEO reduce our dependence on third-party automotive portals?", answer: "Yes. By building first-page organic rankings for your own domain on local 'used cars near me' and model-specific searches, you capture direct phone calls, trade-in valuations, and test-drive requests without paying lead fees to third-party directories." },
    { question: "Why should an auto dealership have multiple Google Business Profiles?", answer: "Google explicitly allows dealerships to maintain nested profiles for Sales, Service, and Parts departments. This allows you to rank for 'auto repair shop' or 'oil change near me' with distinct operating hours and direct service phone lines while your main profile ranks for car sales." },
    { question: "How do you optimize Vehicle Detail Pages (VDPs) for search engines?", answer: "We optimize VDP titles with exact year, make, model, trim, and city; inject rich Schema.org Vehicle data including VIN, fuel economy, and price; compress high-resolution photo galleries; and ensure mobile reservation CTAs load instantly." },
    { question: "What is the role of model comparison pages in automotive SEO?", answer: "Model comparison guides (e.g., 'Toyota RAV4 vs Honda CR-V') capture shoppers during the critical consideration phase. Providing objective, data-backed comparisons builds trust and naturally directs readers to test-drive your in-stock models." },
    { question: "How do you track sales leads generated by dealership SEO?", answer: "We configure Google Analytics 4 conversion events for scheduled test-drives, finance application submissions, trade-in valuations, click-to-call showroom phone calls, and physical dealership visits via Google Business Profile direction requests." },
    { question: "Does dealership SEO cover commercial fleet and work truck sales?", answer: "Yes. We build targeted B2B commercial vehicle hubs covering cargo vans, heavy-duty chassis cabs, and commercial upfit packages to attract regional contractors, fleets, and small businesses." },
    { question: "How does site speed affect car dealership conversions?", answer: "Shoppers browse image-heavy vehicle photos on mobile devices. A slow site causes immediate bounce-outs to competitors. We implement responsive WebP image optimization and lazy-loading to keep showroom pages lightning fast." },
    { question: "How do you build backlinks for an auto dealership?", answer: "We earn authoritative local backlinks through community event sponsorships, high school sports partnerships, local chamber of commerce directories, regional auto enthusiast publications, and safe editorial outreach." },
    { question: "How much does car dealership SEO cost with AVR Web Consulting?", answer: "Our dealership SEO packages start at $250 per month, covering on-page optimization, inventory schema integration, local Google Business Profile management for all departments, and comprehensive monthly ROI reporting." },
  ],
};

export const realEstateSeo: PageContent = {
  slug: "/seo-services/real-estate-seo-services",
  title: "Real Estate SEO Services | Property Broker, Realtor & Agency Marketing | AVR Web Consulting",
  h1: "Real estate SEO services that generate exclusive buyer and seller property leads",
  description:
    "Compete against portal giants with targeted real estate SEO. We build hyper-local neighborhood guides, luxury property landing pages, IDX optimization, and agent authority.",
  keywords: "real estate seo services, real estate seo agency, seo for realtors, real estate broker search marketing, property seo specialist",
  eyebrow: "SEO Services",
  serviceName: "Real Estate SEO Services",
  answer:
    "Real estate SEO empowers brokerages, individual realtors, and property developers to outrank national aggregate portals on high-intent local searches. AVR Web Consulting creates hyper-local neighborhood guides, optimizes IDX property listings with RealEstateListing schema, and builds authority around 'homes for sale in [neighborhood]' and 'sell my home fast' commercial queries from $200 per month.",
  hero: { image: "/images/marketing-bridge-illustration.jpg", imageAlt: "Real Estate SEO for property brokers and agencies | AVR Web Consulting illustration" },
  highlights: [
    { label: "From", value: "$200/mo" },
    { label: "Delivery", value: "5 days" },
    { label: "Targeting", value: "Hyper-local Neighborhoods" },
    { label: "Schema", value: "RealEstateAgent & Residence" },
  ],
  breadcrumb: [...base, crumb("Real Estate SEO Services", "/seo-services/real-estate-seo-services")],
  related: [
    { label: "Local SEO", to: "/seo-services/local-seo" },
    { label: "GEO targeting SEO", to: "/seo-services/geo-targeting-seo" },
    { label: "Content marketing", to: "/content-marketing" },
  ],
  sections: [
    {
      id: "key-takeaways",
      heading: "Key Takeaways",
      blocks: [
        {
          kind: "list",
          items: [
            "Hyper-local neighborhood content strategies designed to outrank massive national listing aggregator portals",
            "Dual-funnel lead generation capturing both motivated homebuyers and exclusive, high-commission property listing sellers",
            "Technical IDX and MLS search integration with structured RealEstateListing and Residence schema markup",
            "Comprehensive realtor personal branding, Google Business Profile optimization, and local community authority building",
          ],
        },
      ],
    },
    {
      id: "outranking-portals",
      heading: "How local real estate agents outrank national portal giants",
      blocks: [
        {
          kind: "paragraph",
          text: "National aggregator portals (such as Zillow, Realtor.com, MagicBricks, or 99acres) dominate broad city queries through sheer domain authority. However, they rely on generic programmatic listings and cannot provide the nuanced, localized insights that home buyers and sellers genuinely crave.",
        },
        {
          kind: "paragraph",
          text: "AVR Web Consulting positions your agency as the definitive local market authority. By building hyper-local neighborhood guides, school zone breakdowns, commute time analyses, HOA regulations, and municipal lifestyle spotlights, we capture high-intent buyers and sellers before they turn to national aggregators.",
        },
      ],
    },
    {
      id: "buyer-vs-seller",
      heading: "Balancing buyer acquisition with high-value listing leads",
      blocks: [
        {
          kind: "table",
          head: ["Target Persona", "High-Intent Search Queries", "Conversion Mechanism"],
          rows: [
            ["First-Time Buyers", "'starter homes for sale in [neighborhood]', 'first time home buyer programs'", "Curated active MLS search filter, downloadable home buying checklist"],
            ["Luxury Home Buyers", "'gated community homes with pool [city]', 'luxury waterfront estates'", "Cinematic virtual tours, private showing booking, off-market exclusivity"],
            ["Home Sellers (Listings)", "'how much is my home worth in [neighborhood]', 'best listing agent'", "Automated home valuation tool, recent comparable sales case studies"],
            ["Real Estate Investors", "'cap rate duplex [city]', 'commercial real estate opportunities'", "Cash-flow projection calculators, off-market deal alerts"],
          ],
        },
      ],
    },
    {
      id: "idx-technical-seo",
      heading: "Technical SEO for IDX, MLS feeds & listing feeds",
      blocks: [
        {
          kind: "paragraph",
          text: "IDX integrations frequently present severe technical SEO pitfalls: duplicated MLS property descriptions, excessive parameter URLs, and thin content pages that trigger search indexation penalties. We safeguard and optimize your technical infrastructure.",
        },
        {
          kind: "list",
          title: "Our real estate technical framework",
          items: [
            "Canonical tag architecture preventing indexation penalties on syndicated MLS feeds",
            "RealEstateAgent and SingleFamilyResidence JSON-LD schema with exact property attributes",
            "Clean XML sitemaps highlighting evergreen neighborhood hubs and active featured listings",
            "Mobile-first responsive search filters enabling quick map browsing on smartphones",
            "Local community backlink development through neighborhood business spotlights and sponsorships",
          ],
        },
      ],
    },
  ],
  faqs: [
    { question: "How can a local real estate agent compete against Zillow or MagicBricks?", answer: "While portals dominate broad city searches, they fail on hyper-local specificity. We target specific subdivision names, school districts, condo developments, and lifestyle queries (e.g., 'gated community homes near [local park]'). Your local expertise and detailed neighborhood guides outrank generic portal pages." },
    { question: "How does real estate SEO generate exclusive listing seller leads?", answer: "Seller leads are generated through valuation and market analysis intent—such as 'what is my home worth in [neighborhood]', 'selling a house with a tenant in [city]', or 'cost to sell a home in [area]'. We build seller resource hubs and instant valuation funnels to capture homeowners preparing to list." },
    { question: "Does an IDX property search integration help or hurt SEO?", answer: "Poorly implemented IDX feeds can hurt SEO by creating thousands of thin or duplicated MLS pages. We configure your IDX integration with custom canonical tags, unique agent commentary, and proper robots directives so search engines index high-value community pages without penalizing your site." },
    { question: "What is a neighborhood guide and why is it essential?", answer: "A neighborhood guide is an in-depth resource covering a specific local community, including housing price trends, school ratings, local dining, parks, commute times, and active listings. It establishes topical authority and attracts buyers relocating to the area." },
    { question: "How do you optimize Google Business Profile for real estate agents?", answer: "We optimize your profile under the 'Real Estate Agency' or 'Real Estate Agent' categories, publish weekly neighborhood market updates, upload professional community photos, and implement client review acquisition workflows to boost your Google Maps ranking." },
    { question: "What structured data schema is recommended for real estate websites?", answer: "We deploy Schema.org RealEstateAgent markup for your business profile, RealEstateListing schema for exclusive properties, and BreadcrumbList markup for neighborhood navigation, helping search engines render rich search snippets." },
    { question: "Can real estate SEO help luxury property specialists?", answer: "Yes. Luxury real estate requires high-intent lifestyle and architectural keyword targeting (e.g., 'custom waterfront homes', 'penthouse with private elevator'). We build visual, high-speed landing pages that appeal to high-net-worth buyers." },
    { question: "How do you track real estate lead conversions?", answer: "We track form inquiries, saved property searches, phone calls from mobile listings, valuation tool completions, and scheduled private showing requests in Google Analytics 4." },
    { question: "Do you create blog content for real estate websites?", answer: "Yes. We produce localized market reports, relocation guides, and seasonal homebuyer and seller tips that answer real questions asked in your target market, feeding both search engines and AI assistants." },
    { question: "How much do Real Estate SEO services cost with AVR Web Consulting?", answer: "Our real estate SEO retainers start at $200 per month for individual agents and boutique brokerages, with custom scaling for multi-agent regional firms. Retainers include local content creation, IDX optimization, and monthly performance tracking." },
  ],
};

export const seoPages = [
  seoServicesHub,
  globalSeo,
  localSeo,
  technicalSeo,
  geoTargetingSeo,
  localCitationsGmb,
  dentalSeo,
  locksmithSeo,
  carDealershipSeo,
  realEstateSeo,
];

