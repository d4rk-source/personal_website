"use client";

import React, { useState, useEffect } from "react";

interface MethodologyPopupProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

export default function MethodologyPopup({
  isOpen,
  onClose,
  serviceType,
}: MethodologyPopupProps) {
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
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .methodology-panel {
          animation: ${isClosing ? "slideOutRight" : "slideInRight"} 0.3s
            ease-out;
          animation-fill-mode: both;
        }
      `}</style>

      {/* Click-away layer */}
      <div
        className="fixed inset-x-0 bottom-0 top-[65px] md:top-[89px] z-[96]"
        onClick={handleClose}
      />

      {/* Side Panel */}
      <div
        className="methodology-panel fixed right-0 bottom-0 top-[65px] md:top-[89px] z-[97] w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-950 border-l border-gray-800 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 md:top-6 left-6 text-gray-400 hover:text-white transition-colors"
          aria-label="Close methodology"
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
        <div className="p-5 sm:p-6 md:p-8 pt-16 md:pt-20">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Methodology
            </h3>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500" />
          </div>

          <div className="space-y-6 text-gray-300">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              {serviceType}
            </p>

            {serviceType === "Smart Contract Auditing" && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">1.</span> Initial Review
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    I begin with a comprehensive code walkthrough, understanding
                    architecture, business logic, and identifying critical
                    areas.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">2.</span> Automated Analysis
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Run industry-standard tools like Slither, Mythril, and
                    custom scripts to detect common vulnerabilities.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">3.</span> Manual Testing
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Deep dive into code logic, access control, state management,
                    and edge cases that automated tools miss.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">4.</span> Exploitation
                    Attempts
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Actively attempt to exploit identified vulnerabilities in
                    test environments to validate severity.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">5.</span> Report Generation
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Compile findings with severity ratings, proof of concepts,
                    and detailed remediation recommendations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">6.</span> Post-Audit Support
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Review fixes, answer questions, and provide guidance on
                    implementing security improvements.
                  </p>
                </div>
              </div>
            )}

            {serviceType === "Audit Readiness & Competition Prep" && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">1.</span> Vulnerability Scan
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Quick automated scan to identify common issues before
                    auditors review your code, saving time and money.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">2.</span> Code Quality Check
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Review documentation, test coverage, and code organization
                    to meet professional audit firm expectations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">3.</span> Findings Report
                    Generation
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Generate a concise report of vulnerabilities found (if any),
                    with severity and clear remediation notes.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">4.</span> Fix Verification
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Validate that your implemented fixes are complete and don't
                    introduce new issues before final audit submission.
                  </p>
                </div>
              </div>
            )}

            {serviceType ===
              "Protocol Security Strategy & Incident Response" && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">1.</span> Protocol Deep Dive
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Comprehensive analysis of your protocol architecture,
                    codebase, and all past audit reports to understand your
                    security history and identify patterns.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">2.</span> Risk Assessment
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Evaluate current vulnerabilities, attack surfaces, and
                    potential threat vectors based on protocol type and past
                    findings.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">3.</span> Strategy
                    Development
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Create comprehensive security roadmap including audit
                    timing, bug bounty program structure, audit frequency
                    recommendations, and milestone planning.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">4.</span> Incident Response
                    Planning
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    (Optional) Develop step-by-step incident response
                    procedures, communication protocols, emergency contacts, and
                    recovery strategies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">5.</span> Report Delivery
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Provide detailed written strategy report(s) with actionable
                    recommendations, timelines, and implementation guidance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="text-cyan-400">6.</span> Consultation Call
                  </h4>
                  <p className="text-sm text-gray-400 ml-6">
                    Walk through all recommendations, answer questions, clarify
                    implementation details, and provide ongoing support.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
