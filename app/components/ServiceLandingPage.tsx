"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";
import RequestQuotePopup from "./popups/hero_nav-popups/RequestQuotePopup";

interface ServiceItem {
  title: string;
  description: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  badge?: string;
}

interface Sale {
  name: string;
  // ISO date strings for start and end
  start: string;
  end: string;
  // fraction off (e.g. 0.8 means 80% off)
  discount: number;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceLandingPageProps {
  eyebrow: string;
  title: string;
  description: string;
  summary: string;
  preselectedService: string;
  idealFor: string[];
  comparisonItems?: ServiceItem[];
  deliverables: ServiceItem[];
  methodology: ServiceItem[];
  pricingPlans: PricingPlan[];
  pricingNotes: string[];
  faqItems?: FaqItem[];
  jsonLd?: Record<string, unknown>;
  sale?: Sale;
}

export default function ServiceLandingPage({
  eyebrow,
  title,
  description,
  summary,
  preselectedService,
  idealFor,
  comparisonItems = [],
  deliverables,
  methodology,
  pricingPlans,
  pricingNotes,
  faqItems = [],
  jsonLd,
  sale,
}: ServiceLandingPageProps) {
  const [isQuotePopupOpen, setIsQuotePopupOpen] = useState(false);
  const router = useRouter();
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const isSaleActive = (() => {
    if (!sale) return false;
    const start = new Date(sale.start).getTime();
    const end = new Date(sale.end).getTime();
    const current = now.getTime();
    return current >= start && current <= end;
  })();

  const timeLeft = (() => {
    if (!sale) return 0;
    const end = new Date(sale.end).getTime();
    return Math.max(0, end - now.getTime());
  })();

  const formatTimeLeft = (ms: number) => {
    const total = Math.floor(ms / 1000);
    const days = Math.floor(total / (24 * 3600));
    const hours = Math.floor((total % (24 * 3600)) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}

      <div className="min-h-screen bg-black text-white">
        <Navigation
          onScrollToSection={() => undefined}
          onRequestQuote={() => setIsQuotePopupOpen(true)}
          redirectToHomeForSections
        />

        <main className="px-4 py-10 md:py-20 max-w-7xl mx-auto space-y-10 md:space-y-16">
          <section className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4">
              {eyebrow}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-5 md:mb-6">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
              {description}
            </p>
            <p className="text-gray-400 leading-relaxed mb-6 md:mb-8">
              {summary}
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <button
                onClick={() => setIsQuotePopupOpen(true)}
                className="bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors w-full md:w-auto"
              >
                Request a Quote
              </button>
              <button
                onClick={() => router.push("/?scrollTo=services")}
                className="border border-gray-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-900 transition-colors w-full md:w-auto"
              >
                View All Services
              </button>
            </div>

            <p className="text-gray-400 text-sm">I respond within 24 hours</p>
          </section>

          <section className="border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 p-5 sm:p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Best fit for
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {idealFor.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-cyan-400 mt-1">✓</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </section>

          {comparisonItems.length > 0 ? (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                How this compares
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {comparisonItems.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 md:p-6"
                  >
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What&apos;s included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 md:p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Methodology</h2>
            <div className="space-y-5">
              {methodology.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 md:p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    <span className="text-cyan-400 mr-2">{index + 1}.</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Pricing</h2>
            {sale && isSaleActive ? (
              <div className="mb-4 p-4 rounded-lg bg-gradient-to-r from-rose-500/20 to-rose-600/10 border border-rose-500 text-rose-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                  <div className="text-left">
                    <div className="text-sm uppercase tracking-wide font-semibold">
                      <em>May</em> Security Be Affordable
                    </div>
                    <div className="mt-1 text-sm text-rose-100/90">
                      Sale ends in:{" "}
                      <span className="font-mono">
                        {formatTimeLeft(timeLeft)}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-rose-100/90">
                    {sale.discount * 100}% off
                  </div>
                </div>
              </div>
            ) : null}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {pricingPlans.map((plan) => {
                // try to parse numeric price from string like "$250"
                const numeric = Number(plan.price.replace(/[^0-9.]/g, ""));
                const base = Number.isFinite(numeric) ? numeric : 0;
                const saleMultiplier = sale ? 1 - sale.discount : 1;
                const salePrice = Math.round(base * saleMultiplier);
                const format = (v: number) => `$${v.toLocaleString()}`;

                return (
                  <div
                    key={plan.name}
                    className="relative bg-gray-900/60 border border-gray-800 rounded-lg p-5 md:p-6"
                  >
                    {plan.badge ? (
                      <span className="absolute top-4 right-4 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        {plan.badge}
                      </span>
                    ) : null}
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    {sale && isSaleActive ? (
                      <div className="mb-3">
                        <div className="text-2xl text-gray-400 line-through">
                          {plan.price}
                        </div>
                        <div className="text-3xl font-bold text-cyan-400">
                          {format(salePrice)}
                        </div>
                      </div>
                    ) : (
                      <p className="text-3xl font-bold text-cyan-400 mb-3">
                        {plan.price}
                      </p>
                    )}
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 border border-gray-800 rounded-lg p-5 md:p-6 bg-gray-950/60 space-y-3">
              {pricingNotes.map((note) => (
                <p key={note} className="text-gray-400 text-sm">
                  {note}
                </p>
              ))}
            </div>
          </section>

          <section className="border border-gray-800 rounded-xl bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-5 sm:p-6 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to secure your protocol?
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Tell me your scope, timeline, and chain setup. I&apos;ll send back
              a clear security plan and quote tailored to your project.
            </p>
            <button
              onClick={() => setIsQuotePopupOpen(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:from-cyan-400 hover:to-blue-400 transition-colors"
            >
              Book This Service
            </button>
          </section>

          {faqItems.length > 0 ? (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {faqItems.map((item) => (
                  <article
                    key={item.question}
                    className="bg-gray-900/60 border border-gray-800 rounded-lg p-5 md:p-6"
                  >
                    <h3 className="text-xl font-semibold mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-400">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </main>

        <Footer />

        <RequestQuotePopup
          isOpen={isQuotePopupOpen}
          onClose={() => setIsQuotePopupOpen(false)}
          preselectedService={preselectedService}
        />
      </div>
    </>
  );
}
