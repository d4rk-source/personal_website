"use client";

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import RequestQuotePopup from "./components/popups/hero_nav-popups/RequestQuotePopup";
import Services from "./components/Services";
import Audits from "./components/Audits";
import Vouches from "./components/Vouches";
import About from "./components/About";
import PastWork from "./components/PastWork";
import Footer from "./components/Footer";

export default function Home() {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTarget = params.get("scrollTo");
    const hashTarget = window.location.hash.replace("#", "");
    const targetId = scrollTarget || hashTarget;

    if (!targetId) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (scrollTarget) {
        params.delete("scrollTo");
        const query = params.toString();
        const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
        window.history.replaceState({}, "", nextUrl);
      }
    }, 120);

    return () => clearTimeout(timer);
  }, []);

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
      {/* <Vouches /> */}
      <Services />
      <Audits />
      <About />
      <PastWork />
      <Footer />
      <RequestQuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
      />
    </div>
  );
}
