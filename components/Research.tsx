import AnimateIn from "./AnimateIn";

const RESEARCH_ITEMS = [
  {
    type: "Patent",
    typeColor: "bg-copper-100 text-copper-700",
    title: "Machine Learning Modeling to Identify Sensitive Data",
    venue: "USPTO · US-20260119715-A1 · Also filed in Singapore",
    year: "Granted May 2024",
    detail:
      "Filed as lead inventor while leading the AI/ML Centre of Excellence at Citibank. Covers a probabilistic ML + NLP-based framework for detecting and classifying PII sensitivity in enterprise data pipelines. The patented system is currently expanding across all Citi markets worldwide, integrating seamlessly into Citi's data pipelines to uphold data governance and integrity.",
    link: "https://ppubs.uspto.gov/api/pdf/downloadPdf/20260119715",
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
];

const SPEAKING_ITEMS = [
  {
    type: "YouTube Series",
    typeColor: "bg-cream-100 text-ink-700",
    title: "Navigating Autonomy at the Workplace",
    venue: "YouTube playlist",
    detail:
      "A candid conversation on professional life — specifically on how to operate with autonomy, own decisions, and maintain direction in large organisations. Originally recorded as part of a blog feature.",
    link: "https://www.youtube.com/playlist?list=PLUFVOl7WhQovfwvTaNRraW_Ox0iCZ0IbN",
    linkLabel: "View playlist",
  },
  {
    type: "Talk",
    typeColor: "bg-cream-100 text-ink-700",
    title: "Natural Language Processing in Machine Learning",
    venue: "Recorded talk · YouTube",
    detail:
      "A deep-dive talk on Natural Language Processing techniques in machine learning — covering practical approaches, model selection, and real-world applications in data-driven products.",
    link: "https://www.youtube.com/watch?v=F5qP3brApQc",
    linkLabel: "Watch on YouTube",
  },
];

export default function Research() {
  return (
    <section id="research" className="bg-cream-50 py-16 md:py-36">
      <div className="max-w-site mx-auto px-6">

        <AnimateIn>
          <p className="section-label mb-4">03 · Research &amp; IP</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Research, patents &amp;<br className="hidden md:block" /> intellectual output
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-12 md:mb-16">
            A USPTO patent, two peer-reviewed publications at international conferences,
            and a track record of turning research into shipped product.
          </p>
        </AnimateIn>

        {/* Research items — stacked cards, link always below content on mobile */}
        <div className="space-y-4 md:space-y-5">
          {RESEARCH_ITEMS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <div className="p-5 md:p-7 rounded-2xl bg-white border border-cream-200 card-lift">
                {/* Badge + year */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${item.typeColor}`}>
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-ink-300">{item.year}</span>
                </div>

                {/* Title + venue */}
                <h3 className="font-display font-semibold text-lg md:text-xl text-ink-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-ink-300 tracking-wide mb-3">
                  {item.venue}
                </p>

                {/* Detail — full width always */}
                <p className="text-sm text-ink-500 leading-relaxed mb-4">
                  {item.detail}
                </p>

                {/* Link — full row on mobile, floats right on md+ */}
                <div className="flex md:justify-end">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-copper-500 hover:text-copper-700 border border-copper-200 hover:border-copper-500 px-4 py-2 rounded-full transition-all duration-200"
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

        {/* Credential stats */}
        <AnimateIn delay={100}>
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "1",  label: "USPTO patent" },
              { number: "2",  label: "Peer-reviewed papers" },
              { number: "2",  label: "International conferences" },
              { number: "9+", label: "Years of PM experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-5 md:p-6 rounded-2xl bg-white border border-cream-200">
                <p className="font-display text-3xl md:text-4xl font-semibold text-copper-500 mb-1">
                  {stat.number}
                </p>
                <p className="text-xs text-ink-500 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Speaking & Teaching */}
        <AnimateIn>
          <h3 className="font-display font-semibold text-2xl text-ink-900 mb-6 mt-12 md:mt-14">
            Speaking &amp; Teaching
          </h3>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {SPEAKING_ITEMS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <div className="p-5 md:p-7 rounded-2xl bg-white border border-cream-200 card-lift flex flex-col">
                {/* Badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${item.typeColor}`}>
                    {item.type}
                  </span>
                </div>

                {/* Title + venue */}
                <h3 className="font-display font-semibold text-lg md:text-xl text-ink-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-ink-300 tracking-wide mb-3">
                  {item.venue}
                </p>

                {/* Detail */}
                <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-5">
                  {item.detail}
                </p>

                {/* Link */}
                <div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-medium text-copper-500 hover:text-copper-700 border border-copper-200 hover:border-copper-500 px-4 py-2 rounded-full transition-all duration-200"
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

      </div>
    </section>
  );
}
