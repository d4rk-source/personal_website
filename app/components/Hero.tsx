"use client";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onRequestQuote: () => void;
}

export default function Hero({ onScrollToSection, onRequestQuote }: HeroProps) {
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
        become expensive problems. Ideal for teams building DeFi protocols,
        gambling dApps, tokens, and Web3 projects ready to move fast.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 md:mb-10">
        <button
          onClick={onRequestQuote}
          className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors w-full md:w-auto"
        >
          Request a Quote
        </button>
        <button
          onClick={() => onScrollToSection("services")}
          className="border border-gray-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-900 transition-colors w-full md:w-auto"
        >
          Learn More
        </button>
      </div>

      {/* Tagline */}
      <p className="text-gray-400 mb-12">I respond within 24 hours</p>
    </section>
  );
}
