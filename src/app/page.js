

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import FocusState from "../components/FocusState";
import FocusStateTimeline from "../components/FocusStateTimeline";
import TestimonialCarousel from "../components/TestimonialCarousel";
import CollaborationSection from "../components/CollaborationSection";
import TestimonialWide from "../components/TestimonialWide";
import FAQSection from "../components/FAQSection";
import QuoteCTA from "../components/QuoteCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: 80 }}>
        <Hero />
        <About />
        <Experience />
        <FocusState />
        <FocusStateTimeline />
        <TestimonialCarousel />
        <CollaborationSection />
        <TestimonialWide />
        <FAQSection />
        <QuoteCTA />
      </main>
    </>
  );
}
