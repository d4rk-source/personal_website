"use client";

import React, { useState, useEffect } from "react";
import PricingPopup from "./pricing_methodology_popups/PricingPopup";
import MethodologyPopup from "./pricing_methodology_popups/MethodologyPopup";

interface SmartContractAuditPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow?: () => void;
}

export default function SmartContractAuditPopup({
  isOpen,
  onClose,
  onBookNow,
}: SmartContractAuditPopupProps) {
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
        className="backdrop fixed inset-x-0 bottom-0 top-[65px] md:top-[89px] bg-black bg-opacity-70 z-[90]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-x-0 bottom-0 top-[65px] md:top-[89px] flex items-center justify-center z-[95] p-4 pt-8 md:pt-16 overflow-y-auto"
        onClick={handleClose}
      >
        <div
          className="modal relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 md:top-6 right-6 text-gray-400 hover:text-white transition-colors"
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
          <div className="p-5 sm:p-6 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Smart Contract Auditing
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4 text-gray-300">
              <p>
                Smart contract auditing is a comprehensive security review
                process that meticulously examines your blockchain code for
                vulnerabilities, inefficiencies, and potential exploits.
              </p>

              <p>My audit includes:</p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Static Analysis</strong> - In-depth code review and
                    automated security scanning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Dynamic Testing</strong> - Functional and gas
                    optimization testing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Vulnerability Assessment</strong> - Identification
                    of bugs and security risks
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Detailed Report</strong> - Comprehensive findings
                    with remediation recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Post-Audit Support</strong> - Guidance on fixing
                    identified issues
                  </span>
                </li>
              </ul>

              <p className="text-gray-400 pt-2">
                Whether you're launching a DeFi protocol (lending, staking,
                swapping), gambling dApp, token, or any other smart contract
                project, my auditing services ensure your contracts are secure,
                efficient, and ready for production.
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
        serviceType="Smart Contract Auditing"
      />
      <MethodologyPopup
        isOpen={isMethodologyOpen}
        onClose={() => setIsMethodologyOpen(false)}
        serviceType="Smart Contract Auditing"
      />
    </>
  );
}
