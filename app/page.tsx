"use client";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Audits from "./components/Audits";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation onScrollToSection={scrollToSection} />
      <Hero />
      <Services />
      <Audits />
      <About />
      <Footer />
    </div>
  );
}
