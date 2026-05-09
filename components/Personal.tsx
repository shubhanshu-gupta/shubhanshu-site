import AnimateIn from "./AnimateIn";

const TILES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L4 7v5c0 5.25 3.5 10.15 8 11.35C16.5 22.15 20 17.25 20 12V7l-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Teaching",
    body: "Volunteer tutor with Code in the Community (Saturday Kids × Google). Founded and ran my own computer science Scratch bootcamp. Teaching is how I think — explaining something clearly is the test of whether I actually understand it.",
    link: { label: "About the bootcamp", url: "https://shubhanshugupta.com/scratch-bootcamp/" },
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Mentoring",
    body: "I mentor students and early-career professionals on career progression, university applications, life in Singapore, and transitioning into product. Open booking via Setmore — no cost, no agenda.",
    link: { label: "Book a session", url: "https://shubhanshugupta.setmore.com" },
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h18M3 6h18M3 18h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Books",
    body: "Currently reading across startup war stories, macroeconomics, and financial history. Recent reads include The Hard Thing About Hard Things and The Money Trap — both essential for anyone building or working inside financial infrastructure.",
    link: { label: "See my list", url: "https://shubhanshugupta.com/books/" },
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Food & Travel",
    body: "Singapore-based but frequently on the move across Asia. An appreciation for Japanese baking culture led to one particularly memorable souffle cheesecake in Osaka. Food is how I experience places — not restaurants so much as the specific thing a place does that nowhere else does.",
    link: { label: "Food notes", url: "https://shubhanshugupta.com/food/" },
  },
];

export default function Personal() {
  return (
    <section id="personal" className="bg-cream-50 py-28 md:py-36">
      <div className="max-w-site mx-auto px-6">
        <AnimateIn>
          <p className="section-label mb-4">05 · Beyond the work</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink-900 ruled-heading mb-6">
            There&apos;s a person<br className="hidden md:block" /> behind the PM
          </h2>
          <p className="text-ink-500 text-lg leading-relaxed max-w-2xl mb-16">
            I grew up curious about how things work — systems, people, ideas. That
            curiosity drives everything: the products I build, the classes I teach, the
            places I go to eat.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TILES.map((tile, i) => (
            <AnimateIn key={tile.title} delay={i * 80}>
              <div className="p-7 rounded-2xl bg-white border border-cream-200 card-lift flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-ink-700 mb-5">
                  {tile.icon}
                </div>
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-3">
                  {tile.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-5">
                  {tile.body}
                </p>
                <a
                  href={tile.link.url}
                  target={tile.link.url.startsWith("http") ? "_blank" : undefined}
                  rel={tile.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-500 hover:text-copper-700 transition-colors"
                >
                  {tile.link.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
