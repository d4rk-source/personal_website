"use client";

import { useState } from "react";
import SecurityReviewPopup from "./popups/services-popups/SecurityReviewPopup";
import RequestQuotePopup from "./popups/hero_nav-popups/RequestQuotePopup";

export default function Services() {
  const [isSecurityReviewPopupOpen, setIsSecurityReviewPopupOpen] =
    useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);

  const handleBookNow = () => {
    setIsSecurityReviewPopupOpen(false);
    setIsQuotePopupOpen(true);
  };

  return (
    <section
      id="services"
      className="relative px-4 py-12 md:py-20 max-w-7xl mx-auto border-t border-gray-800 scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-16">
        My Service
      </h2>

      <div className="max-w-3xl">
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-5 sm:p-6 md:p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">
            Fast Smart Contract Security Reviews
          </h3>
          <p className="text-gray-400 mb-2">
            <span className="font-semibold text-cyan-400">
              Starting at $100
            </span>
          </p>
          <p className="text-gray-400 mb-6">
            Quick, practical security reviews designed for teams ready to
            launch. I'll catch real vulnerabilities in your code before they
            become costly problems. Perfect for DeFi protocols, gambling dApps,
            tokens, and any Web3 project that needs security done right—without
            the enterprise audit price tag.
          </p>
          <button
            onClick={() => setIsSecurityReviewPopupOpen(true)}
            className="text-blue-400 font-semibold hover:text-blue-300"
          >
            Learn More →
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        <a
          href="https://github.com/d4rk-source/My_services_showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
        >
          See real audit examples →
        </a>
      </div>

      <SecurityReviewPopup
        isOpen={isSecurityReviewPopupOpen}
        onClose={() => setIsSecurityReviewPopupOpen(false)}
        onBookNow={handleBookNow}
      />
      <RequestQuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
        preselectedService="Fast Smart Contract Security Reviews"
      />
    </section>
  );
}
