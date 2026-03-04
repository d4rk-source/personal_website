export default function Audits() {
  const audits = [
    {
      name: "Protocol Alpha",
      pro_bono: false,
      type: "Smart Contract Audit",
      date: "January 2026",
      status: "Completed",
      issues_found: 12,
    },
  ];

  return (
    <section
      id="audits"
      className="px-4 py-20 max-w-7xl mx-auto border-t border-gray-800 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">My Past Audits</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audits.map((audit, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-lg border border-gray-800 hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">{audit.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                {audit.pro_bono && (
                  <span className="text-sm bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                    Pro Bono
                  </span>
                )}
                <span className="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                  {audit.type}
                </span>
              </div>
            </div>

            <div className="text-gray-400 text-sm space-y-2 mb-4">
              <p>
                <span className="text-gray-500">Date:</span> {audit.date}
              </p>
              <p>
                <span className="text-gray-500">Status:</span>{" "}
                <span className="text-green-400">{audit.status}</span>
              </p>
              <p>
                <span className="text-gray-500">Issues Found:</span>{" "}
                {audit.issues_found}
              </p>
            </div>

            <a
              href="#"
              className="text-blue-400 font-semibold hover:text-blue-300 text-sm"
            >
              View Report →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
