export default function Services() {
  const services = [
    {
      title: "Smart Contract Auditing",
      description:
        "We'll have our lead auditor conduct a thorough review, double-checking every line to boost your smart contract's security.",
    },
    {
      title: "Audit Readiness & Competition Prep",
      description:
        "Get your protocol audit-ready for bug bounties and audit contests. We help identify and resolve vulnerabilities before submission, maximizing your chances of success.",
    },
    {
      title: "Smart Contract Security Consultations",
      description:
        "Get expert guidance on security best practices, architecture reviews, and ongoing security strategy for your Web3 project.",
    },
  ];

  return (
    <section id="services" className="px-4 py-20 max-w-7xl mx-auto border-t border-gray-800 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">My Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-6">{service.description}</p>
            <a href="#" className="text-blue-400 font-semibold hover:text-blue-300">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
