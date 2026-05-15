"use client";
import AnimateIn from "./AnimateIn";
import { trackEvent, EVENTS } from "@/lib/analytics";

// ── PhotoStrip ─────────────────────────────────────────────────────────────
// Renders a horizontal row of images; each is greyscale at rest, full colour on hover.
function PhotoStrip({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <div className="flex gap-2 mt-6">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="flex-1 relative h-28 overflow-hidden rounded-xl"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-all duration-500 grayscale hover:grayscale-0 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────

const RESEARCH_ITEMS: {
  type: string;
  typeColor: string;
  title: string;
  venue: string;
  year: string;
  detail: string;
  link: string;
  linkLabel: string;
  trackProps: Record<string, string>;
  logo?: { src: string; alt: string };
  photos?: { src: string; alt: string }[];
}[] = [
  {
    type: "Patent",
    typeColor: "bg-copper-100 text-copper-700",
    title: "Machine Learning Modeling to Identify Sensitive Data",
    venue: "US Patent · US-20260119715-A1 · Also filed in Singapore",
    year: "Granted May 2024",
    detail:
      "Filed as lead inventor while leading the AI/ML Centre of Excellence at Citibank. Covers a probabilistic ML + NLP-based framework for detecting and classifying PII sensitivity in enterprise data pipelines. The patented system is currently expanding across all Citi markets worldwide, integrating seamlessly into Citi's data pipelines to uphold data governance and integrity.",
    link: "https://drive.google.com/file/d/1QRrDQR7z5edCxfegRp5oHnw4Mw12eV0M/view?usp=sharing",
    linkLabel: "View patent",
    trackProps: { type: "patent", title: "PII Detection" },
    logo: { src: "/images/logos/uspto.svg", alt: "USPTO" },
    photos: [
      {
        src: "https://media.licdn.com/dms/image/v2/D5622AQGJEvbfgNe6AQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1716653134468?e=1780531200&v=beta&t=KlDGyul_KZ_b4xQdZo0WPqxeCt_m_vOVq1xiO4cZ1BA",
        alt: "US Patent grant — Shubhanshu Gupta",
      },
      {
        src: "https://media.licdn.com/dms/image/v2/D5622AQGMec3LqqnS2A/feedshare-shrink_1280/feedshare-shrink_1280/0/1716653137396?e=1780531200&v=beta&t=ghCGgY1QoqScF-oS3xyvnZJNGGPrpiMEy6zb9S1FYB8",
        alt: "Patent certificate — Shubhanshu Gupta",
      },
      {
        src: "https://media.licdn.com/dms/image/v2/D5622AQHpdDXv6yerPw/feedshare-image-high-res/feedshare-image-high-res/0/1716653135269?e=1780531200&v=beta&t=9peAM7dh6xruW89FvbYP4TVvEzSVgZCGgj1ha6HXx4c",
        alt: "Patent filing celebration — Shubhanshu Gupta",
      },
    ],
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
    trackProps: { type: "publication", title: "Music Data Analysis" },
    logo: { src: "/images/logos/harvard.svg", alt: "Harvard University" },
    photos: [
      {
        src: "/images/posts/harvard-1.JPG",
        alt: "Presenting at Harvard — ASE BigData Conference 2016",
      },
      {
        src: "/images/posts/harvard-2.JPG",
        alt: "Harvard University conference — 2016",
      },
    ],
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
    trackProps: { type: "publication", title: "Social Data Analysis" },
    logo: { src: "/images/logos/vmware.svg", alt: "VMware" },
  },
];

const SPEAKING_ITEMS = [
  {
    type: "Interview",
    typeColor: "bg-cream-100 text-ink-700",
    title: "Navigating Autonomy at the Workplace",
    venue: "Recorded interview · YouTube",
    detail:
      "A candid conversation on professional life — specifically on how to operate with autonomy, own decisions, and maintain direction in large organisations. Originally recorded as part of a blog feature.",
    link: "https://www.youtube.com/watch?v=F5qP3brApQc",
    linkLabel: "Watch on YouTube",
    trackTitle: "Navigating Autonomy",
  },
  {
    type: "YouTube Series",
    typeColor: "bg-cream-100 text-ink-700",
    title: "AI Prototyping for Product Managers",
    venue: "YouTube playlist",
    detail:
      "A series of recordings covering how product managers can apply AI tools for rapid hypothesis validation, data visualisation, and lightweight prototyping.",
    link: "https://www.youtube.com/playlist?list=PLUFVOl7WhQovfwvTaNRraW_Ox0iCZ0IbN",
    linkLabel: "View playlist",
    trackTitle: "AI Prototyping Series",
  },
];

export default function Research() {
  return (
    <section id="research" className="bg-cream-50 py-28 md:py-36">
      <div className="max-w-site mx-auto px-6">
        <AnimateIn>
          <p className="section-label mb-4">03 · Research &amp; IP</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            Research, patents &amp;<br className="hidden md:block" /> intellectual output
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-16">
            A US patent, two peer-reviewed publications at international conferences,
            and a track record of turning research into shipped product.
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
                    <div className="flex items-center gap-2 mb-3">
                      {item.logo && (
                        <img
                          src={item.logo.src}
                          alt={item.logo.alt}
                          className="w-5 h-5 object-contain grayscale opacity-50 shrink-0"
                        />
                      )}
                      <p className="text-xs font-mono text-ink-300 tracking-wide">
                        {item.venue}
                      </p>
                    </div>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.detail}</p>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent(EVENTS.RESEARCH_ITEM_CLICKED, item.trackProps)
                    }
                    className="shrink-0 flex items-center gap-2 text-xs font-medium text-copper-500 hover:text-copper-700 border border-copper-200 hover:border-copper-500 px-4 py-2 rounded-full transition-all duration-200 min-h-[44px]"
                  >
                    {item.linkLabel}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </a>
                </div>
                {item.photos && item.photos.length > 0 && (
                  <PhotoStrip photos={item.photos} />
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Credential summary */}
        <AnimateIn delay={100}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "1",  label: "US patent" },
              { number: "2",  label: "Peer-reviewed papers" },
              { number: "2",  label: "International conferences" },
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

        {/* Speaking & Teaching */}
        <AnimateIn>
          <h3 className="font-display font-semibold text-2xl text-ink-900 mb-6 mt-14">
            Speaking &amp; Teaching
          </h3>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SPEAKING_ITEMS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <div className="p-7 rounded-2xl bg-white border border-cream-200 card-lift flex flex-col h-full">
                <div className="flex flex-wrap items-start gap-4 justify-between mb-auto">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${item.typeColor}`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-ink-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-ink-300 tracking-wide mb-3">
                      {item.venue}
                    </p>
                    <p className="text-sm text-ink-500 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent(EVENTS.RESEARCH_SPEAKING_CLICKED, {
                        title: item.trackTitle,
                      })
                    }
                    className="inline-flex items-center gap-2 text-xs font-medium text-copper-500 hover:text-copper-700 border border-copper-200 hover:border-copper-500 px-4 py-2 rounded-full transition-all duration-200 min-h-[44px]"
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
