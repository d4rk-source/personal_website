"use client";

import Navigation from "@/app/components/Navigation";
import { useForm, ValidationError } from "@formspree/react";

export default function SecurityTipsNewsletterPage() {
  const [state, handleSubmit] = useForm("mdalqkkr");

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation redirectToHomeForSections />

      <main className="px-4 py-16 md:py-24">
        <section className="max-w-3xl mx-auto">
          <p className="text-cyan-300 text-sm font-semibold uppercase tracking-wider">
            Free Newsletter
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Smart Contract Security Tips in Your Inbox
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-300 max-w-2xl">
            Subscribe for practical security tips, real audit lessons, and
            actionable Web3 risk-prevention advice you can use in your protocol
            development workflow.
          </p>

          <div className="mt-10 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 sm:p-8">
            <h2 className="text-2xl font-semibold">Subscribe to the list</h2>
            <p className="mt-2 text-gray-400">
              Monthly updates. No spam. Unsubscribe anytime.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                disabled={state.submitting || state.succeeded}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="block text-sm text-red-400"
              />

              <button
                type="submit"
                className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white hover:from-cyan-400 hover:to-blue-400 transition-all disabled:opacity-70"
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
        </section>
      </main>
    </div>
  );
}
