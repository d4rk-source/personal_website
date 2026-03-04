"use client";

import { useState } from "react";
import SmartContractAuditPopup from "./popups/services-popups/SmartContractAuditPopup";
import AuditReadinessPopup from "./popups/services-popups/AuditReadinessPopup";
import SecurityConsultationsPopup from "./popups/services-popups/SecurityConsultationsPopup";
import RequestQuotePopup from "./popups/hero_nav-popups/RequestQuotePopup";

export default function Services() {
  const [isAuditPopupOpen, setIsAuditPopupOpen] = useState(false);
  const [isReadinessPopupOpen, setIsReadinessPopupOpen] = useState(false);
  const [isSecurityPopupOpen, setIsSecurityPopupOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>();

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

  const handleBookNow = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsQuotePopupOpen(true);
  };

  return (
    <section
      id="services"
      className="px-4 py-20 max-w-7xl mx-auto border-t border-gray-800 scroll-mt-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">My Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-6">{service.description}</p>
            {service.title === "Smart Contract Auditing" ? (
              <button
                onClick={() => setIsAuditPopupOpen(true)}
                className="text-blue-400 font-semibold hover:text-blue-300"
              >
                Learn More →
              </button>
            ) : service.title === "Audit Readiness & Competition Prep" ? (
              <button
                onClick={() => setIsReadinessPopupOpen(true)}
                className="text-blue-400 font-semibold hover:text-blue-300"
              >
                Learn More →
              </button>
            ) : (
              <button
                onClick={() => setIsSecurityPopupOpen(true)}
                className="text-blue-400 font-semibold hover:text-blue-300"
              >
                Learn More →
              </button>
            )}
          </div>
        ))}
      </div>

      <SmartContractAuditPopup
        isOpen={isAuditPopupOpen}
        onClose={() => setIsAuditPopupOpen(false)}
        onBookNow={() => handleBookNow("Smart Contract Auditing")}
      />
      <AuditReadinessPopup
        isOpen={isReadinessPopupOpen}
        onClose={() => setIsReadinessPopupOpen(false)}
        onBookNow={() => handleBookNow("Audit Readiness & Competition Prep")}
      />
      <SecurityConsultationsPopup
        isOpen={isSecurityPopupOpen}
        onClose={() => setIsSecurityPopupOpen(false)}
        onBookNow={() => handleBookNow("Smart Contract Security Consultations")}
      />
      <RequestQuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
        preselectedService={selectedService}
      />
    </section>
  );
}
