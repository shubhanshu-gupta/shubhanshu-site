import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Build from "@/components/Build";
import Research from "@/components/Research";
import Writing from "@/components/Writing";
import Personal from "@/components/Personal";
import { OpenCTA, Footer } from "@/components/CtaAndFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Build />
        <Research />
        <Writing />
        <Personal />
        <OpenCTA />
      </main>
      <Footer />
    </>
  );
}
