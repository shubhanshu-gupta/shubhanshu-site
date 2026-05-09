import AnimateIn from "./AnimateIn";

const FOCUS_AREAS = [
  {
    number: "01",
    title: "Cross-border Payments",
    description:
      "End-to-end product ownership of cross-border payment rails spanning Asia Retail & Private Banking, with scope extending to EMEA and NAM. From concept through governance to live delivery.",
  },
  {
    number: "02",
    title: "AI Use Cases in Payments",
    description:
      "Defining the product layer for AI in cross-border flows — intent capture, corridor optimisation, execution intelligence. Translating model capabilities into regulated, customer-ready experiences.",
  },
  {
    number: "03",
    title: "Regulatory Product Design",
    description:
      "Navigating multi-jurisdictional frameworks (MAS, FCA, RBI, OCC) as a design input, not an afterthought. Building compliance into the product architecture from the start.",
  },
  {
    number: "04",
    title: "Internal Thought Leadership",
    description:
      "Driving visibility for payments and deposits strategy across business lines through structured internal communications and cross-functional stakeholder alignment.",
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

        {/* Focus areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {FOCUS_AREAS.map((area, i) => (
            <AnimateIn key={area.number} delay={i * 80}>
              <div className="p-7 rounded-2xl border border-cream-200 bg-white card-lift">
                <span className="font-mono text-xs text-copper-500 tracking-widest mb-4 block">
                  {area.number}
                </span>
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-ink-500 text-sm leading-relaxed">{area.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Concept spotlight */}
        <AnimateIn>
          <div className="rounded-2xl bg-hero text-white overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-copper-500 tracking-widest uppercase">
                  Concept in development
                </span>
              </div>
              <h3 className="font-display font-semibold italic text-3xl md:text-4xl mb-4">
                Payment Concierge
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
                An AI-layered approach to cross-border payments spanning three layers:
                intent capture (understanding what the customer actually needs),
                corridor optimisation (selecting the best route given cost, speed, and regulatory fit),
                and execution intelligence (guiding the transaction to completion with minimal friction).
                Built to meet regulators where they are — deterministic where required, AI-assisted where it adds genuine value.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Intent Layer", "Optimisation Engine", "Execution Layer", "MAS · FCA · RBI", "Regulated AI"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border border-white/15 text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>

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
