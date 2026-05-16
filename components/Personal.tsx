"use client";
import AnimateIn from "./AnimateIn";
import { trackEvent, EVENTS } from "@/lib/analytics";

// ── PhotoStrip ─────────────────────────────────────────────────────────────
// Horizontal row of images; greyscale at rest, full colour on hover.
function PhotoStrip({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <div className="flex gap-2 mt-5">
      {photos.map((photo, i) => (
        <div key={i} className="flex-1 relative h-28 overflow-hidden rounded-xl">
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

const TILES: {
  icon: React.ReactNode;
  title: string;
  body: string;
  links: { label: string; url: string; trackLabel: string }[];
  tile: string;
  photos?: { src: string; alt: string }[];
}[] = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="36" height="26" rx="2" stroke="#1A1916" strokeWidth="1.2" />
        <line x1="14" y1="34" x2="12" y2="42" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="34" y1="34" x2="36" y2="42" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="10" y1="42" x2="38" y2="42" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="24" cy="21" r="5" stroke="#C87D36" strokeWidth="1.2" />
        <line x1="24" y1="13" x2="24" y2="16" stroke="#C87D36" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="24" y1="26" x2="24" y2="29" stroke="#C87D36" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="16" y1="21" x2="19" y2="21" stroke="#C87D36" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="29" y1="21" x2="32" y2="21" stroke="#C87D36" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Teaching",
    body: "Volunteer tutor with Code in the Community (Saturday Kids × Google). Founded and ran my own computer science Scratch bootcamp — turning a library corner into a classroom for 8–10 year olds who'd never written a line of code. Teaching is how I think: if I can't explain it simply, I don't understand it well enough.",
    links: [
      { label: "About the bootcamp", url: "/blog/scratch-bootcamp", trackLabel: "about_bootcamp" },
      { label: "View the YouTube series →", url: "https://www.youtube.com/playlist?list=PLUFVOl7WhQovfwvTaNRraW_Ox0iCZ0IbN", trackLabel: "youtube_series" },
    ],
    tile: "teaching",
    photos: [
      {
        src: "/images/posts/scratch-bootcamp/Photo3-1024x768.jpg",
        alt: "Teaching kids to code at Scratch bootcamp",
      },
    ],
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="26" height="18" rx="4" stroke="#1A1916" strokeWidth="1.2" />
        <path d="M10 26l-3 5 7-3" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="20" width="26" height="18" rx="4" stroke="#C87D36" strokeWidth="1.2" />
        <path d="M38 38l3 5-7-3" stroke="#C87D36" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Mentoring",
    body: "I mentor students and early-career professionals on career progression, university applications, life in Singapore, and transitioning into product. Open booking via Setmore — no cost, no agenda.",
    links: [
      { label: "Book a session", url: "https://shubhanshugupta.setmore.com", trackLabel: "book_session" },
      { label: "Read about my mentoring experience →", url: "/blog/evaluating-effectiveness-of-mentorship", trackLabel: "mentoring_blog" },
    ],
    tile: "mentoring",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 38V12" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M24 12C24 12 16 8 8 10v26c8-2 16 2 16 2" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 12C24 12 32 8 40 10v26c-8-2-16 2-16 2" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 8v12l-3-3-3 3V8h6z" stroke="#C87D36" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    title: "Books",
    body: "Currently reading across startup war stories, macroeconomics, and financial history. Recent reads include The Hard Thing About Hard Things and The Money Trap — both essential for anyone building or working inside financial infrastructure.",
    links: [
      { label: "See my reading notes", url: "/blog?category=books", trackLabel: "reading_notes" },
    ],
    tile: "books",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="#1A1916" strokeWidth="1.2" />
        <circle cx="24" cy="24" r="2" stroke="#C87D36" strokeWidth="1.2" />
        <path d="M24 8v8" stroke="#C87D36" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M21 12l3-4 3 4" stroke="#C87D36" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M24 40v-8" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M40 24h-8" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M8 24h8" stroke="#1A1916" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Food & Travel",
    body: "Singapore-based, frequently across Asia. An appreciation for craft food culture led to one particularly memorable soufflé cheesecake in Osaka — the kind that only that specific counter, in that specific basement, does. Food is how I understand places. Not restaurants so much as the specific thing a city has decided to be very serious about.",
    links: [
      { label: "Food notes", url: "/blog?category=food", trackLabel: "food_notes" },
    ],
    tile: "food_travel",
    photos: [
      {
        src: "/images/posts/Food 1.jpeg",
        alt: "Food & travel — Shubhanshu Gupta",
      },
      {
        src: "/images/posts/Food 2.jpeg",
        alt: "Food & travel — Shubhanshu Gupta",
      },
    ],
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
                <div className="mb-5">{tile.icon}</div>
                <h3 className="font-display font-semibold text-xl text-ink-900 mb-3">
                  {tile.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-5">
                  {tile.body}
                </p>
                <div className="flex flex-col gap-2">
                  {tile.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target={link.url.startsWith("http") ? "_blank" : undefined}
                      rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() =>
                        trackEvent(EVENTS.PERSONAL_LINK_CLICKED, {
                          tile: tile.tile,
                          label: link.trackLabel,
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-copper-500 hover:text-copper-700 transition-colors min-h-[44px]"
                    >
                      {link.label}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  ))}
                </div>
                {tile.photos && tile.photos.length > 0 && (
                  <PhotoStrip photos={tile.photos} />
                )}
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
