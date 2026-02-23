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

      {/* Trusted By Section */}
      <div className="mt-32 pt-20 border-t border-gray-800">
        <p className="text-gray-400 mb-8 text-center">Trusted by leading Web3 companies</p>
        <div className="relative overflow-hidden">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee {
              display: flex;
              animation: scroll 20s linear infinite;
            }
            .marquee:hover {
              animation-play-state: paused;
            }
            .marquee-item {
              min-width: 200px;
              padding: 0 40px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>
          <div className="marquee">
            {["Uniswap", "Aave", "OpenZeppelin", "Curve", "Lido", "MakerDAO", "Compound", "Yearn"].map((firm, i) => (
              <div key={i} className="marquee-item">
                <span className="text-gray-300 font-semibold whitespace-nowrap">{firm}</span>
              </div>
            ))}
            {["Uniswap", "Aave", "OpenZeppelin", "Curve", "Lido", "MakerDAO", "Compound", "Yearn"].map((firm, i) => (
              <div key={`repeat-${i}`} className="marquee-item">
                <span className="text-gray-300 font-semibold whitespace-nowrap">{firm}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
