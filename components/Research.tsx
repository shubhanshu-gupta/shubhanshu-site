import AnimateIn from "./AnimateIn";

const RESEARCH_ITEMS = [
  {
    type: "Patent",
    typeColor: "bg-copper-100 text-copper-700",
    title: "Machine Learning Tool for Financial Data Analysis",
    venue: "USPTO Application #17476388 · Also filed in Singapore",
    year: "Filed 2021",
    detail:
      "Filed as lead inventor while leading the AI/ML Centre of Excellence at Citibank. The patent covers an ML-based approach to financial data pattern detection and anomaly identification.",
    link: "https://patentcenter.uspto.gov/applications/17476388",
    linkLabel: "View on USPTO",
  },
  {
    type: "Publication",
    typeColor: "bg-live-bg text-live-green",
    title: "Music Data Analysis: A State-of-the-art Survey",
    venue: "ASE BigData Conference · Harvard University",
    year: "2016",
    detail:
      "Presented at the ASE International Conference on Big Data at Harvard. A comprehensive survey of machine learning approaches applied to music data analysis.",
    link: "https://drive.google.com/file/d/1O9whOdvgHXS-Wkqx4muZYw0PniXAMUPm/view",
    linkLabel: "View paper",
  },
  {
    type: "Publication",
    typeColor: "bg-live-bg text-live-green",
    title: "Social Data Analysis: A Study on Friends Rating Influence",
    venue: "WWC Connect 2017 · VMware India",
    year: "2017",
    detail:
      "Peer-reviewed paper selected for presentation at WWC Connect 2017. Examines how social graph connections influence rating behaviour in consumer platforms.",
    link: "https://arxiv.org/abs/1702.07651",
    linkLabel: "View on arXiv",
  },
  {
    type: "Talk / Teaching",
    typeColor: "bg-cream-100 text-ink-700",
    title: "AI Prototyping for Product Managers",
    venue: "YouTube · shubhanshugupta.com/ai-prototyping",
    year: "Ongoing",
    detail:
      "A series on using AI tools for rapid hypothesis validation — covering data visualisation, prototyping, and the PM's role in AI product development.",
    link: "https://shubhanshugupta.com/ai-prototyping/",
    linkLabel: "View series",
  },
];

export default function Research() {
  return (
    <section id="research" className="bg-cream-50 py-28 md:py-36">
      <div className="max-w-site mx-auto px-6">
        <AnimateIn>
          <p className="section-label mb-4">03 · Research &amp; IP</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Ideas that made it<br className="hidden md:block" /> to peer review
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-16">
            A patent, two peer-reviewed publications, and a body of applied AI teaching work.
            The technical foundation that informs how I think about product.
          </p>
        </AnimateIn>

        <div className="space-y-5">
          {RESEARCH_ITEMS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <div className="p-7 rounded-2xl bg-white border border-cream-200 card-lift">
                <div className="flex flex-wrap items-start gap-4 justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${item.typeColor}`}>
                        {item.type}
                      </span>
                      <span className="text-xs font-mono text-ink-300">{item.year}</span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-ink-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-ink-300 tracking-wide mb-3">
                      {item.venue}
                    </p>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.detail}</p>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-2 text-xs font-medium text-copper-500 hover:text-copper-700 border border-copper-200 hover:border-copper-500 px-4 py-2 rounded-full transition-all duration-200"
                  >
                    {item.linkLabel}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Credential summary */}
        <AnimateIn delay={100}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1", label: "Patent filed" },
              { number: "2", label: "Peer-reviewed papers" },
              { number: "2", label: "International conferences" },
              { number: "9+", label: "Years of PM experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white border border-cream-200">
                <p className="font-display text-4xl font-semibold text-copper-500 mb-1">
                  {stat.number}
                </p>
                <p className="text-xs text-ink-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
