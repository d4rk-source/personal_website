"use client";

import React, { useState, useEffect } from "react";

interface AuditReadinessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditReadinessPopup({
  isOpen,
  onClose,
}: AuditReadinessPopupProps) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
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
                Audit Readiness & Competition Prep
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4 text-gray-300">
              <p>
                Prepare your protocol for success in competitive audits and bug
                bounty programs. Our readiness services identify and eliminate
                vulnerabilities before official audit submission, significantly
                improving your chances of a successful audit outcome.
              </p>

              <p>Our audit readiness program includes:</p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Pre-Audit Vulnerability Scanning</strong> - Identify
                    security issues before they reach auditors
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Bug Bounty Preparation</strong> - Fortify contracts
                    against common attack vectors
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Contest Optimization</strong> - Focus on audit
                    competition winning strategies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Code Review & Fixes</strong> - Remediate identified
                    issues with expert guidance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Audit Timing Consultation</strong> - Strategic
                    advice on when to initiate formal audits
                  </span>
                </li>
              </ul>

              <p className="text-gray-400 pt-2">
                Our team works closely with you to strengthen your contracts and
                maximize your probability of passing high-quality security
                reviews with flying colors.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-700">
              <button
                onClick={() => {
                  onClose();
                }}
                className="flex-1 px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all font-semibold"
              >
                Pricing
              </button>

              <button
                onClick={() => {
                  onClose();
                }}
                className="flex-1 px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all font-semibold"
              >
                Methodology
              </button>

              <button
                onClick={() => {
                  onClose();
                }}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all font-semibold"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
