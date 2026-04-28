"use client";

import React, { useState, useEffect } from "react";
import PricingPopup from "./pricing_methodology_popups/PricingPopup";

interface SecurityReviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow?: () => void;
}

export default function SecurityReviewPopup({
  isOpen,
  onClose,
  onBookNow,
}: SecurityReviewPopupProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    // Close side panels first
    setIsPricingOpen(false);
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
                Fast Smart Contract Security Reviews
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4 text-gray-300">
              <p>
                A focused, practical security review of your smart contract
                code. I'll identify real vulnerabilities, inefficiencies, and
                potential exploits—delivering clear findings and remediation
                guidance in a detailed report.
              </p>

              <p className="font-semibold text-white">What's Included:</p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Code Review</strong> - Line-by-line analysis for
                    security issues and best practices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Vulnerability Testing</strong> - Functional testing
                    and edge case analysis
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Detailed Report</strong> - Clear findings with
                    severity levels and fix recommendations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Follow-up Support</strong> - Questions about fixes
                    and clarifications on findings
                  </span>
                </li>
              </ul>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-6">
                <p className="text-sm mb-2">
                  <span className="font-semibold text-cyan-400">
                    Payment Terms:
                  </span>{" "}
                  You pay 100% after I send you the security report. Zero
                  payment risk—no money due until the work is done.
                </p>
              </div>

              <p className="text-gray-400 pt-4">
                Perfect for DeFi protocols, gambling dApps, tokens, and any Web3
                project where security matters but you're not ready for an
                enterprise-level audit yet.
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
        serviceType="Fast Smart Contract Security Reviews"
      />
    </>
  );
}
