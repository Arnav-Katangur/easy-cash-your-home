const CONTACT = {
  brand: "Easy Cash Your Home",
  legalName: "Easy Property Solutions LLC",
  phoneDisplay: "(804) 506-3646",
  phoneHref: "8045063646",
  email: "arksinvestments@gmail.com",
  serviceArea: "Richmond and nearby Virginia communities",
  responseTime: "within 24 business hours",
};

const FORM_ENDPOINT = "/api/leads";
const LOCAL_LEADS_KEY = "easy-cash-your-home-leads";

const NAV_ITEMS = [
  { label: "Home", href: "#/" },
  { label: "About", href: "#/about" },
  { label: "Compare", href: "#/compare" },
  { label: "FAQ", href: "#/faq" },
  { label: "Testimonials", href: "#/testimonials" },
  { label: "Contact", href: "#/contact-us" },
];

const HOME_FACTS = [
  { value: "24 hrs", label: "Typical response window for a fair cash offer" },
  { value: "7-10 days", label: "Fast closing option when timing matters most" },
  { value: "$0 repairs", label: "Sell as-is with no cleanup or contractor chase" },
];

const PROCESS_STEPS = [
  {
    title: "Request your cash offer",
    body:
      "Share your property address and a few basic details. The first step takes under two minutes.",
  },
  {
    title: "Receive a market-based offer",
    body:
      "A qualified team member reviews the property and reaches out with a fair cash offer, often the same day.",
  },
  {
    title: "Choose your closing date",
    body:
      "Close quickly or take more time if you need it. You stay in control of the schedule from start to finish.",
  },
];

const ADVANTAGES = [
  {
    icon: "clock",
    title: "Quickest way to sell",
    body:
      "Skip the open houses, lender delays, and back-and-forth. Share the basics, review the offer, and move forward.",
  },
  {
    icon: "spark",
    title: "No costly repairs",
    body:
      "No repainting, deep cleaning, or contractor scramble. We buy houses in their current condition.",
  },
  {
    icon: "cash",
    title: "All-cash offer with no fees",
    body:
      "No financing contingencies, agent commissions, or surprise costs at closing. The offer is the number you plan around.",
  },
  {
    icon: "home",
    title: "Inherited property support",
    body:
      "We work through inherited and probate-related situations with a calm, practical process that reduces friction for everyone involved.",
  },
  {
    icon: "shield",
    title: "Foreclosure pressure relief",
    body:
      "If timing is tight, we can move quickly and help you explore a clean exit before the situation gets more expensive.",
  },
];

const SELLER_SITUATIONS = [
  "Divorce",
  "Foreclosure",
  "Foundation issues",
  "Probate",
  "Inherited property",
  "Water damage",
  "Relocation",
];

const ABOUT_BENEFITS = [
  "Sellers pay zero closing costs",
  "Fast closings available in as little as 7 days",
  "No repairs required before selling",
  "No listing, agents, or showings to manage",
];

const COMPARE_ROWS = [
  {
    label: "Commissions and fees",
    market: "About 6% is often paid by the seller",
    cash: "None",
  },
  {
    label: "Who pays closing costs?",
    market: "About 2% is often paid by the seller",
    cash: "None - we cover the costs",
  },
  {
    label: "Inspection and financing contingencies",
    market: "Yes - many deals can fall through",
    cash: "None",
  },
  {
    label: "Appraisal needed",
    market: "Usually yes",
    cash: "No - we make cash offers",
  },
  {
    label: "Average time until sold",
    market: "Around 91 days",
    cash: "Immediate cash offer",
  },
  {
    label: "Number of showings",
    market: "Depends on the property and market",
    cash: "One walkthrough with us",
  },
  {
    label: "Closing date",
    market: "Roughly 30-60 days after contract",
    cash: "Date of your choice",
  },
  {
    label: "Who pays for repairs",
    market: "Often negotiated after inspection",
    cash: "We handle repairs ourselves",
  },
];

const FAQS = [
  {
    question: "How long will it be until I get an offer?",
    answer: [
      "We work to get an offer to you quickly, but we also want the number to reflect the property's real condition and your situation. Because of that, we usually do not finalize an offer until we have had a chance to speak with you and see the house.",
      "A typical process starts with a phone conversation to make sure we are a good fit. After that, we schedule a walkthrough when it is convenient for you and put the offer together. In many cases the offer is ready within hours of meeting or by the following day.",
    ],
  },
  {
    question: "How long will it be until closing?",
    answer: [
      "Because we are buying as investors rather than moving in ourselves, we can work around your timeline.",
      "If you need a few months to transition, that can work. If you need to close very quickly, we can often move in 7-10 days.",
    ],
  },
  {
    question: "Will I have to make repairs?",
    answer: [
      "No. One of the main benefits of working with us is that we do not ask sellers to fix the property before closing.",
      "We may inspect the home so we understand what repairs we will need to take on, but that is for our planning. You should not expect to handle repair work yourself.",
    ],
  },
  {
    question: "What will I have to do?",
    answer: [
      "Almost nothing. Instead of managing showings and buyer expectations, you can focus on your next step while we handle the process.",
      "If you are still living in the property, you will need to coordinate your move, and we can even help think through that. We handle the paperwork and closing coordination with our title partners.",
    ],
  },
  {
    question: "What do you do with the houses you buy?",
    answer: [
      "That depends on the location, size, condition, and the structure of the deal.",
      "Common outcomes include renovating to resell, renovating to rent, helping buyers who cannot qualify for a traditional loan, and occasionally using the property for short-term rentals.",
    ],
    bullets: [
      "Fix and resell",
      "Fix and hold as a rental",
      "Create alternative path-to-homeownership options",
      "Use for short-term rental opportunities",
    ],
  },
  {
    question: "What are the benefits of a cash offer?",
    answer: [
      "A cash offer keeps the transaction simpler. You do not have a lender dictating repair requirements or appraisal conditions, and you avoid a financing contingency that lets a retail buyer walk away if their loan falls apart.",
      "That usually means fewer surprises and a faster path to money in your pocket.",
    ],
  },
  {
    question: "Do you pay a fair price for houses?",
    answer: [
      "Yes. We know we only earn trust by making realistic offers that reflect the property, renovation costs, and the market around it.",
      "If it helps, we can walk you through how the offer is calculated. Even if you decide not to sell to us, we want you to feel more informed about your options.",
    ],
  },
  {
    question: "Do you charge any fees?",
    answer: [
      "No. The number you see in the offer is the number you plan around at closing.",
      "There are no agent commissions, we pay closing costs, and we do not ask for repairs. Compared with a traditional listing, that can save a seller a meaningful amount of money.",
    ],
  },
  {
    question: "How much will you pay for my house?",
    answer: [
      "Every property is different. We look at location, size, condition, finishes, nearby comparable sales, and what it would cost to renovate the home.",
      "We also consider your timing and goals so the offer structure fits the situation instead of forcing you into a standard template.",
    ],
  },
  {
    question: "How are you different from a real estate agent?",
    answer: [
      "Agents market your property on the MLS and work to find a buyer. We are the buyer. That means you do not have to wait and wonder whether someone will make an offer or whether financing will hold together.",
      "If you want to prepare the home, host multiple showings, and push for the highest market offer, listing with an agent might make sense. If you want to skip the hassle and get a direct offer quickly, that is where we fit.",
    ],
  },
];

const TESTIMONIALS = [
  {
    source: "sold.com",
    quote:
      "Since most investors purchase with all cash, sellers can often close in roughly two weeks instead of waiting the 60-plus days a financed buyer may need.",
  },
  {
    source: "Forbes.com",
    quote:
      "Cash buyers can be especially appealing when tighter lending standards and low appraisal issues make financed deals feel less predictable.",
  },
  {
    source: "Realty Biz News",
    quote:
      "One of the clearest advantages of selling to an investor is skipping the real estate commission that often runs 5% to 6% of the sales price.",
  },
  {
    source: "Home World Design",
    quote:
      "For homeowners under repossession or foreclosure pressure, a cash sale to an investment company can create a faster path to stability without repair work.",
  },
];

const app = document.querySelector("#app");
const navRoot = document.querySelector("[data-nav]");
const footerRoot = document.querySelector("[data-footer]");
const header = document.querySelector(".site-header");
const navToggle = document.querySelector("[data-nav-toggle]");
const toast = document.querySelector("[data-toast]");

const PRIVACY_SECTIONS = [
  {
    title: "What information we collect",
    paragraphs: [
      "We collect personal information when you subscribe, fill out a form, or submit property details. We may also collect technical information such as IP address, operating system, and browser type to improve the website experience.",
      "When you register or request help, we may ask for your name, email address, mailing address, or phone number. You can still browse the site without submitting that information.",
    ],
  },
  {
    title: "Consent for future marketing",
    paragraphs: [
      "When you submit your contact information, you agree that it may serve as your electronic signature and express written consent for Easy Property Solutions LLC and its agents or assigns to call, text, or email you with property-related offers and updates.",
      "Consent is not a condition of purchase. You can opt out later through reasonable means. Message and data rates may apply, message frequency can vary, and interactions may be recorded or monitored.",
    ],
  },
  {
    title: "How we use your information",
    paragraphs: [
      "We use submitted information to process requests, respond to questions, send periodic updates, and provide services related to your property situation.",
      "We do not sell your information as part of a general marketing list.",
    ],
    bullets: [
      "Process requests and transactions",
      "Respond to inquiries and provide support",
      "Send updates related to your situation or inquiry",
    ],
  },
  {
    title: "How we protect information",
    paragraphs: [
      "We use a variety of security measures to protect personal information when it is entered, submitted, or accessed through the website.",
    ],
  },
  {
    title: "Disclosure to outside parties",
    paragraphs: [
      "We do not sell, trade, or otherwise transfer personally identifiable information to outside parties except trusted service providers who help us run the website, operate the business, or serve you and agree to keep the information confidential.",
      "We may disclose information when necessary to comply with the law, enforce site policies, or protect rights, property, or safety.",
    ],
  },
  {
    title: "Third-party links and services",
    paragraphs: [
      "Some pages may include links to third-party products or services. Those sites have their own privacy policies and practices, and we are not responsible for their content or handling of your information.",
      "Payment processors and similar providers may also have their own policies that govern transaction-related information.",
    ],
  },
  {
    title: "Remarketing and advertising",
    paragraphs: [
      "The original site states that third-party remarketing cookies, including Google Ads tools, may be used to show ads across the web based on prior visits.",
      "Those systems are used for advertising rather than identifying a specific person by name.",
    ],
  },
  {
    title: "Children's privacy",
    paragraphs: [
      "The site is intended for users age 13 or older and is not designed to knowingly collect information from children under 13.",
    ],
  },
  {
    title: "Property and financial information",
    paragraphs: [
      "Because this is a real estate services business, the company may ask for property details, contact information, and in some situations financial information needed to evaluate your situation.",
      "That information is used internally unless sharing it is necessary to help resolve the real estate matter.",
    ],
  },
  {
    title: "Changes and contact",
    paragraphs: [
      "If the privacy policy changes, the updated version should be posted on this page.",
      `Questions about privacy can be directed to ${CONTACT.email} or by phone at ${CONTACT.phoneDisplay}.`,
    ],
  },
];

const TERMS_SECTIONS = [
  {
    title: "Acceptance of terms",
    paragraphs: [
      "By using the website or related services, you agree to be bound by the Terms of Use and the referenced Privacy Policy. If you do not agree, you are not authorized to use the website or obtain services through it.",
      "Easy Property Solutions LLC may revise the terms or modify the website at any time, and continued use after updates means you accept the revised terms.",
    ],
  },
  {
    title: "User certification and eligibility",
    paragraphs: [
      "By using the website, you certify that you are authorized to do business in the United States, are at least 18 years old, and have the legal capacity to enter into the agreement.",
    ],
  },
  {
    title: "Content, registration, and vendor materials",
    paragraphs: [
      "Website content includes text, photos, graphics, video, software, and any other information or services made available through the site.",
      "The site may display third-party vendor content or offers. Easy Property Solutions LLC does not guarantee the availability or accuracy of those offers and is not responsible for damages arising from your use of outside sites, vendor information, or vendor products.",
      "Some website features may require registration. You are responsible for maintaining the confidentiality of that registration information and using it only for authorized access.",
    ],
  },
  {
    title: "Copyright and restricted use",
    paragraphs: [
      "The website content is protected by copyright, trademark, and related intellectual property laws. It may not be copied, republished, redistributed, or stored beyond limited personal and non-commercial use without permission.",
      "Use of scraping, database extraction, or unauthorized commercial reuse is prohibited.",
    ],
  },
  {
    title: "User submissions and prohibited conduct",
    paragraphs: [
      "If you post or transmit material through the site, you grant the company a broad license to use, reproduce, adapt, publish, translate, distribute, perform, and display that material.",
      "You agree not to post unlawful, abusive, threatening, defamatory, obscene, infringing, deceptive, spam-related, or technically harmful material.",
    ],
    bullets: [
      "Do not impersonate another person or entity",
      "Do not upload unlawful or infringing material",
      "Do not transmit spam, malware, or harmful code",
      "Do not interfere with the website or connected networks",
      "Do not collect personal data about other users without authorization",
    ],
  },
  {
    title: "Linking and framing restrictions",
    paragraphs: [
      "You may not use company logos or other proprietary assets in a link without written consent, and you may not frame or deep-link the site in a way that implies sponsorship, causes confusion, dilutes trademarks, or violates the law.",
    ],
  },
  {
    title: "Access, delays, and monitoring",
    paragraphs: [
      "The company is not obligated to provide uninterrupted access to the site and is not liable for losses caused by delays, errors, interruptions, or external events such as equipment failures, weather, strikes, or other disruptions.",
      "The company reserves the right to monitor website use and transmitted content for lawful purposes, and use of the service constitutes consent to that monitoring.",
    ],
  },
  {
    title: "Disclaimers and limitation of liability",
    paragraphs: [
      'The website is provided on an "as is" basis. Easy Property Solutions LLC disclaims express and implied warranties, including warranties of merchantability, fitness for a particular purpose, title, and non-infringement.',
      "You assume responsibility for errors, omissions, data reconstruction, and virus detection. The company is not liable for special, incidental, or consequential damages arising from use of the site.",
    ],
  },
  {
    title: "Indemnification",
    paragraphs: [
      "You agree to release, defend, indemnify, and hold harmless Easy Property Solutions LLC and its affiliates, officers, employees, agents, vendors, and contractors from claims, losses, costs, and expenses arising from your access to or use of the website.",
    ],
  },
  {
    title: "Privacy, spam, and miscellaneous terms",
    paragraphs: [
      "The Terms of Use incorporate the Privacy Policy. The company also reserves the right to combat spam and suspend access for anyone it believes is using the website in violation of that policy.",
      "The original terms state that Texas law governs the agreement and that legal claims must be brought in Dallas County, Texas, subject to applicable law. The agreement also addresses severability, termination, connectivity charges, notices, and the idea that the posted terms form the complete agreement.",
      `Questions about the terms can be directed to ${CONTACT.email}.`,
    ],
  },
];

const ICONS = {
  clock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 7.8v4.8l3 1.8"></path></svg>',
  spark:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3 1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3L12 3Z"></path><path d="m18.5 15 .9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z"></path><path d="m5.5 14 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z"></path></svg>',
  cash:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"></rect><circle cx="12" cy="12" r="2.7"></circle><path d="M6.6 9h.01M17.4 15h.01"></path></svg>',
  home:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10.5 12 4l8 6.5"></path><path d="M6.5 10v8.5h11V10"></path><path d="M10 18.5v-5h4v5"></path></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5.5 5.6v5.8c0 4.2 2.7 8 6.5 9.6 3.8-1.6 6.5-5.4 6.5-9.6V5.6L12 3Z"></path><path d="m9.5 12 1.8 1.8 3.6-4"></path></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h3l1.5 4.2-1.9 1.9a14.2 14.2 0 0 0 6.3 6.3l1.9-1.9L20 16v3a1 1 0 0 1-1 1C10.7 20 4 13.3 4 5a1 1 0 0 1 1-1Z"></path></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>',
  map:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18-5 2V6l5-2 6 2 5-2v14l-5 2-6-2Z"></path><path d="M9 4v14"></path><path d="M15 6v14"></path></svg>',
  check:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4.2 4.2L19 6.6"></path></svg>',
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugToHash(route) {
  return route === "/" ? "#/" : `#${route}`;
}

function getRoute() {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  const normalized = hash.startsWith("/") ? hash : `/${hash}`;
  const trimmed = normalized.replace(/\/+$/, "");
  return trimmed || "/";
}

function renderParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
}

function renderBulletList(items, className = "bullet-list") {
  return `<ul class="${className}">${items
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function renderNav(currentRoute) {
  navRoot.innerHTML = NAV_ITEMS.map((item) => {
    const isActive =
      currentRoute === item.href.replace(/^#/, "") ||
      (item.href === "#/" && currentRoute === "/");

    return `<a class="nav-link${isActive ? " is-active" : ""}" href="${item.href}">${item.label}</a>`;
  }).join("");
}

function renderFooter() {
  footerRoot.innerHTML = `
    <div class="footer-grid">
      <div class="footer-copy">
        <div class="brand-copy">
          <strong>${CONTACT.brand}</strong>
          <small style="color: rgba(255, 248, 239, 0.72);">${CONTACT.legalName}</small>
        </div>
        <p>
          Fair cash offers for homeowners who want a faster, cleaner alternative to
          listing the traditional way.
        </p>
        <p class="footer-note">Serving ${CONTACT.serviceArea}.</p>
      </div>

      <div class="footer-nav">
        <div class="footer-label">Navigate</div>
        ${NAV_ITEMS.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </div>

      <div class="footer-contact">
        <div class="footer-label">Reach Us</div>
        <a href="tel:${CONTACT.phoneHref}">${CONTACT.phoneDisplay}</a>
        <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>
      </div>
    </div>
    <div class="footer-legal">
      <span>&copy; ${new Date().getFullYear()} ${CONTACT.legalName}. All rights reserved.</span>
      <span>
        <a href="#/privacy-policy">Privacy Policy</a>
        &nbsp;|&nbsp;
        <a href="#/terms-of-use">Terms of Use</a>
      </span>
    </div>
  `;
}

function leadForm(options = {}) {
  const {
    title = "Request your cash offer",
    description = "Tell us where the property is, how to reach you, and anything important about the situation.",
    context = "general",
    submitLabel = "Request offer",
    formId = "",
    cityName = "",
  } = options;

  return `
    <section class="quote-form" ${formId ? `id="${formId}"` : ""}>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(description)}</p>
      <form class="form-grid" data-lead-form data-context="${escapeHtml(context)}">
        <input type="hidden" name="context" value="${escapeHtml(context)}" />
        <input type="hidden" name="pageCity" value="${escapeHtml(cityName)}" />
        <div class="input-stack">
          <label for="${context}-address">Property address</label>
          <input id="${context}-address" name="address" type="text" placeholder="123 Main St, Richmond, VA" />
        </div>
        <div class="input-row">
          <div class="input-stack">
            <label for="${context}-city">City</label>
            <input id="${context}-city" name="city" type="text" placeholder="Richmond" autocomplete="address-level2" />
          </div>
          <div class="input-stack">
            <label for="${context}-state">State</label>
            <input id="${context}-state" name="state" type="text" placeholder="VA" autocomplete="address-level1" />
          </div>
        </div>
        <div class="input-stack">
          <label for="${context}-name">Your name</label>
          <input id="${context}-name" name="name" type="text" placeholder="Alex Morgan" />
        </div>
        <div class="input-stack">
          <label for="${context}-phone">Phone number</label>
          <input id="${context}-phone" name="phone" type="tel" placeholder="${CONTACT.phoneDisplay}" required />
        </div>
        <div class="input-stack">
          <label for="${context}-email">Email</label>
          <input id="${context}-email" name="email" type="email" placeholder="you@example.com" />
        </div>
        <div class="input-stack">
          <label for="${context}-message">What should we know?</label>
          <textarea id="${context}-message" name="message" placeholder="Repairs needed, timeline, inherited property, foreclosure pressure, or anything else that matters."></textarea>
        </div>
        <button class="button button-primary" type="submit">${escapeHtml(submitLabel)}</button>
        <p class="form-footnote">
          By submitting, you consent to follow-up by phone, email, or text about your property.
        </p>
      </form>
    </section>
  `;
}

function sectionHeading(title, description, eyebrow = "") {
  return `
    <div class="section-heading">
      ${eyebrow ? `<span class="eyebrow" style="width: fit-content; color: var(--brand-deep); background: rgba(31, 91, 71, 0.08); border-color: rgba(31, 91, 71, 0.1);">${escapeHtml(eyebrow)}</span>` : ""}
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(description)}</p>
    </div>
  `;
}

function iconBadge(name) {
  return `<span class="icon-badge" aria-hidden="true">${ICONS[name] || ICONS.check}</span>`;
}

function renderProcessCards() {
  return `
    <div class="section-grid three-up">
      ${PROCESS_STEPS.map(
        (step, index) => `
          <article class="step-card">
            <span class="step-index">0${index + 1}</span>
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.body)}</p>
          </article>
        `
      ).join("")}
    </div>
  `;
}

function renderAdvantageCards() {
  return `
    <div class="section-grid three-up">
      ${ADVANTAGES.map(
        (item) => `
          <article class="feature-card">
            ${iconBadge(item.icon)}
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.body)}</p>
          </article>
        `
      ).join("")}
    </div>
  `;
}

function renderTestimonialCards() {
  return `
    <div class="section-grid two-up">
      ${TESTIMONIALS.map(
        (item) => `
          <article class="testimonial-card">
            <blockquote>"${escapeHtml(item.quote)}"</blockquote>
            <footer>${escapeHtml(item.source)}</footer>
          </article>
        `
      ).join("")}
    </div>
  `;
}

function quoteBand(title, description, route = "/contact-us", buttonLabel = "Talk with our team") {
  return `
    <section class="quote-band">
      <div>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(description)}</p>
      </div>
      <a class="button button-secondary" href="${slugToHash(route)}">${escapeHtml(buttonLabel)}</a>
    </section>
  `;
}

function renderHomePage() {
  return {
    title: "Sell Your House Fast in Virginia",
    slug: "home",
    html: `
      <article class="page">
        <section class="hero-panel">
          <div class="hero-grid">
            <div class="hero-copy">
              <span class="eyebrow">Richmond Cash Home Buyers</span>
              <h1 class="display">Sell fast. <em>Keep your timeline.</em></h1>
              <p class="lede">
                Skip repairs, showings, agent commissions, and lender uncertainty. We help
                homeowners across Richmond and the surrounding counties move from stress to
                a fair cash offer with a simple process.
              </p>
              <div class="hero-actions">
                <a class="button button-primary" href="#/" data-scroll-target="quote-form-home">Get your cash offer</a>
                <a class="button button-secondary" href="#/compare">Compare your options</a>
              </div>
              <div class="hero-facts">
                ${HOME_FACTS.map(
                  (fact) => `
                    <div class="fact-card">
                      <strong>${escapeHtml(fact.value)}</strong>
                      <span>${escapeHtml(fact.label)}</span>
                    </div>
                  `
                ).join("")}
              </div>
            </div>
            ${leadForm({
              title: "The best cash offer for your home is one step away",
              description:
                "Share the basics and we will reach out with a clear next step, usually within one business day.",
              context: "home",
              submitLabel: "Request my offer",
              formId: "quote-form-home",
            })}
          </div>
        </section>

        <section class="section-block" id="home-process">
          ${sectionHeading(
            "A simple three-step process",
            "The original site centers on speed and clarity. This rebuild keeps that structure but presents it with a cleaner, more modern experience.",
            "How it works"
          )}
          ${renderProcessCards()}
        </section>

        <section class="split-layout">
          <section class="section-card comparison-stack">
            ${sectionHeading(
              "Why sellers choose a direct cash sale",
              "Selling to Easy Property Solutions LLC removes listing friction and lets you focus on the move instead of the marketing."
            )}
            <div class="comparison-panel is-brand">
              <h3>Selling to ${CONTACT.legalName}</h3>
              ${renderBulletList([
                "Fast cash offer within 24 hours",
                "No listing, showings, or prep work",
                "No repair checklist before closing",
                "Close on the date you choose",
              ])}
            </div>
          </section>

          <section class="section-card comparison-stack">
            ${sectionHeading(
              "What the traditional route usually brings",
              "Sometimes listing is the right move. But when time, certainty, or property condition is the real issue, the tradeoffs become obvious."
            )}
            <div class="comparison-panel is-market">
              <h3>Selling the traditional way</h3>
              ${renderBulletList([
                "A buyer can back out late in the process",
                "Prep work, cleaning, and repeated showings",
                "Repair negotiations after inspection",
                "A timeline that depends on financing and appraisal",
              ])}
            </div>
          </section>
        </section>

        <section class="section-block">
          ${sectionHeading(
            "What makes us the best fit for difficult situations",
            "These are the same core advantages surfaced throughout the original website, rewritten to feel clearer and more trustworthy.",
            "Why choose us"
          )}
          ${renderAdvantageCards()}
        </section>

        <section class="section-block">
          ${sectionHeading(
            "Built for real life, not ideal conditions",
            "We work with homeowners who need to move quickly, simplify an inherited property, avoid repair costs, or just stop living under a timeline that no longer works."
          )}
          <div class="chip-row">
            ${SELLER_SITUATIONS.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
          </div>
          <div class="metric-row">
            <article class="metric-card">
              <strong>10+</strong>
              <p>Years of experience helping homeowners find a simpler path forward.</p>
            </article>
            <article class="metric-card">
              <strong>1</strong>
              <p>Single walkthrough instead of repeated open houses and buyer tours.</p>
            </article>
            <article class="metric-card">
              <strong>0</strong>
              <p>Repairs, commissions, and financing contingencies standing between you and closing.</p>
            </article>
          </div>
        </section>

        <section class="section-block">
          ${sectionHeading(
            "Industry voices that explain the cash-buyer advantage",
            "The original testimonials page leaned on outside sources. This remake preserves that trust-building angle in a cleaner card layout.",
            "Testimonials"
          )}
          ${renderTestimonialCards()}
        </section>

        ${quoteBand(
          "Need a clean exit instead of a long listing cycle?",
          "Tell us about the property and we will help you evaluate the fastest next step.",
          "/contact-us",
          "Start the conversation"
        )}
      </article>
    `,
  };
}

function renderAboutPage() {
  return {
    title: "About",
    slug: "about",
    html: `
      <article class="page">
        <section class="section-card split-layout">
          <div class="section-block">
            ${sectionHeading(
              `About ${CONTACT.legalName}`,
              `${CONTACT.legalName} is a local, family-owned real estate investment company. We help homeowners sell quickly and without the usual friction of listing, repairs, and open-ended timelines.`,
              "About"
            )}
            <p class="u-muted" style="margin: 0;">
              We buy houses in as-is condition, make direct cash offers, and work with sellers
              dealing with inherited homes, relocation, financial pressure, property damage,
              or simply a need for a more straightforward process.
            </p>
            <div class="button-row">
              <a class="button button-primary" href="#/contact-us">Talk with our team</a>
              <a class="button button-ghost" href="#/compare">See the comparison</a>
            </div>
          </div>
          <div class="section-grid two-up">
            ${ABOUT_BENEFITS.map(
              (item) => `
                <article class="benefit-card">
                  ${iconBadge("check")}
                  <h3>${escapeHtml(item)}</h3>
                </article>
              `
            ).join("")}
          </div>
        </section>

        <section class="section-block">
          ${sectionHeading(
            "Situations we help solve",
            "The original About page highlighted the kinds of sellers the company serves. We kept that list, but gave it clearer structure and more breathing room."
          )}
          <div class="section-grid four-up">
            ${SELLER_SITUATIONS.map(
              (item) => `
                <article class="reason-card">
                  ${iconBadge("home")}
                  <h3>${escapeHtml(item)}</h3>
                  <p>We build the offer around the situation instead of forcing you through a one-size-fits-all sales process.</p>
                </article>
              `
            ).join("")}
          </div>
        </section>

        <section class="section-block">
          ${sectionHeading(
            "How we help sellers move forward",
            "If it makes sense for both sides, we arrange a simple walkthrough, review the market and condition, and make a no-pressure offer grounded in reality."
          )}
          <div class="split-layout">
            <section class="section-card">
              <h3 style="margin-top: 0;">What we aim to remove</h3>
              ${renderBulletList([
                "Repeated showings and constant schedule disruption",
                "Repair lists and contractor coordination",
                "Unclear timelines tied to lender approval",
                "Commission and closing-cost surprises",
              ])}
            </section>
            <section class="section-card">
              <h3 style="margin-top: 0;">What we replace it with</h3>
              ${renderBulletList([
                "A direct local buyer",
                "A market-based all-cash offer",
                "A closing date you can plan around",
                "A calmer path to your next move",
              ])}
            </section>
          </div>
        </section>

        <section class="section-block">
          ${sectionHeading(
            "Outside perspectives",
            "The original About page repeated the external testimonial quotes, so we kept that validation layer here as well."
          )}
          ${renderTestimonialCards()}
        </section>

        ${quoteBand(
          "Questions about how the process works?",
          "If you want to understand the numbers, timeline, or what happens after the walkthrough, we are happy to talk it through.",
          "/contact-us",
          "Contact us"
        )}
      </article>
    `,
  };
}

function renderComparePage() {
  return {
    title: "Compare Your Selling Options",
    slug: "compare",
    html: `
      <article class="page">
        <section class="section-card">
          ${sectionHeading(
            "Selling to us vs. selling with a local real estate agent",
            "The original compare page focused on cost, timing, and certainty. This rebuild keeps those same ideas and makes the tradeoffs easier to scan.",
            "Compare"
          )}
        </section>

        <section class="table-shell">
          <table class="compare-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Selling with an agent</th>
                <th>Selling to ${CONTACT.legalName}</th>
              </tr>
            </thead>
            <tbody>
              ${COMPARE_ROWS.map(
                (row) => `
                  <tr>
                    <td>${escapeHtml(row.label)}</td>
                    <td>${escapeHtml(row.market)}</td>
                    <td>${escapeHtml(row.cash)}</td>
                  </tr>
                `
              ).join("")}
            </tbody>
          </table>
        </section>

        <section class="metric-row">
          <article class="metric-card">
            <strong>91</strong>
            <p>Approximate average days on market referenced by the original comparison page.</p>
          </article>
          <article class="metric-card">
            <strong>6%</strong>
            <p>Typical agent commission range sellers often budget for in a traditional listing.</p>
          </article>
          <article class="metric-card">
            <strong>1</strong>
            <p>Single walkthrough instead of preparing for a stream of buyers and inspections.</p>
          </article>
        </section>

        <section class="split-layout">
          <section class="section-card">
            <h3 style="margin-top: 0;">Why financed offers feel less certain</h3>
            <p class="u-muted">
              Inspection contingencies can reopen repair negotiations, and financing
              contingencies can allow a buyer to walk away if the loan does not come together.
              Appraisals add another gate that can slow or derail a deal.
            </p>
          </section>
          <section class="section-card">
            <h3 style="margin-top: 0;">Why cash feels simpler</h3>
            <p class="u-muted">
              A direct cash offer removes the lender from the process. That usually means fewer
              approvals, fewer delays, and fewer late surprises right when you are trying to move.
            </p>
          </section>
        </section>

        ${quoteBand(
          "Want to compare your actual property, not just the theory?",
          "Share the address and we can talk through what a direct offer might look like for your timeline.",
          "/contact-us",
          "Compare my options"
        )}
      </article>
    `,
  };
}

function renderFaqPage() {
  return {
    title: "Frequently Asked Questions",
    slug: "faq",
    html: `
      <article class="page">
        <section class="section-card">
          ${sectionHeading(
            "Frequently asked questions",
            "Selling your house for cash may be new territory. These are the most common questions surfaced on the original site, rewritten for clarity and easier reading.",
            "FAQ"
          )}
          <p class="u-muted" style="margin: 0;">
            If you do not see your situation here, call us at ${CONTACT.phoneDisplay} or use the contact page and we will talk it through.
          </p>
        </section>

        <section class="faq-list">
          ${FAQS.map(
            (item, index) => `
              <details class="faq-item"${index === 0 ? " open" : ""}>
                <summary>${escapeHtml(item.question)}</summary>
                <div class="faq-answer">
                  ${renderParagraphs(item.answer)}
                  ${item.bullets ? renderBulletList(item.bullets) : ""}
                </div>
              </details>
            `
          ).join("")}
        </section>

        <section class="split-layout">
          <section class="section-card">
            <h3 style="margin-top: 0;">Quick reminders</h3>
            ${renderBulletList([
              "You do not need to repair the house first",
              "You can choose the closing date",
              "There are no commissions or lender contingencies",
              "You have no obligation to accept the offer",
            ])}
          </section>
          <section class="section-card">
            <h3 style="margin-top: 0;">Prefer to talk it through?</h3>
            <p class="u-muted">
              Some questions only make sense in the context of your timeline, your house, and what
              is happening around the sale. We are happy to have that conversation directly.
            </p>
            <div class="button-row" style="margin-top: 1rem;">
              <a class="button button-primary" href="tel:${CONTACT.phoneHref}">${CONTACT.phoneDisplay}</a>
              <a class="button button-ghost" href="#/contact-us">Contact us</a>
            </div>
          </section>
        </section>
      </article>
    `,
  };
}

function renderTestimonialsPage() {
  return {
    title: "Testimonials",
    slug: "testimonials",
    html: `
      <article class="page">
        <section class="section-card">
          ${sectionHeading(
            "Seller testimonials and outside perspectives",
            "The original site leaned on recognized outside sources rather than long homeowner stories. We preserved that approach and gave it a cleaner editorial presentation.",
            "Testimonials"
          )}
        </section>

        ${renderTestimonialCards()}

        <section class="section-block">
          ${sectionHeading(
            "Why these quotes matter",
            "They all point to the same core idea: a cash buyer can reduce time, uncertainty, and transaction friction when selling fast matters more than playing the market."
          )}
          <div class="section-grid two-up">
            <article class="feature-card">
              ${iconBadge("clock")}
              <h3>Speed matters when life is already in motion</h3>
              <p>Cash offers can compress the sales timeline dramatically compared with financed transactions.</p>
            </article>
            <article class="feature-card">
              ${iconBadge("cash")}
              <h3>Fewer people taking a cut</h3>
              <p>Skipping commissions, repair asks, and closing-cost surprises can preserve more of the number you actually keep.</p>
            </article>
            <article class="feature-card">
              ${iconBadge("shield")}
              <h3>Certainty reduces stress</h3>
              <p>Inspection disputes, financing breakdowns, and appraisal issues are some of the biggest emotional drains in a traditional sale.</p>
            </article>
            <article class="feature-card">
              ${iconBadge("home")}
              <h3>As-is can be the difference maker</h3>
              <p>For sellers dealing with damage, inherited homes, or time pressure, avoiding repairs can be a major relief.</p>
            </article>
          </div>
        </section>

        ${quoteBand(
          "Want to know what your own timeline could look like?",
          "We can tell you what a direct offer process would likely involve for your property and situation.",
          "/contact-us",
          "Request a conversation"
        )}
      </article>
    `,
  };
}

function renderContactPage() {
  return {
    title: "Contact Us",
    slug: "contact",
    html: `
      <article class="page">
        <section class="contact-grid">
          <section class="contact-banner">
            <h2>Message us</h2>
            <p>
              Fill out the form and one of our team members will be in touch ${CONTACT.responseTime}.
            </p>
            <div class="section-grid" style="margin-top: 1.5rem;">
              <article class="contact-card">
                ${iconBadge("phone")}
                <h3>Call</h3>
                <p><a href="tel:${CONTACT.phoneHref}">${CONTACT.phoneDisplay}</a></p>
              </article>
              <article class="contact-card">
                ${iconBadge("mail")}
                <h3>Email</h3>
                <p><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></p>
              </article>
              <article class="contact-card">
                ${iconBadge("map")}
                <h3>Coverage area</h3>
                <p>${CONTACT.serviceArea}</p>
              </article>
            </div>
          </section>
          ${leadForm({
            title: "Tell us about the property",
            description:
              "A fast intro is enough. We can follow up on details after we know the address and how best to reach you.",
            context: "contact",
            submitLabel: "Send message",
          })}
        </section>

        <section class="section-block">
          ${sectionHeading(
            "What happens after you reach out",
            "The process is intentionally simple so you can get clarity quickly without committing to anything too early."
          )}
          ${renderProcessCards()}
        </section>
      </article>
    `,
  };
}

function renderPrivacyPage() {
  return {
    title: "Privacy Policy",
    slug: "privacy",
    html: `
      <article class="page">
        <section class="legal-card">
          <div class="legal-intro">
            <h1>Privacy Policy</h1>
            <p>
              This page is a structured rewrite of the original privacy policy content from
              easycashyourhome.com. It covers the same topics while presenting them in a cleaner,
              easier-to-read format.
            </p>
          </div>
          <div class="legal-grid">
            ${PRIVACY_SECTIONS.map(
              (section) => `
                <section class="legal-section">
                  <h2>${escapeHtml(section.title)}</h2>
                  ${renderParagraphs(section.paragraphs)}
                  ${section.bullets ? renderBulletList(section.bullets) : ""}
                </section>
              `
            ).join("")}
          </div>
        </section>
      </article>
    `,
  };
}

function renderTermsPage() {
  return {
    title: "Terms of Use",
    slug: "terms",
    html: `
      <article class="page">
        <section class="legal-card">
          <div class="legal-intro">
            <h1>Terms of Use</h1>
            <p>
              This page reorganizes the source terms into readable sections while preserving the
              main ideas from the original site: acceptance of terms, intellectual property,
              limitations on use, disclaimer language, and miscellaneous governing provisions.
            </p>
          </div>
          <div class="legal-grid">
            ${TERMS_SECTIONS.map(
              (section) => `
                <section class="legal-section">
                  <h2>${escapeHtml(section.title)}</h2>
                  ${renderParagraphs(section.paragraphs)}
                  ${section.bullets ? renderBulletList(section.bullets) : ""}
                </section>
              `
            ).join("")}
          </div>
        </section>
      </article>
    `,
  };
}

function renderNotFound() {
  return {
    title: "Page Not Found",
    slug: "not-found",
    html: `
      <article class="page page-not-found">
        <div class="not-found-card">
          <h1>Page not found</h1>
          <p>
            The route you asked for does not exist in this rebuild. Use the homepage to keep
            exploring.
          </p>
          <div class="button-row" style="justify-content: center;">
            <a class="button button-primary" href="#/">Back home</a>
          </div>
        </div>
      </article>
    `,
  };
}

function resolvePage(route) {
  if (route === "/") return renderHomePage();
  if (route === "/about") return renderAboutPage();
  if (route === "/compare") return renderComparePage();
  if (route === "/faq") return renderFaqPage();
  if (route === "/testimonials") return renderTestimonialsPage();
  if (route === "/contact-us") return renderContactPage();
  if (route === "/privacy-policy") return renderPrivacyPage();
  if (route === "/terms-of-use") return renderTermsPage();

  return renderNotFound();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 8000);
}

function persistLead(values) {
  const existing = JSON.parse(window.localStorage.getItem(LOCAL_LEADS_KEY) || "[]");
  existing.push({
    ...values,
    submittedAt: new Date().toISOString(),
  });
  window.localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(existing));
}

async function handleLeadSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const submitButton = form.querySelector('button[type="submit"]');
  const formData = new FormData(form);
  const payload = Object.fromEntries(formData.entries());

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    if (FORM_ENDPOINT) {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }
    } else {
      persistLead(payload);
      await new Promise((resolve) => window.setTimeout(resolve, 500));
    }

    form.reset();
    const leadName = payload.name ? `, ${payload.name}` : "";
    const detail = FORM_ENDPOINT
      ? "We will be in touch soon."
      : "This prototype stored your request locally. Add FORM_ENDPOINT before launch to send leads automatically.";
    showToast(`Thanks${leadName}. ${detail}`);
  } catch (error) {
    showToast("Something went wrong while sending the request. Please try again.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = submitButton.dataset.originalLabel || submitButton.textContent;
  }
}

function bindLeadForms() {
  app.querySelectorAll("[data-lead-form]").forEach((form) => {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton && !submitButton.dataset.originalLabel) {
      submitButton.dataset.originalLabel = submitButton.textContent;
    }
    form.addEventListener("submit", handleLeadSubmit);
  });
  enhanceAddressAutocomplete();
}

async function enhanceAddressAutocomplete() {
  const token = window.MAPBOX_TOKEN;
  if (!token || token === "YOUR_MAPBOX_TOKEN") return;

  await waitForMapboxSearch();
  if (!window.mapboxsearch) return;

  const inputs = app.querySelectorAll(
    '[data-lead-form] input[name="address"]:not([data-autocomplete-bound])'
  );
  inputs.forEach((input) => {
    input.dataset.autocompleteBound = "true";

    const hidden = document.createElement("input");
    hidden.type = "hidden";
    hidden.name = "address";

    const searchBox = document.createElement("mapbox-search-box");
    searchBox.accessToken = token;
    searchBox.options = {
      language: "en",
      country: "us",
      types: "address",
      proximity: { lng: -77.436, lat: 37.541 },
    };
    searchBox.theme = {
      variables: {
        fontFamily: '"Manrope", sans-serif',
        fontWeight: "500",
        unit: "16px",
        padding: "0.9rem",
        borderRadius: "16px",
        colorText: "#163126",
        colorBackground: "rgba(255, 255, 255, 0.9)",
        boxShadow: "none",
      },
      cssText: `
        .Input {
          padding-left: 2.75rem !important;
          font-family: "Manrope", sans-serif !important;
          font-size: 1rem !important;
          font-weight: 500 !important;
          line-height: 1.4 !important;
          height: auto !important;
        }
        .SearchIcon {
          left: 0.9rem !important;
        }
        .Suggestion, .ResultName, .ResultDescription {
          font-family: "Manrope", sans-serif !important;
        }
      `,
    };
    searchBox.classList.add("address-autocomplete");
    if (input.id) searchBox.id = input.id;

    input.replaceWith(searchBox);
    searchBox.after(hidden);

    searchBox.addEventListener("retrieve", (event) => {
      const feature = event.detail?.features?.[0];
      if (!feature) return;
      const props = feature.properties || {};
      hidden.value = props.full_address || props.place_formatted || props.name || "";

      const ctx = props.context || {};
      const cityName = ctx.place?.name || ctx.locality?.name || "";
      const stateCode = ctx.region?.region_code || ctx.region?.name || "";

      const form = searchBox.closest("form");
      if (!form) return;
      const cityField = form.querySelector('input[name="city"]');
      const stateField = form.querySelector('input[name="state"]');
      if (cityField && cityName) cityField.value = cityName;
      if (stateField && stateCode) stateField.value = stateCode;
    });
  });
}

function waitForMapboxSearch() {
  if (window.mapboxsearch) return Promise.resolve();
  return new Promise((resolve) => {
    const script = document.getElementById("search-js");
    if (!script) return resolve();
    if (window.mapboxsearch) return resolve();
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => resolve(), { once: true });
    setTimeout(resolve, 4000);
  });
}

function bindScrollButtons() {
  app.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = button.getAttribute("data-scroll-target");
      const target = document.getElementById(targetId);
      if (!target) return;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bindUi() {
  bindLeadForms();
  bindScrollButtons();
}

let isInitialRender = true;

function render() {
  const route = getRoute();

  // On the initial load at the home route, the static HTML in index.html is
  // already correct - just hydrate (bind handlers, render nav/footer).
  if (isInitialRender && route === "/" && app.dataset.preRendered === "true") {
    isInitialRender = false;
    renderNav(route);
    renderFooter();
    bindUi();
    header.classList.remove("is-nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    return;
  }
  isInitialRender = false;

  const page = resolvePage(route);

  renderNav(route);
  renderFooter();
  app.innerHTML = page.html;
  app.dataset.preRendered = "false";
  bindUi();

  document.title = `${page.title} | ${CONTACT.brand}`;
  document.body.dataset.route = page.slug;
  header.classList.remove("is-nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  header.classList.toggle("is-nav-open", !expanded);
});

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
