"use client";

import React, { useState, useEffect } from "react";

interface PricingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

export default function PricingPopup({
  isOpen,
  onClose,
  serviceType,
}: PricingPopupProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  const handleClose = () => {
    onClose();
  };

  if (!shouldRender) return null;

  return (
    <>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .pricing-panel {
          animation: ${isClosing ? "slideOutLeft" : "slideInLeft"} 0.3s ease-out;
          animation-fill-mode: both;
        }
      `}</style>

      {/* Side Panel */}
      <div className="pricing-panel fixed left-0 top-0 bottom-0 z-50 w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-950 border-r border-gray-800 shadow-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          aria-label="Close pricing"
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
        <div className="p-8 pt-20">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Pricing
            </h3>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              {serviceType}
            </p>

            <div className="space-y-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Basic Package</h4>
                <p className="text-2xl font-bold text-cyan-400 mb-2">$5,000</p>
                <p className="text-sm text-gray-400">
                  Up to 500 lines of code, basic vulnerability assessment, and
                  detailed report.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  Standard Package
                </h4>
                <p className="text-2xl font-bold text-cyan-400 mb-2">$10,000</p>
                <p className="text-sm text-gray-400">
                  Up to 1,500 lines of code, comprehensive security review, gas
                  optimization, and post-audit support.
                </p>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">
                  Premium Package
                </h4>
                <p className="text-2xl font-bold text-cyan-400 mb-2">
                  Custom Quote
                </p>
                <p className="text-sm text-gray-400">
                  Complex protocols, ongoing security consultations, and
                  dedicated support.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                All packages include a comprehensive audit report with severity
                ratings and remediation recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
