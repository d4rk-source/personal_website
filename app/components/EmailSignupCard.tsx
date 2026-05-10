"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";

export default function EmailSignupCard() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [state, handleSubmit] = useForm("mdalqkkr");
  const pathname = usePathname();
  const [showAfterDelay, setShowAfterDelay] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const shouldConsider =
      pathname !== "/security-tips-newsletter" && !isDismissed;
    if (shouldConsider) {
      timer = setTimeout(() => setShowAfterDelay(true), 3000);
    } else {
      setShowAfterDelay(false);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [pathname, isDismissed]);

  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const t = setTimeout(() => setIsDismissed(true), 400);
      return () => clearTimeout(t);
    }
  }, [isClosing]);

  if (pathname === "/security-tips-newsletter") return null;

  if (isDismissed || !showAfterDelay) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-30 w-auto sm:w-[360px]">
      <div
        className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-4 sm:p-5 shadow-2xl"
        style={{
          animation: isClosing
            ? "fadeOut 0.35s ease-in forwards"
            : "fadeIn 0.35s ease-out forwards",
        }}
      >
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(6px);
            }
          }
        `}</style>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Want a short guide to internally audit your smart contract?
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              I'll send a concise, practical method you can run on your
              codebase.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsClosing(true)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Dismiss email signup"
          >
            <svg
              className="h-4 w-4"
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
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <label htmlFor="email-signup" className="sr-only">
            Email address
          </label>
          <input
            id="email-signup"
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
            disabled={state.submitting || state.succeeded}
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 block text-sm text-rose-400"
          />
          <button
            type="submit"
            className="mt-3 w-full rounded-lg bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2 font-semibold text-white hover:from-rose-400 hover:to-rose-500 transition-all"
            disabled={state.submitting || state.succeeded}
          >
            {state.submitting
              ? "Submitting..."
              : state.succeeded
                ? "Guide sent — check your inbox"
                : "Send me the guide"}
          </button>
        </form>
      </div>
    </div>
  );
}
