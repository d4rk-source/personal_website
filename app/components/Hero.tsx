"use client";

import Link from "next/link";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onRequestQuote: () => void;
  onRequestThreatModel: () => void;
}

export default function Hero({
  onScrollToSection,
  onRequestQuote,
  onRequestThreatModel,
}: HeroProps) {
  return (
    <section className="px-4 py-10 sm:py-14 md:py-32 max-w-7xl mx-auto">
      {/* Main Headline */}
      <div className="mb-10 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 md:mb-8 max-w-4xl">
          Fast Smart Contract{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Security Reviews
          </span>
          <br />
          Get Security Right. Affordably.
        </h1>
      </div>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-8 md:mb-12 leading-relaxed">
        Launch with confidence. I provide quick, practical smart contract
        security reviews designed to catch real vulnerabilities before they
        become expensive problems. Ideal for teams building gambling dApps,
        GameFi mechanics, prediction markets, casinos, sportsbooks, and Web3
        gaming projects ready to move fast.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-5">
        <button
          onClick={onRequestQuote}
          className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors w-full md:w-auto"
        >
          Request a Security Review
        </button>
        <button
          onClick={onRequestThreatModel}
          className="border border-gray-500 bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-900 transition-colors w-full md:w-auto"
        >
          Request a FREE Threat Model
        </button>
      </div>

      <div className="mb-12">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 hover:text-cyan-300 transition-colors"
        >
          <span>Got questions?</span>
          <span className="underline decoration-gray-600 underline-offset-4">
            Contact me
          </span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
