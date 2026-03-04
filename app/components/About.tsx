export default function About() {
  const skills = [
    {
      title: "Smart Contracts",
      description: "Solidity, Vyper",
      color: "blue",
    },
    {
      title: "Security Analysis",
      description: "Vulnerability Detection, Code Review",
      color: "cyan",
    },
    {
      title: "Blockchain",
      description: "EVM chains, DeFi & Gambling dApps",
      color: "blue",
    },
    {
      title: "Consultations",
      description: "Architecture Design, Security Roadmaps",
      color: "cyan",
    },
  ];

  return (
    <section
      id="about"
      className="px-4 py-20 max-w-7xl mx-auto border-t border-gray-800 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-72 h-96 sm:w-80 sm:h-[28rem] md:w-96 md:h-[30rem] rounded-lg border-2 border-gray-800 overflow-hidden bg-gray-900">
            <img
              src="/profile.jpg"
              alt="Alex Cipher"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi! I'm Alex Cipher, a blockchain security expert with 1+ years of
            experience in smart contract auditing and Web3 security. I've
            dedicated my career to helping projects build secure, reliable, and
            investor-ready protocols.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise spans across EVM-compatible blockchains including
            Ethereum, Polygon, and many others. I specialize in DeFi protocols
            (lending, DEX, staking) and crypto gambling dApps, identifying
            complex vulnerabilities, architectural weaknesses, business logic
            flaws, and gas optimizations that protect digital assets.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Beyond auditing, I'm passionate about mentoring developers,
            publishing security research, and staying at the forefront of Web3
            security trends. When I'm not reviewing code, you can find me
            contributing to the blockchain security community.
          </p>

          <div className="pt-6 space-y-4">
            <h3 className="text-xl font-semibold">Key Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="bg-gray-900/50 p-4 rounded-lg border border-gray-800"
                >
                  <p
                    className={`font-semibold ${
                      skill.color === "blue" ? "text-blue-400" : "text-cyan-400"
                    }`}
                  >
                    {skill.title}
                  </p>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
