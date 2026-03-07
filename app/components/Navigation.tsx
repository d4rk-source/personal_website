"use client";

import Logo from "./Logo";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavigationProps {
  onScrollToSection: (sectionId: string) => void;
  onRequestQuote: () => void;
  redirectToHomeForSections?: boolean;
}

export default function Navigation({
  onScrollToSection,
  onRequestQuote,
  redirectToHomeForSections = false,
}: NavigationProps) {
  const router = useRouter();

  const handleLogoClick = () => {
    if (redirectToHomeForSections) {
      router.push("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (sectionId: string) => {
    if (redirectToHomeForSections) {
      router.push(`/?scrollTo=${sectionId}`);
      return;
    }
    onScrollToSection(sectionId);
  };

  return (
    <nav className="border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur">
      <div className="px-4 py-4 md:py-6 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Logo filled />
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* <button
            onClick={() => onScrollToSection("vouches")}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Testimonials
          </button> */}
          <button
            onClick={() => handleSectionClick("services")}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleSectionClick("audits")}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            My Audits
          </button>
          <button
            onClick={() => handleSectionClick("about")}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <Link
            href="/blogs"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Blogs
          </Link>
        </div>

        {/* CTA Button */}
        <button
          onClick={onRequestQuote}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm md:text-base"
        >
          Request a Quote
        </button>
      </div>
    </nav>
  );
}
