"use client";

import React, { useState, useEffect } from "react";
import PricingPopup from "./pricing_methodology_popups/PricingPopup";
import MethodologyPopup from "./pricing_methodology_popups/MethodologyPopup";

interface SecurityConsultationsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow?: () => void;
}

export default function SecurityConsultationsPopup({
  isOpen,
  onClose,
  onBookNow,
}: SecurityConsultationsPopupProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    // Close side panels first
    setIsPricingOpen(false);
    setIsMethodologyOpen(false);
    // Then close main popup after side panels animate out
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoomOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.95);
          }
        }

        .backdrop {
          animation: ${isClosing ? "fadeOut" : "fadeIn"} 0.3s ease-out;
          animation-fill-mode: both;
        }

        .modal {
          animation: ${isClosing ? "zoomOut" : "zoomIn"} 0.3s ease-out;
          animation-fill-mode: both;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="backdrop fixed inset-0 bg-black bg-opacity-70 z-40"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pt-24 overflow-y-auto">
        <div className="modal relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-auto">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            aria-label="Close popup"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Protocol Security Strategy & Incident Response
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4 text-gray-300">
              <p>
                This isn't just a quick consultation—it's a comprehensive
                security partnership. I dive deep into your protocol, thoroughly
                analyze all past audit reports, and do my homework to provide
                actionable, strategic guidance tailored to your specific needs.
              </p>

              <p>What you get:</p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Comprehensive Past Audit Analysis</strong> - I
                    review all your previous audit reports to understand your
                    protocol's security history and recurring patterns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Full Security Roadmap</strong> - Strategic timing
                    for audit competitions, bug bounty program recommendations,
                    audit frequency planning, and comprehensive security
                    milestones
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Optional Post-Incident Response Strategy</strong> -
                    Step-by-step incident response planning, communication
                    protocols, and recovery procedures
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Detailed Written Reports</strong> - One or two
                    comprehensive strategy documents depending on your package
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Consultation Call Included</strong> - Get on a call
                    with me to walk through recommendations, ask questions, and
                    receive ongoing support
                  </span>
                </li>
              </ul>

              <p className="text-gray-400 pt-2">
                Choose between a security-focused strategy, a post-incident
                response plan, or both. Every package includes my full
                commitment to understanding your protocol and providing the
                strategic security guidance you need to protect your users and
                assets.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
              <button
                onClick={() => setIsPricingOpen(!isPricingOpen)}
                className={`flex-1 px-6 py-3 text-white border rounded-lg transition-all font-semibold ${
                  isPricingOpen
                    ? "bg-gray-700 border-cyan-500"
                    : "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600"
                }`}
              >
                Pricing
              </button>

              <button
                onClick={() => setIsMethodologyOpen(!isMethodologyOpen)}
                className={`flex-1 px-6 py-3 text-white border rounded-lg transition-all font-semibold ${
                  isMethodologyOpen
                    ? "bg-gray-700 border-cyan-500"
                    : "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600"
                }`}
              >
                Methodology
              </button>

              <button
                onClick={() => {
                  handleClose();
                  onBookNow?.();
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <PricingPopup
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        serviceType="Protocol Security Strategy & Incident Response"
      />
      <MethodologyPopup
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
        serviceType="Protocol Security Strategy & Incident Response"
      />
    </>
  );
}
