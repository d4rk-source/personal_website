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

            {serviceType === "Smart Contract Auditing" && (
              <>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">
                      Starter
                    </h4>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">
                      $2K–$5K
                    </p>
                    <p className="text-sm text-gray-400">
                      For protocols under 1K LOC with simple DeFi or gambling
                      logic. Includes full review, report, and post-audit
                      support.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">
                      Standard
                    </h4>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">
                      $5K–$15K
                    </p>
                    <p className="text-sm text-gray-400">
                      For codebases of 1–3K LOC with moderate complexity.
                      Covers the full audit scope, report, and remediation
                      advice.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 border border-cyan-700/50 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      FULL SCOPE
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Premium
                    </h4>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">
                      $15K+
                    </p>
                    <p className="text-sm text-gray-400">
                      For complex, multi-contract systems. Full-depth engagement
                      covering testing, comprehensive report, and remediation
                      guidance.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700 space-y-3">
                  <p className="text-sm text-gray-400">
                    <strong className="text-gray-300">What's included:</strong>{" "}
                    All audits include static analysis, dynamic testing,
                    vulnerability assessment, comprehensive report with severity
                    ratings, and remediation recommendations.
                  </p>
                  <p className="text-xs text-gray-500">
                    * Fixed tiers scope full deliverables — no per-LOC
                    surprises. Final tier is confirmed during scoping.
                  </p>
                </div>
              </>
            )}

            {serviceType === "Audit Readiness & Competition Prep" && (
              <>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">
                      Pre-Bug Bounty Prep
                    </h4>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">
                      $500–$2K
                    </p>
                    <p className="text-sm text-gray-400">
                      Flat rate based on repo size and effort (e.g., monorepo
                      setup, NatSpec comments, basic tooling). Bundle free with
                      a Smart Contract Audit.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700 space-y-3">
                  <p className="text-sm text-gray-400">
                    <strong className="text-gray-300">What's included:</strong>{" "}
                    Pre-audit vulnerability scanning, bug bounty preparation,
                    contest optimization, code review with fixes, and audit
                    timing consultation.
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong className="text-gray-300">Benefits:</strong>{" "}
                    Maximize your chances of success in audit competitions and
                    bug bounty programs by fixing issues before submission.
                  </p>
                  <p className="text-xs text-gray-500">
                    * Bundle this service free with a Smart Contract Audit for
                    added value.
                  </p>
                </div>
              </>
            )}

            {serviceType ===
              "Protocol Security Strategy & Incident Response" && (
              <>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">
                      Pre-Incident Security Strategy
                    </h4>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">
                      €1,000
                    </p>
                    <p className="text-sm text-gray-400">
                      Comprehensive analysis of past audits, full security
                      roadmap with audit timing, bug bounty recommendations,
                      audit frequency planning, and a consultation call to
                      explain everything.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">
                      Post-Incident Response Strategy
                    </h4>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">
                      €1,500
                    </p>
                    <p className="text-sm text-gray-400">
                      Complete incident response plan detailing step-by-step
                      procedures, communication protocols, recovery strategies,
                      and a consultation call for implementation guidance.
                    </p>
                  </div>

                  <div className="bg-gray-800/50 border border-cyan-700/50 rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      BEST VALUE
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      Complete Strategy Package
                    </h4>
                    <p className="text-2xl font-bold text-cyan-400 mb-2">
                      €2,500
                    </p>
                    <p className="text-sm text-gray-400">
                      Both reports: pre-incident security strategy and
                      post-incident response. Full analysis, strategic roadmap,
                      incident response planning, and a consultation call.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700 space-y-3">
                  <p className="text-sm text-gray-400">
                    <strong className="text-gray-300">
                      What's included in all packages:
                    </strong>{" "}
                    In-depth research and analysis of your protocol, review of
                    all past audit reports, detailed written strategy
                    document(s), and a consultation call to walk through
                    recommendations and provide ongoing support.
                  </p>
                  <p className="text-sm text-gray-400">
                    <strong className="text-gray-300">Deliverables:</strong>{" "}
                    Professional strategy reports tailored to your protocol's
                    specific needs, actionable timelines, and direct access to
                    discuss implementation.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
