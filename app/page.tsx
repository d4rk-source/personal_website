"use client";

import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import RequestQuotePopup from "./components/popups/hero_nav-popups/RequestQuotePopup";
import Services from "./components/Services";
import Audits from "./components/Audits";
import Vouches from "./components/Vouches";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation
        onScrollToSection={scrollToSection}
        onRequestQuote={() => setIsQuotePopupOpen(true)}
      />
      <Hero
        onScrollToSection={scrollToSection}
        onRequestQuote={() => setIsQuotePopupOpen(true)}
      />
      <Vouches />
      <Services />
      <Audits />
      <About />
      <Footer />

      <RequestQuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
      />
    </div>
  );
}
