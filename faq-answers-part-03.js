/** FAQ answer export part 3/10. Generated from content-seeds.json. */
export const faqAnswersPart03 = {
  // ===== AI Retrieval System Optimisation & Data Structuring | AVR =====
  "/ai-retrieval-systems": {
    "What is an AI retrieval system?": "It is the fetch-parse-chunk-embed-retrieve pipeline that supplies a language model with source material at answer time. Optimising for it determines whether your content can be used at all.",
    "What is RAG?": "RAG stands for retrieval-augmented generation: the model retrieves relevant documents first, then generates an answer grounded in them. Most AI search products work this way.",
    "How does chunking affect my content?": "If a passage relies on context from earlier sections, it can be retrieved alone and misunderstood. Writing self-contained sections keeps meaning intact when chunks are separated.",
    "Do I need a vector database?": "Not for public AI visibility — the engines maintain their own. A vector store is only relevant if you are building your own search or assistant on top of your content.",
    "What is an entity graph?": "It is your JSON-LD markup connected by @id references so machines can see that a service, an article, an author and an organisation all belong to the same business.",
    "Are XML sitemaps still relevant?": "Yes, especially with accurate lastmod values, because they help both search and AI crawlers prioritise what to fetch and re-fetch.",
    "How do images and PDFs fit in?": "Poorly, unless supported by text. Any fact you need retrieved should exist as HTML text with descriptive alt text on the accompanying visual.",
    "Can retrieval optimisation break normal SEO?": "No. Everything it requires — server-rendered content, semantic HTML, valid schema, consistent facts — also benefits classic search rankings.",
    "How do you test retrieval readiness?": "We fetch pages without JavaScript, simulate chunk boundaries, validate every schema block and ask assistants to summarise specific URLs to confirm they read what we intended.",
    "How often should retrieval readiness be re-checked?": "Quarterly, and after every redesign, CMS upgrade or template change, since those are the events that most often break rendering or drop schema.",
  },

  // ===== Paid Advertising Agency — Google Ads & Social Ads | AVR Web Consulting =====
  "/paid-advertising": {
    "What is your minimum ad budget?": "We work with media budgets from about $500 per month. Below that, search volume is usually too thin to gather statistically useful data, and we will normally recommend putting the money into local SEO and Google Business Profile work first.",
    "How much do you charge to manage Google Ads?": "Management starts at $150 per month for small local accounts and moves to 10–15% of media spend for accounts above $5,000 per month. The fee is quoted upfront and does not change without your written approval.",
    "Who owns the ad accounts?": "You do. We always build campaigns inside your own Google Ads, Meta Business and LinkedIn accounts, and you keep full admin access. If we ever part ways, your history, pixels and audiences stay with you.",
    "How quickly can campaigns go live?": "Typically five business days: two for tracking and account structure, two for copy and landing page review, one for launch checks. Rush launches for events or seasonal sales can be done in 48 hours.",
    "Do you run ads and SEO together?": "Yes, and that is where the compounding happens. Paid search reveals which keywords actually convert within weeks, so the SEO content plan targets proven revenue terms instead of guesses, and organic winners become tested ad copy.",
    "How do you report performance?": "A weekly one-page summary covering spend, conversions, cost per acquisition and what changed, plus a monthly deep dive with search-term analysis, creative performance and next month's plan. All data lives in a dashboard you can open any time.",
    "Can you fix an account another agency built?": "Yes. Roughly half of new paid clients arrive with an existing account. We audit structure, tracking accuracy, wasted spend and query relevance first, and usually restructure rather than rebuild so historical learning is preserved.",
    "Do you handle international campaigns?": "We run campaigns targeting India, the United States, United Kingdom, United Arab Emirates and Europe, including multi-currency accounts, localised copy and region-specific landing pages with correct hreflang.",
    "What conversion tracking do you set up?": "GA4 events, Google Ads conversion actions with enhanced conversions, Meta CAPI where relevant, call tracking for phone-led businesses and CRM offline conversion import so the platforms optimise toward qualified leads rather than raw form fills.",
    "Is there a lock-in contract?": "No. Paid advertising is billed month to month with 30 days' notice. We would rather keep accounts because performance justifies it than because a contract traps you.",
  },

  // ===== Search Engine Marketing Consultant | AVR Web Consulting =====
  "/google-ads": {
    "How much should I spend on Google Ads to start?": "For most local service businesses, $500–$1,000 per month of media buys enough clicks to learn quickly. Competitive B2B or multi-city campaigns usually need $2,000+ per month before the data is reliable enough to optimise confidently.",
    "Is Performance Max worth running?": "It is, once you have at least 30 conversions a month and clean conversion values. Before that it tends to spend on brand and remarketing traffic you would have won anyway, which inflates reported ROAS while adding little incremental revenue.",
    "Why is my cost per click so high?": "Usually a mix of low Quality Score from weak message match, over-broad match types, and bidding on head terms instead of specific commercial phrases. Improving landing page relevance and tightening keywords typically brings CPCs down within a few weeks.",
    "Do you write the ad copy?": "Yes. We write responsive search ads with pinned value propositions, test four headline angles at a time and rewrite based on asset performance, not opinion. Copy is reviewed with you before it goes live.",
    "Can you manage Google Shopping feeds?": "Yes. We handle Merchant Center setup, feed diagnostics, title and attribute optimisation, custom labels for margin-based bidding, and supplemental feeds for missing GTINs or product highlights.",
    "How do you measure phone leads?": "Through Google call extensions, dynamic call tracking numbers on landing pages and, for longer sales cycles, offline conversion import from your CRM so the algorithm learns which calls actually became customers.",
    "How often do you optimise the account?": "Search terms and budget pacing are reviewed weekly; bidding strategy, ad copy and structure are reviewed monthly. Bigger structural changes are proposed with a rationale, not applied silently.",
    "Will ads help my SEO rankings?": "Not directly — paid clicks are not a ranking factor. Indirectly they help a lot, because ads tell you within weeks which keywords convert, so your SEO investment goes into pages with proven commercial value.",
    "Do you run ads in multiple countries?": "Yes, including India, the US, UK, UAE and European markets. Each country gets its own campaign, currency handling, localised copy and, where needed, a country-specific landing page.",
    "What happens in the first 30 days?": "Week one: tracking audit and account build. Week two: launch and daily monitoring. Weeks three and four: search-term pruning, bid strategy tuning and the first copy test. You receive a full performance review at day 30 with the plan for month two.",
  },

  // ===== Social Media Ads — Meta, LinkedIn & YouTube | AVR Web Consulting =====
  "/social-media-ads": {
    "Do you produce the ad creative?": "Yes. We write hooks and scripts, edit short-form video from footage you supply or from stock, and design static and carousel assets. If you have an in-house creator, we brief them with the specific angles the data says to test next.",
    "How much budget do I need for Meta ads?": "Around $20–$30 per day per active test lets a campaign exit the learning phase within a couple of weeks. Below that, results swing wildly and it becomes hard to tell a bad creative from an unlucky week.",
    "Why did my ads work then suddenly stop?": "Almost always creative fatigue: the same audience has now seen the asset many times, frequency climbs and cost per result rises. The fix is a fresh concept, not a bid change — which is why we keep a creative pipeline running continuously.",
    "Is LinkedIn advertising too expensive?": "Cost per click is high, but so is lead value. For services with a customer worth several thousand dollars, LinkedIn frequently produces the cheapest qualified pipeline because you can target by job title, company size and industry with real precision.",
    "Can you retarget my website visitors?": "Yes. We build retargeting audiences from site visitors, video viewers, engagement and customer lists, then sequence different messages by how warm each group is instead of showing everyone the same ad.",
    "Do social ads help AI visibility?": "Indirectly. Paid social builds branded search demand and third-party conversation about your brand, and both branded queries and independent mentions are signals that AI assistants weigh when deciding which companies to name in an answer.",
    "How do you handle iOS tracking limits?": "With Conversions API, server-side tagging, aggregated event measurement configuration and modelled comparisons against your CRM data. We assume platform numbers overstate and validate against real revenue before scaling.",
    "What reporting do I get?": "A weekly summary of spend, leads and cost per result plus creative-level performance, and a monthly review covering audience saturation, next creative concepts and budget recommendations.",
    "Can you run ads in multiple languages?": "Yes. We run English campaigns across all our markets and can produce Hindi, Telugu and Arabic variants where the audience responds better in a local language.",
    "How soon will I see leads?": "Most accounts see first leads within the opening week, but the honest read on cost per acquisition comes after two to three weeks, once the algorithm has exited learning and at least three creative concepts have had a fair share of budget.",
  },

  // ===== Social Media Marketing Services | AVR Web Consulting =====
  "/social-media-marketing": {
    "Which platforms should my business be on?": "Two done well beat five done poorly. Local services and D2C usually pick Instagram and Facebook; B2B and SaaS pick LinkedIn and YouTube. We choose based on where your buyers already spend attention, then commit to consistency there.",
    "How often should we post?": "Four to six times a week on the primary platform, with at least two short-form videos. Consistency matters more than volume — an unpredictable feed loses reach far faster than a modest but regular one.",
    "Do you create video content?": "Yes. We script, edit, caption and format short-form video. We can work from footage your team records on a phone, from existing webinar or event material, or from stock and motion graphics where filming is impractical.",
    "Will you post from our accounts?": "Yes, with scheduled publishing through your own business accounts. You keep ownership and admin rights, and every calendar is approved by you before anything goes live.",
    "Does organic social affect SEO?": "Not as a direct ranking factor, but strongly as a demand generator. Social drives branded search, earns links from people who discovered you there, and produces the third-party mentions AI models use when deciding who to recommend.",
    "How long before social shows results?": "Engagement usually improves within four to six weeks of consistent posting. Follower growth and referral traffic typically become meaningful around month three, and branded search lift shows around months four to six.",
    "Do you handle negative comments?": "Yes. We reply to routine complaints using an approved tone and escalation guide, and anything sensitive — legal, medical or safety-related — is escalated to your team immediately rather than answered on the fly.",
    "Can you grow followers quickly?": "We do not buy followers or use engagement pods, because a bloated follower count with dead engagement suppresses reach and misleads your reporting. Growth here is earned through content that people save and share.",
    "What do you need from us each month?": "About an hour: approving the calendar, sending any product or event updates, and ideally recording a few short clips. The more raw material you can give us, the more distinctive the output.",
    "Can social be bundled with SEO?": "Yes, and it is our most popular combination. The same keyword and question research powers both, so the blog, the FAQ hub and the social calendar all reinforce one consistent set of brand facts.",
  },

  // ===== Content Marketing Services — Answer-First Content | AVR Web Consulting =====
  "/content-marketing": {
    "How much does content marketing cost?": "Article packages start around $250 per month for four optimised posts, with pillar pages and multi-cluster programmes quoted by scope. Guest post placements start at $20 depending on the authority and traffic of the host site.",
    "Do you use AI to write the content?": "We use AI for research, clustering and outlining, never for final prose. Every published sentence is human-written and edited, which is why our pages continue to perform through helpful-content updates that flattened bulk-generated sites.",
    "How long should a blog post be?": "Long enough to fully answer the question and no longer. In practice that is 1,200–1,800 words for a focused how-to and 2,500–3,500 for a pillar page. Padding hurts, because it dilutes the passages an answer engine would otherwise extract.",
    "How often should we publish?": "Four to eight substantial pieces a month builds topical authority at a sensible pace for most businesses. Consistency and internal linking within a cluster matter more than raw output volume.",
    "Will content help me appear in ChatGPT answers?": "It is the main lever. Language models cite sources that state facts plainly, structure them clearly and are corroborated elsewhere. Answer-first pages plus schema plus consistent brand facts across the web is what moves you into generated answers.",
    "Do you write in industry-specific niches?": "Yes — healthcare, SaaS, legal, real estate, education, manufacturing, travel and e-commerce among others. Technical or regulated niches get a subject-matter review round with your team before publication.",
    "Who owns the content?": "You do, fully and permanently, from the moment it is delivered. There are no licensing terms and nothing is reused for another client.",
    "Can you refresh existing content?": "Yes, and it is often the fastest win available. Rewriting existing pages answer-first, adding schema, updating statistics and consolidating cannibalising URLs frequently lifts traffic faster than publishing anything new.",
    "How do you handle keyword research?": "We map keywords by intent — informational, comparison, commercial and transactional — then assign each cluster to a page type so pages do not compete with each other. Paid search data, where available, tells us which terms actually convert.",
    "What reporting do I get?": "Monthly reporting covering published pieces, rankings and impressions per target query, conversions attributed to content, and AI-visibility checks showing whether assistants now mention or cite your brand for tracked prompts.",
  },

  // ===== SEO Content Writing Services for Your Website | AVR Web =====
  "/blogging-copywriting": {
    "How much do you charge per article?": "Packages start at $250 per month for four optimised articles. Individual long-form pillar pages with original research or interviews are quoted separately, typically in the $150–$300 range per piece depending on depth.",
    "How fast is delivery?": "First drafts land within five business days of an approved brief. Ongoing retainers run on a published calendar so you always know what is coming and when it goes live.",
    "Do you optimise the content for keywords?": "Yes. Each piece targets one primary query plus a cluster of secondary and question variants, with natural placement in the title, opening answer, headings and body — never keyword stuffing, which now actively suppresses rankings.",
    "Will the content be original?": "Every piece is written from scratch and checked for plagiarism before delivery. We never reuse work between clients, even within the same industry.",
    "Can you match our brand voice?": "Yes. We build a short voice guide from your existing material and sales calls, covering tone, vocabulary, forbidden phrases and how technical to go. The first two pieces are calibration; after that the voice is consistent.",
    "Do you publish the content for us?": "We can. For WordPress, Webflow, Shopify and most CMS platforms we handle formatting, images, internal links, meta fields and schema, then send you a preview link before publishing.",
    "How many revisions are included?": "Two rounds of revisions are included on every piece. In practice most articles need one light pass once the voice guide is established.",
    "Do you write content that AI can cite?": "That is the default structure we write in: direct answers, question headings, factual tables and schema. We also check after 30 days whether assistants have started referencing the page for its target prompts.",
    "Can you write technical or medical content?": "Yes, with a subject-matter review loop. Regulated topics such as healthcare, finance and legal are drafted by writers experienced in the field and then reviewed by your qualified staff before publication.",
    "What do you need from us to start?": "Your target keywords or topics if you have them, access to a sales call recording or two, any existing brand guide, and CMS access if you want us to publish. If you do not have keywords yet, our research covers that in the first week.",
  },

  // ===== Manual Link Building Services | AVR Web Consulting =====
  "/guest-posting-link-building": {
    "How much does a guest post cost?": "Placements start at $20 on smaller niche blogs and rise with the host site's traffic and authority — mid-tier industry publications typically run $60–$150. You see the site, metrics and price before we commit to anything.",
    "Is guest posting still effective in 2026?": "Yes, when the placement is genuinely editorial on a site people actually read. What no longer works is mass-published filler on link farms, which search engines discount and AI models ignore as a credibility signal.",
    "Are your links safe from Google penalties?": "We build the way a PR team would: relevant sites, natural anchor text distribution, gradual pace and no networks. Clients have not experienced manual actions from our placements, and every link is disclosed to you.",
    "How many links do I need per month?": "Most competitive campaigns run four to ten quality placements a month. The right number depends on competitor link velocity in your niche, which we measure in the audit rather than guess.",
    "Do you use PBNs?": "Never. Private blog networks are the single fastest route to a manual action, and their footprints are increasingly easy to detect. Every site we place on is an independent publication.",
    "How long until links affect rankings?": "Links usually take four to twelve weeks to show measurable ranking impact, as the pages need to be crawled, evaluated and trusted. Competitive terms need consistent link acquisition over several months, not a single burst.",
    "Do you write the guest post content?": "Yes. Our writers produce the article to the host publication's editorial standards, with the link placed contextually. You approve the topic and can review the draft before submission.",
    "Can I choose the anchor text?": "You can specify preferences, and we will advise on distribution. Over-optimised exact-match anchors are one of the clearest spam signals, so we keep branded and natural-phrase anchors as the majority.",
    "Do links help AI visibility?": "Yes, indirectly but importantly. Language models weigh how often and how credibly a brand is mentioned across the web. Editorial placements create the corroborating sources that make an assistant comfortable recommending you by name.",
    "What reporting do I receive?": "A live sheet listing every placement: host site, live URL, publication date, organic traffic estimate, authority metrics, anchor text and destination page — updated as each link goes live, not summarised at the end of the month.",
  },

  // ===== Website Design and SEO Services | AVR Web Consulting =====
  "/web-design-development": {
    "How much does a website cost?": "Small business sites start around $400, content-rich multi-service sites typically run $800–$2,000, and e-commerce builds depend on catalogue size and integrations. Every quote is fixed-scope with the deliverables written down before work begins.",
    "How long does a website take to build?": "A focused business site takes three to four weeks, larger content sites four to six, and e-commerce five to seven. The main variable is content readiness — projects where copy and images are ready launch weeks sooner.",
    "Will my new site keep its existing rankings?": "Yes, when the migration is done properly. We map every existing URL to its new destination with 301 redirects, preserve title and heading structure on ranking pages, and monitor indexation daily for the first fortnight after launch.",
    "Do you design mobile-first?": "Always. Most traffic in our clients' markets is mobile, and Google indexes the mobile version. Designs are drawn at mobile widths first and expanded upward, rather than shrinking a desktop layout.",
    "Can I edit the website myself?": "Yes. WordPress and Shopify builds come with a page builder or block setup plus a short recorded walkthrough, so your team can update text, images, blog posts and products without needing us.",
    "Do you provide hosting?": "We advise on hosting and can set it up in your own account, so you always own the infrastructure and billing. For most business sites we recommend managed hosting with a CDN rather than the cheapest shared plan.",
    "Is the site optimised for AI search?": "Yes. Templates include answer-first content blocks, FAQ sections with schema, clean semantic markup and an llms.txt file, all of which make the site easier for AI retrieval systems to parse and cite.",
    "What about website speed?": "We set performance budgets during the build and test on throttled mobile connections. Targets are green Core Web Vitals: LCP under 2.5 seconds, INP under 200ms and CLS under 0.1 on real devices, not just on a fast desktop.",
    "Do you offer maintenance after launch?": "Thirty days of support is included with every build. After that, optional maintenance covers updates, backups, security monitoring, uptime checks and a monthly content or design change allowance.",
    "Can you redesign an existing site?": "Yes, and we start with an audit of what currently ranks and converts so the redesign protects those assets. Redesigns that ignore existing performance data are the most common cause of post-launch traffic loss.",
  },

};
