"use client";

import React, { useState, useEffect } from "react";

interface SecurityConsultationsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecurityConsultationsPopup({
  isOpen,
  onClose,
}: SecurityConsultationsPopupProps) {
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
                Smart Contract Security Consultations
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>

            {/* Description */}
            <div className="mb-8 space-y-4 text-gray-300">
              <p>
                Get personalized expert guidance to strengthen your Web3
                project's security posture. Our consultations provide strategic
                insights and tactical recommendations tailored to your specific
                needs and project stage.
              </p>

              <p>Our consultation services cover:</p>

              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Security Planning & Strategy</strong> - Develop
                    comprehensive security roadmaps for your protocol
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Architecture Reviews</strong> - Evaluate system
                    design for potential vulnerabilities and improvements
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Best Practices Implementation</strong> - Guidance on
                    implementing industry security standards
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Risk Assessment</strong> - Identify and prioritize
                    security risks in your project
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">✓</span>
                  <span>
                    <strong>Ongoing Security Support</strong> - Continuous
                    guidance throughout your project lifecycle
                  </span>
                </li>
              </ul>

              <p className="text-gray-400 pt-2">
                Whether you're in the early stages of development or scaling an
                established protocol, our consultants provide the strategic
                security expertise you need to build with confidence.
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
