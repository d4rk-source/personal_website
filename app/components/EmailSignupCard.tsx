"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";

export default function EmailSignupCard() {
  const [isDismissed, setIsDismissed] = useState(false);
  const [state, handleSubmit] = useForm("mdalqkkr");
  const pathname = usePathname();

  if (pathname === "/security-tips-newsletter") return null;

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-30 w-auto sm:w-[320px]">
      <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-4 sm:p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Security insights in your inbox
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Monthly tips, real audit lessons, and new research drops.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
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
            className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            disabled={state.submitting || state.succeeded}
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 block text-sm text-red-400"
          />
          <button
            type="submit"
            className="mt-3 w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 font-semibold text-white hover:from-cyan-400 hover:to-blue-400 transition-all"
            disabled={state.submitting || state.succeeded}
          >
            {state.submitting
              ? "Submitting..."
              : state.succeeded
                ? "Thanks for subscribing"
                : "Join the list"}
          </button>
        </form>
      </div>
    </div>
  );
}
