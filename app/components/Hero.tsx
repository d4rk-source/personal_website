export default function Hero() {
  return (
    <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto">
      {/* Main Headline */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8 max-w-4xl">
          Defending Web3 with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Smart Contract Audits
          </span>
          <br />
          DApp Audits · Penetration Testing · Vigilant Squad
        </h1>
      </div>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
        Join 1500+ clients who trust us, one of the leading blockchain security
        audit companies for expert Web3 security audits that protect smart
        contracts, DeFi apps, and infrastructure, making them resilient,
        investor-ready, and fully secure.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mb-20">
        <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors w-full md:w-auto">
          Request a Quote
        </button>
        <button className="border border-gray-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors w-full md:w-auto">
          Learn More
        </button>
      </div>

      {/* Tagline */}
      <p className="text-gray-400 mb-12">
        We respond within 24 hours
      </p>
    </section>
  );
}
