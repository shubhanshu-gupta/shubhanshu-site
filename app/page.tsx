import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Build from "@/components/Build";
import Research from "@/components/Research";
import Writing from "@/components/Writing";
import Personal from "@/components/Personal";
import { OpenCTA, Footer } from "@/components/CtaAndFooter";
import { getAllPosts } from "@/lib/posts";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://shubhanshugupta.com/#profilepage",
      "url": "https://shubhanshugupta.com",
      "name": "Shubhanshu Gupta — VP Product Manager, Payments & Fintech, Singapore",
      "description":
        "Personal website of Shubhanshu Gupta, VP of Product Management at Citibank Singapore. Expert in cross-border payments, instant payment rails, AI-native fintech products, ISO 20022, and regulatory product design.",
      "mainEntity": { "@id": "https://shubhanshugupta.com/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://shubhanshugupta.com/#person",
      "name": "Shubhanshu Gupta",
      "givenName": "Shubhanshu",
      "familyName": "Gupta",
      "jobTitle": "VP, Product Management",
      "description":
        "VP Product Manager at Citibank Singapore with 9+ years of experience building and shipping payments products. Specialist in cross-border payments, instant payment rails (IMPS, FAST, FPS, PromptPay, RTR), FX pricing, ISO 20022 migration, and AI-native fintech products. Founder of Stablecoin Atlas and Feelfit.",
      "url": "https://shubhanshugupta.com",
      "image": "https://shubhanshugupta.com/og-image.png",
      "worksFor": {
        "@type": "Organization",
        "name": "Citibank",
        "url": "https://www.citibank.com",
        "sameAs": "https://www.wikidata.org/wiki/Q326907",
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "National University of Singapore",
          "sameAs": "https://www.nus.edu.sg",
        },
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Singapore",
        "addressCountry": "SG",
      },
      "knowsAbout": [
        "Cross-border Payments",
        "Instant Payment Rails",
        "FX Pricing",
        "Product Management",
        "Fintech",
        "ISO 20022",
        "Stablecoins",
        "AI Products",
        "Regulatory Product Design",
        "Digital Banking",
        "Consumer Fintech",
        "IMPS",
        "FAST Singapore",
        "FPS UK",
        "PromptPay",
        "RTR Canada",
      ],
      "sameAs": [
        "https://www.linkedin.com/in/shubhanshugupta93/",
        "https://twitter.com/Shubhanshugupta",
        "https://stablecoinatlas.app",
      ],
      "founder": [
        {
          "@type": "Organization",
          "name": "Stablecoin Atlas",
          "url": "https://stablecoinatlas.app",
        },
        {
          "@type": "Organization",
          "name": "Feelfit",
          "url": "https://feelfit.app",
        },
      ],
    },
  ],
};

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <>
      {/* JSON-LD structured data for search engines & AI indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Nav />
      <main>
        <Hero />
        <Work />
        <Build />
        <Research />
        <Writing recentPosts={recentPosts} />
        <Personal />
        <OpenCTA />
      </main>
      <Footer />
    </>
  );
}
