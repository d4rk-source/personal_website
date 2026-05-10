"use client";

import { useEffect, useState } from "react";

export default function SaleBanner() {
  const [now, setNow] = useState<Date>(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    // Check if sale is active (May 1-31, 2026)
    const start = new Date("2026-05-01T00:00:00.000Z").getTime();
    const end = new Date("2026-05-31T23:59:59.000Z").getTime();
    const current = now.getTime();
    setIsVisible(current >= start && current <= end);
  }, [now]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        setIsClosed(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  const timeLeft = (() => {
    const end = new Date("2026-05-31T23:59:59.000Z").getTime();
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

  if (!isVisible || isClosed) return null;

  return (
    <div
      className="fixed top-[65px] md:top-[89px] left-0 right-0 z-50 bg-rose-600 text-white px-4 py-4 md:py-5"
      style={{
        animation: isClosing
          ? "slideUp 0.5s ease-in forwards"
          : "slideDown 0.5s ease-out forwards",
      }}
    >
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold mb-1">
            <em>May</em> Security Be Affordable Sale
          </h3>
          <p className="text-sm text-rose-100">
            80% off all security reviews this May. Save big on smart contract
            audits before the month ends.
          </p>
        </div>
        <div className="whitespace-nowrap text-center md:text-right">
          <div className="text-sm text-rose-100 mb-1">Sale ends in:</div>
          <div className="text-base md:text-lg font-mono font-bold">
            {formatTimeLeft(timeLeft)}
          </div>
        </div>
        <button
          onClick={() => setIsClosing(true)}
          className="absolute top-4 right-4 text-white hover:text-rose-100 transition-colors"
          aria-label="Close sale banner"
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
      </div>
    </div>
  );
}
