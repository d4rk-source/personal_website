"use client";

import { useForm, ValidationError } from "@formspree/react";
import Footer from "@/app/components/Footer";
import Navigation from "@/app/components/Navigation";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xzdjpazr");

  return (
    <>
      <Navigation redirectToHomeForSections />
      <main className="min-h-screen bg-black text-white">
        <div className="px-4 py-10 md:py-20 max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-10 md:mb-16 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-400 text-base sm:text-lg">
              Have questions about my services or want to discuss your security
              needs? Reach out and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white disabled:opacity-50"
                    placeholder="Your name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="mt-2 block text-sm text-red-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white disabled:opacity-50"
                    placeholder="your@email.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 block text-sm text-red-400"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    disabled={state.submitting}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white disabled:opacity-50"
                    placeholder="What is this about?"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="mt-2 block text-sm text-red-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    disabled={state.submitting}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white resize-none disabled:opacity-50"
                    placeholder="Tell me about your project or question..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-2 block text-sm text-red-400"
                  />
                </div>

                {/* Status Messages */}
                {state.succeeded && (
                  <div className="p-4 bg-green-900/20 border border-green-700 rounded-lg text-green-400">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting || state.succeeded}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all duration-200"
                >
                  {state.submitting
                    ? "Sending..."
                    : state.succeeded
                      ? "Message Sent!"
                      : "Send Message"}
                </button>
              </form>

              {/* Alternative Contact */}
              <div className="mt-12 pt-8 border-t border-gray-700">
                <p className="text-gray-400 text-sm mb-4">
                  Prefer email? Reach out directly at{" "}
                  <a
                    href="mailto:hello@alexcipher.xyz"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    hello@alexcipher.xyz
                  </a>
                </p>
              </div>
            </div>

            <aside className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-5 sm:p-6 md:p-8 lg:sticky lg:top-28">
              <h2 className="text-xl font-semibold mb-2">Book a Call</h2>
              <p className="text-sm text-gray-400 mb-5">
                I&apos;ll add Calendly here soon so you can book a time
                directly.
              </p>
              <div className="rounded-lg border border-dashed border-gray-700 bg-black/20 p-5">
                <p className="text-sm text-gray-500 mb-2">
                  Calendly Placeholder
                </p>
                <p className="text-xs text-gray-600">
                  Scheduling widget will be embedded in this block.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
