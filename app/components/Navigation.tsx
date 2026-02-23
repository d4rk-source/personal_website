interface NavigationProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navigation({ onScrollToSection }: NavigationProps) {
  return (
    <nav className="border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur">
      <div className="px-4 py-4 md:py-6 max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-xl">Alex Cipher</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => onScrollToSection("services")}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => onScrollToSection("audits")}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            My Audits
          </button>
          <button
            onClick={() => onScrollToSection("about")}
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
        </div>

        {/* CTA Button */}
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm md:text-base">
          Contact Me
        </button>
      </div>
    </nav>
  );
}
