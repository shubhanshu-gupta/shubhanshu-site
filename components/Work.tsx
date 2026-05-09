import AnimateIn from "./AnimateIn";

const FOCUS_AREAS = [
  {
    number: "01",
    title: "Cross-border Payments",
    description:
      "End-to-end product ownership of cross-border payment rails spanning Asia Retail & Private Banking, with scope extending to EMEA and NAM. From concept through governance to live delivery.",
    metric: "30% transfer cost reduction · $1.2M incremental revenue · 5 corridors live",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="10" cy="10" rx="4" ry="8" stroke="currentColor" strokeWidth="1.2" />
        <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI Use Cases in Payments",
    description:
      "Defining the product layer for AI in cross-border flows — intent capture, corridor optimisation, execution intelligence. Translating model capabilities into regulated, customer-ready experiences.",
    metric: "Patent holder · AI/ML CoE Technical Lead · POCs across Wealth & Data Governance",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="5" y1="8" x2="2" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="5" y1="12" x2="2" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="15" y1="8" x2="18" y2="8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="15" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="8" y1="5" x2="8" y2="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="12" y1="5" x2="12" y2="2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="8" y1="15" x2="8" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="12" y1="15" x2="12" y2="18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Digital Product & HNI Growth",
    description:
      "Led data-driven optimisation of digital customer experience across Citi's APAC & EMEA markets. Designed an Offer Orchestration framework using A/B testing and user research to surface personalised offers — driving HNI acquisition across Singapore, Hong Kong, and the UAE.",
    metric: "10% product uptake increase · $2M+ incremental sales · 500K+ mobile app users",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="16" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <polyline points="4,13 8,9 11,11 16,5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Regulatory Product Design",
    description:
      "Leading ISO 20022 migration (MT→MX) across Asia and the multi-region Global Fund Transfer Transparency (GFTT) implementation across Asia, EMEA, and NAM — translating complex regulatory requirements into compliant, operationally stable payment systems.",
    metric: "ISO 20022 Asia Lead · GFTT Global Lead · 5+ global teams coordinated",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L3 5.5v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9v-5L10 2z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-cream-50 py-28 md:py-36">
      <div className="max-w-site mx-auto px-6">
        <AnimateIn>
          <p className="section-label mb-4">01 · Professional</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Payments at scale,<br className="hidden md:block" /> across three regions
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-16">
            As VP, Product Management at Citibank, I lead payments product across Asia Retail
            &amp; Private Banking — responsible for conceptualisation, customer experience,
            governance approvals, and final delivery. The scope spans Asia, EMEA, and NAM.
          </p>
        </AnimateIn>

        {/* Focus areas grid — CHANGE 3: removed Payment Concierge, CHANGE 4: icons + metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {FOCUS_AREAS.map((area, i) => (
            <AnimateIn key={area.number} delay={i * 80}>
              <div className="p-7 rounded-2xl border border-cream-200 bg-white card-lift flex flex-col h-full">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-copper-500 mt-0.5 shrink-0">{area.icon}</div>
                  <span className="font-mono text-xs text-copper-500 tracking-widest">
                    {area.number}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed flex-1">{area.description}</p>
                <div className="border-t border-cream-100 mt-4 pt-3">
                  <p className="font-mono text-[11px] text-copper-500 leading-relaxed">{area.metric}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Credential strip */}
        <AnimateIn delay={100}>
          <div className="mt-10 pt-10 border-t border-cream-200 flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "Employer", value: "Citibank" },
              { label: "Title", value: "Vice President, Product Management" },
              { label: "Focus", value: "Payments · Deposits" },
              { label: "Scope", value: "Asia · EMEA · NAM" },
              { label: "Based in", value: "Singapore" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] text-ink-300 tracking-widest uppercase mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-ink-700">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
