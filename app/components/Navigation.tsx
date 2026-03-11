"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavigationProps {
  onScrollToSection?: (sectionId: string) => void;
  onRequestQuote?: () => void;
  redirectToHomeForSections?: boolean;
}

export default function Navigation({
  onScrollToSection,
  onRequestQuote,
  redirectToHomeForSections = false,
}: NavigationProps) {
  const MOBILE_MENU_ANIMATION_MS = 220;
  const router = useRouter();
  const pathname = usePathname();
  const closeMenuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isMobileMenuMounted, setIsMobileMenuMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", sectionId: "services" },
    { label: "My Audits", sectionId: "audits" },
    { label: "About", sectionId: "about" },
  ];

  const clearCloseMenuTimer = () => {
    if (closeMenuTimerRef.current) {
      clearTimeout(closeMenuTimerRef.current);
      closeMenuTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearCloseMenuTimer();
    };
  }, []);

  const openMobileMenu = () => {
    clearCloseMenuTimer();
    setIsMobileMenuMounted(true);
    requestAnimationFrame(() => {
      setIsMobileMenuOpen(true);
    });
  };

  const closeMobileMenu = (afterClose?: () => void) => {
    if (!isMobileMenuMounted) {
      afterClose?.();
      return;
    }

    setIsMobileMenuOpen(false);
    clearCloseMenuTimer();
    closeMenuTimerRef.current = setTimeout(() => {
      setIsMobileMenuMounted(false);
      afterClose?.();
    }, MOBILE_MENU_ANIMATION_MS);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuMounted && isMobileMenuOpen) {
      closeMobileMenu();
      return;
    }
    openMobileMenu();
  };

  const performLogoAction = () => {
    if (redirectToHomeForSections) {
      router.push("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const performSectionAction = (sectionId: string) => {
    if (redirectToHomeForSections) {
      router.push(`/?scrollTo=${sectionId}`);
      return;
    }
    if (onScrollToSection) {
      onScrollToSection(sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const performRequestQuoteAction = () => {
    if (onRequestQuote) {
      onRequestQuote();
      return;
    }
    router.push("/contact");
  };

  const handleLogoClick = () => {
    closeMobileMenu(performLogoAction);
  };

  const handleSectionClick = (sectionId: string) => {
    closeMobileMenu(() => performSectionAction(sectionId));
  };

  const handleRequestQuote = () => {
    closeMobileMenu(performRequestQuoteAction);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[100] border-b border-gray-800 bg-black/95 md:backdrop-blur backdrop-blur-none shadow-[0_1px_0_rgba(31,41,55,0.7)] transform-gpu will-change-transform">
        <div className="px-4 py-3 md:py-6 max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Logo filled />
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleSectionClick(item.sectionId)}
                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/blogs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Blogs
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleRequestQuote}
            className="hidden md:inline-flex bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm md:text-base"
          >
            Request a Quote
          </button>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-700 text-gray-200 hover:text-white hover:border-gray-500 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {isMobileMenuOpen ? (
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
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuMounted ? (
          <div
            id="mobile-navigation-menu"
            className={`md:hidden border-t border-gray-800 px-4 overflow-hidden transition-all duration-200 ease-out ${
              isMobileMenuOpen
                ? "max-h-[520px] py-4 opacity-100 translate-y-0"
                : "max-h-0 py-0 opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            <div className="flex flex-col gap-2">
              {pathname !== "/" ? (
                <button
                  onClick={() => closeMobileMenu(() => router.push("/"))}
                  className="text-left px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-900/60 transition-colors"
                >
                  Home
                </button>
              ) : null}

              {navItems.map((item) => (
                <button
                  key={`mobile-${item.sectionId}`}
                  onClick={() => handleSectionClick(item.sectionId)}
                  className="text-left px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-900/60 transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => closeMobileMenu(() => router.push("/blogs"))}
                className="text-left px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-900/60 transition-colors"
              >
                Blogs
              </button>
              <button
                onClick={() =>
                  closeMobileMenu(() => router.push("/affiliates"))
                }
                className="text-left px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-900/60 transition-colors"
              >
                Affiliates
              </button>
              <button
                onClick={() => closeMobileMenu(() => router.push("/contact"))}
                className="text-left px-3 py-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-900/60 transition-colors"
              >
                Contact
              </button>

              <button
                onClick={handleRequestQuote}
                className="mt-2 w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        ) : null}
      </nav>
      <div className="h-[65px] md:h-[97px]" aria-hidden="true" />
    </>
  );
}
