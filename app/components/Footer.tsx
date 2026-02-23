export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-20">
      <div className="px-4 py-16 max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-lg">Alex Cipher</span>
            </div>
            <p className="text-gray-400 text-sm">
              Defending Web3 with expert smart contract security audits and consultations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Smart Contract Auditing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Audit Readiness & Competition Prep
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Smart Contract Security Consultations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="mailto:hello@alexcipher.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; 2026 Alex Cipher. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
