"use client";

import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

interface RequestQuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export default function RequestQuotePopup({
  isOpen,
  onClose,
  preselectedService,
}: RequestQuotePopupProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [state, handleSubmit] = useForm("mlgwqnql");
  const [checkedServices, setCheckedServices] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
    } else if (preselectedService) {
      // Pre-select the service when the popup opens
      setCheckedServices([preselectedService]);
    }
  }, [isOpen, preselectedService]);

  const handleClose = () => {
    setIsClosing(true);
    setCheckedServices([]);
    setTimeout(onClose, 300);
  };

  const handleServiceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    if (e.target.checked) {
      setCheckedServices((prev) => [...prev, value]);
    } else {
      setCheckedServices((prev) => prev.filter((s) => s !== value));
    }
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
        className="backdrop fixed inset-x-0 bottom-0 top-[65px] md:top-[97px] bg-black bg-opacity-70 z-[90]"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed inset-x-0 bottom-0 top-[65px] md:top-[97px] flex items-center justify-center z-[95] p-4 pt-8 md:pt-16 overflow-y-auto">
        <div className="modal relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl my-auto">
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
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="mb-4 text-cyan-500">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Request Received!
                </h3>
                <p className="text-gray-400 mb-6">
                  I'll review your project details and get back to you soon.
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 pr-10 md:pr-0">
                    Let's secure your users today!
                  </h2>
                  <p className="text-gray-400">
                    Tell me about your project and the help you need.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      className="text-sm text-gray-300"
                      htmlFor="project-name"
                    >
                      Project name
                    </label>
                    <input
                      id="project-name"
                      name="projectName"
                      type="text"
                      className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="e.g. VaultX Protocol"
                      disabled={state.submitting}
                      required
                    />
                    <ValidationError
                      prefix="Project name"
                      field="projectName"
                      errors={state.errors}
                      className="text-sm text-red-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm text-gray-300"
                      htmlFor="project-website"
                    >
                      Website or social handle
                    </label>
                    <input
                      id="project-website"
                      name="website"
                      type="text"
                      className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="e.g. vaultx.fi or @vaultx"
                      disabled={state.submitting}
                    />
                    <ValidationError
                      prefix="Website"
                      field="website"
                      errors={state.errors}
                      className="text-sm text-red-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      className="text-sm text-gray-300"
                      htmlFor="project-details"
                    >
                      Project details
                    </label>
                    <textarea
                      id="project-details"
                      name="projectDetails"
                      rows={5}
                      className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Briefly describe your protocol, scope, and timeline."
                      disabled={state.submitting}
                      required
                    />
                    <ValidationError
                      prefix="Project details"
                      field="projectDetails"
                      errors={state.errors}
                      className="text-sm text-red-400"
                    />
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm text-gray-300">Services needed</p>
                    <div className="space-y-2">
                      <label className="flex items-start gap-3 text-gray-200">
                        <input
                          type="checkbox"
                          name="services"
                          value="Smart Contract Auditing"
                          checked={checkedServices.includes(
                            "Smart Contract Auditing",
                          )}
                          onChange={(e) =>
                            handleServiceChange(e, "Smart Contract Auditing")
                          }
                          className="mt-1"
                          disabled={state.submitting}
                        />
                        <span>Smart Contract Auditing</span>
                      </label>
                      <label className="flex items-start gap-3 text-gray-200">
                        <input
                          type="checkbox"
                          name="services"
                          value="Audit Readiness & Competition Prep"
                          checked={checkedServices.includes(
                            "Audit Readiness & Competition Prep",
                          )}
                          onChange={(e) =>
                            handleServiceChange(
                              e,
                              "Audit Readiness & Competition Prep",
                            )
                          }
                          className="mt-1"
                          disabled={state.submitting}
                        />
                        <span>Audit Readiness &amp; Competition Prep</span>
                      </label>
                      <label className="flex items-start gap-3 text-gray-200">
                        <input
                          type="checkbox"
                          name="services"
                          value="Smart Contract Security Consultations"
                          checked={checkedServices.includes(
                            "Smart Contract Security Consultations",
                          )}
                          onChange={(e) =>
                            handleServiceChange(
                              e,
                              "Smart Contract Security Consultations",
                            )
                          }
                          className="mt-1"
                          disabled={state.submitting}
                        />
                        <span>Smart Contract Security Consultations</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <details className="rounded-lg border border-gray-700 bg-gray-900/40 px-4 py-3">
                      <summary className="cursor-pointer text-sm text-gray-200">
                        Preferred social platform
                      </summary>
                      <div className="mt-3 space-y-2">
                        <label className="flex items-center gap-3 text-gray-200">
                          <input
                            type="radio"
                            name="platform"
                            value="X (Twitter)"
                            disabled={state.submitting}
                          />
                          <span>X (Twitter)</span>
                        </label>
                        <label className="flex items-center gap-3 text-gray-200">
                          <input
                            type="radio"
                            name="platform"
                            value="Discord"
                            disabled={state.submitting}
                          />
                          <span>Discord</span>
                        </label>
                        <label className="flex items-center gap-3 text-gray-200">
                          <input
                            type="radio"
                            name="platform"
                            value="Telegram"
                            disabled={state.submitting}
                          />
                          <span>Telegram</span>
                        </label>
                        <label className="flex items-center gap-3 text-gray-200">
                          <input
                            type="radio"
                            name="platform"
                            value="Email"
                            disabled={state.submitting}
                          />
                          <span>Email</span>
                        </label>
                        <label className="flex items-center gap-3 text-gray-200">
                          <input
                            type="radio"
                            name="platform"
                            value="Other"
                            disabled={state.submitting}
                          />
                          <span>Other</span>
                        </label>
                      </div>
                    </details>

                    <div className="space-y-2">
                      <label
                        className="text-sm text-gray-300"
                        htmlFor="contact-handle"
                      >
                        Handle or contact info
                      </label>
                      <input
                        id="contact-handle"
                        name="contactHandle"
                        type="text"
                        className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="e.g. @vaultx or hello@vaultx.fi"
                        disabled={state.submitting}
                        required
                      />
                      <ValidationError
                        prefix="Contact handle"
                        field="contactHandle"
                        errors={state.errors}
                        className="text-sm text-red-400"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Send Request"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
