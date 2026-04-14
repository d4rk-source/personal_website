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
        "I'll conduct a thorough review, double-checking every line to boost your smart contract's security.",
    },
    {
      title: "Audit Readiness & Competition Prep",
      description:
        "Get your protocol audit-ready for bug bounties and audit contests. I help identify and resolve vulnerabilities before submission, maximizing your chances of success.",
    },
    {
      title: "Protocol Security Strategy & Incident Response",
      description:
        "Comprehensive security planning with in-depth analysis of past audits, strategic roadmaps for securing your protocol, and optional post-incident response strategies. Includes detailed reports and consultation calls.",
    },
  ];

  const handleBookNow = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsQuotePopupOpen(true);
  };

  return (
    <section
      id="services"
      className="relative px-4 py-12 md:py-20 max-w-7xl mx-auto border-t border-gray-800 scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-16">
        My Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gradient-to-br from-gray-900 to-gray-950 p-5 sm:p-6 md:p-8 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">
              {service.title}
            </h3>
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

      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        <a
          href="https://github.com/d4rk-source/My_services_showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 hover:text-gray-400 transition-colors"
        >
          Want to see how my services help your dApp? →
        </a>
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
        onBookNow={() =>
          handleBookNow("Protocol Security Strategy & Incident Response")
        }
      />
      <RequestQuotePopup
        isOpen={isQuotePopupOpen}
        onClose={() => setIsQuotePopupOpen(false)}
        preselectedService={selectedService}
      />
    </section>
  );
}
