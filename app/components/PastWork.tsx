export default function PastWork() {
  const pastWork = [
    {
      title: "Traditional Cybersecurity",
      description:
        "Started my security journey in traditional cybersecurity before transitioning to blockchain. Experience in penetration testing, network security, and vulnerability assessment across enterprise systems.",
      icon: "🛡️",
      link: undefined,
    },
    {
      title: "CTF Creator & Participant",
      description:
        "Created an auditor's playground Capture The Flag (CTF) for the security community. I actively participate in CTF competitions, regularly solving complex security challenges.",
      icon: "🚩",
      link: "https://github.com/d4rk-source/Never-Poor-Again", // Add your CTF link here
    },
    {
      title: "Code4rena Winnings",
      description:
        "Active security researcher on Code4rena, identifying medium-severity vulnerabilities in protocols. Secured payouts through bug hunting and contest participation.",
      icon: "🏆",
      link: "https://code4rena.com/@Alex_Cipher", // Add your Code4rena profile link here
    },
    {
      title: "DiceFate (Local Gambling dApp)",
      description:
        "Built DiceFate, a local-only gambling dApp, to deepen my understanding of gambling protocol development and strengthen my knowledge of gambling-specific risks and vulnerabilities.",
      icon: "🎲",
      link: "https://github.com/d4rk-source/DiceFate",
    },
  ];

  return (
    <section
      id="past-work"
      className="px-4 py-12 md:py-20 max-w-7xl mx-auto border-t border-gray-800 scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-16">
        Related Past Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
        {pastWork.map((work) => (
          <div
            key={work.title}
            className="bg-gradient-to-br from-gray-900 to-gray-950 p-5 sm:p-6 md:p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <div className="text-4xl mb-4">{work.icon}</div>
            <h3 className="text-xl font-bold mb-4">{work.title}</h3>
            <p className="text-gray-400 mb-4">{work.description}</p>
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                View Details →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
