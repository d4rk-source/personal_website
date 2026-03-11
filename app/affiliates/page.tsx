"use client";

import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import Navigation from "@/app/components/Navigation";

export default function AffiliatesPage() {
  const [state, handleSubmit] = useForm("xlgwqakv");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <Navigation redirectToHomeForSections />

      {/* Hero Section */}
      <section className="px-4 py-10 md:py-20 max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Affiliate Program
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Earn 20% commission on every successful referral. Help secure Web3
            while building passive income.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-16">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 md:p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">20%</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Commission Rate
            </h3>
            <p className="text-gray-400 text-sm">
              Earn 20% of the revenue from every audit or service you refer that
              converts into a paid client.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 md:p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">$1K+</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Average Payout
            </h3>
            <p className="text-gray-400 text-sm">
              With audit packages ranging from $2.5K to $10K+, your commissions
              can be substantial.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 md:p-6">
            <div className="text-4xl font-bold text-cyan-400 mb-2">∞</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Lifetime Tracking
            </h3>
            <p className="text-gray-400 text-sm">
              Once someone uses your link, they're your referral forever—even on
              repeat business.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8 mb-10 md:mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Sign Up
                </h3>
                <p className="text-gray-400">
                  Fill out the form below to join my affiliate program. I'll
                  review your application and get back to you within 48 hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Get Your Link
                </h3>
                <p className="text-gray-400">
                  Receive a unique tracking link and promotional materials to
                  share with your network.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Share with Projects
                </h3>
                <p className="text-gray-400">
                  Promote our services to Web3 projects, developers, and
                  protocols that need security audits.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/20 border border-cyan-500 rounded-full flex items-center justify-center text-cyan-400 font-semibold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  Earn Commission
                </h3>
                <p className="text-gray-400">
                  When your referral books and completes a service, you earn 20%
                  of the total project value. Payments sent monthly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who Should Join */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8 mb-10 md:mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Who Should Join?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ✓ Security Researchers
              </h3>
              <p className="text-gray-400 text-sm">
                Know projects that need audits before launch or competitions?
                Perfect fit.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ✓ Web3 Developers
              </h3>
              <p className="text-gray-400 text-sm">
                Working with teams building protocols? Recommend security early.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ✓ Community Leaders
              </h3>
              <p className="text-gray-400 text-sm">
                Run Discord servers, Twitter communities, or developer groups?
                Share with your audience.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                ✓ Content Creators
              </h3>
              <p className="text-gray-400 text-sm">
                Create Web3 educational content? Monetize your reach while
                promoting security.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Apply to Join</h2>
          <p className="text-gray-400 mb-8">
            Fill out the form below and I'll get back to you within 48 hours.
          </p>

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
                Application Received!
              </h3>
              <p className="text-gray-400 mb-6">
                Thank you for applying to my affiliate program. I'll review your
                application and get back to you within 48 hours.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all font-semibold"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    placeholder="Your full name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-sm text-red-400 mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-sm text-red-400 mt-1"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Website / Social Profile *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  disabled={state.submitting}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                  placeholder="https://yourwebsite.com or https://twitter.com/you"
                />
                <ValidationError
                  prefix="Website"
                  field="website"
                  errors={state.errors}
                  className="text-sm text-red-400 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="audience"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Tell us about your audience *
                </label>
                <textarea
                  id="audience"
                  name="audience"
                  required
                  disabled={state.submitting}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none disabled:opacity-50"
                  placeholder="Who do you reach? (e.g., Web3 developers, DeFi protocols, security researchers, etc.)"
                />
                <ValidationError
                  prefix="Audience"
                  field="audience"
                  errors={state.errors}
                  className="text-sm text-red-400 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="promotion"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  How will you promote our services? *
                </label>
                <textarea
                  id="promotion"
                  name="promotion"
                  required
                  disabled={state.submitting}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none disabled:opacity-50"
                  placeholder="Describe your promotion strategy (e.g., blog posts, social media, direct outreach, etc.)"
                />
                <ValidationError
                  prefix="Promotion strategy"
                  field="promotion"
                  errors={state.errors}
                  className="text-sm text-red-400 mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="reach"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Estimated Reach
                </label>
                <input
                  type="text"
                  id="reach"
                  name="reach"
                  disabled={state.submitting}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                  placeholder="e.g., 10K Twitter followers, 50K blog views/month"
                />
                <ValidationError
                  prefix="Reach"
                  field="reach"
                  errors={state.errors}
                  className="text-sm text-red-400 mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-10 md:mt-16 bg-gray-900/50 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                When do I get paid?
              </h3>
              <p className="text-gray-400">
                Commissions are paid monthly via your preferred method (crypto
                or bank transfer) within 7 days of the month's end, after the
                client's project is completed and paid.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Is there a minimum payout?
              </h3>
              <p className="text-gray-400">
                Yes, minimum payout is $100. If you don't reach this threshold,
                your earnings roll over to the next month.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Can I refer myself?
              </h3>
              <p className="text-gray-400">
                No, affiliate commissions are for genuine third-party referrals
                only. Self-referrals are not eligible for commission.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                What promotional materials do you provide?
              </h3>
              <p className="text-gray-400">
                I provide banner images, social media templates, pre-written
                content suggestions, and case studies you can share. I'll also
                work with you on custom resources if needed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                How long does the cookie last?
              </h3>
              <p className="text-gray-400">
                My tracking is lifetime-based. Once someone clicks your
                affiliate link, they're attributed to you forever, even if they
                return months later or book multiple services.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Questions? Reach out to us at{" "}
            <a
              href="mailto:affiliates@alexcipher.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              affiliates@alexcipher.com
            </a>
          </p>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
