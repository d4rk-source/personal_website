"use client";

import { useState } from "react";
import Logo from "./Logo";
import SmartContractAuditPopup from "./popups/services-popups/SmartContractAuditPopup";
import AuditReadinessPopup from "./popups/services-popups/AuditReadinessPopup";
import SecurityConsultationsPopup from "./popups/services-popups/SecurityConsultationsPopup";
import RequestQuotePopup from "./popups/hero_nav-popups/RequestQuotePopup";

export default function Footer() {
  const [isAuditPopupOpen, setIsAuditPopupOpen] = useState(false);
  const [isReadinessPopupOpen, setIsReadinessPopupOpen] = useState(false);
  const [isSecurityPopupOpen, setIsSecurityPopupOpen] = useState(false);
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>();

  const handleBookNow = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsQuotePopupOpen(true);
  };

  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-20">
      <div className="px-4 py-16 max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo variant="static" showName />
            </div>
            <p className="text-gray-400 text-sm">
              Defending Web3 with expert smart contract security audits and
              consultations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button
                  onClick={() => setIsAuditPopupOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Smart Contract Auditing
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsReadinessPopupOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Audit Readiness & Competition Prep
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsSecurityPopupOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Protocol Security Strategy & Incident Response
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="/blogs" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#audits"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("audits");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Security Reports
                </a>
              </li>
              <li>
                <a
                  href="/affiliates"
                  className="hover:text-white transition-colors"
                >
                  Affiliate Program
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:hello@alexcipher.com"
                  className="hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/_Alex_Cipher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Twitter (X)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/d4rk-source"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; 2026 Alex Cipher. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Popups */}
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
    </footer>
  );
}
