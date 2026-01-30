export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#1D4871]/10">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-14">
        {/* Main Footer Content - Desktop: 2 columns, Mobile: stacked */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-10">
          {/* Left Column: Logo + Description */}
          <div className="space-y-3">
            <a
              href="/"
              className="flex items-center gap-2 text-[#1D4871] font-bold text-lg md:text-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded-lg px-2 -ml-2 w-fit"
              aria-label="Sayso home"
            >
              <img src="/logo-pos-horizontal.png" alt="Sayso" className="h-8" />
            </a>
            <p className="text-sm text-[#1D4871]/70 leading-relaxed max-w-md">
              Win the Moment — real-time call guidance for outbound agents.
            </p>
          </div>

          {/* Right Column: Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Product Column */}
            <div className="space-y-3">
              <h3 className="text-xs tracking-widest uppercase text-[#1D4871]/60 font-semibold">
                Product
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-[#1D4871]/70 hover:text-[#1D4871] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-[#1D4871]/70 hover:text-[#1D4871] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#book-demo"
                    className="text-sm text-[#1D4871]/70 hover:text-[#1D4871] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
                  >
                    Book a demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-3">
              <h3 className="text-xs tracking-widest uppercase text-[#1D4871]/60 font-semibold">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#security"
                    className="text-sm text-[#1D4871]/70 hover:text-[#1D4871] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#help"
                    className="text-sm text-[#1D4871]/70 hover:text-[#1D4871] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-[#1D4871]/70 hover:text-[#1D4871] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-3">
              <h3 className="text-xs tracking-widest uppercase text-[#1D4871]/60 font-semibold">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#privacy"
                    className="text-sm text-[#1D4871]/70 hover:text-[#1D4871] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#terms"
                    className="text-sm text-[#1D4871]/70 hover:text-[#1D4871] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-6 md:pt-8 border-t border-[#1D4871]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#1D4871]/50">
            © 2026 Sayso. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-[#1D4871]/50">
            <a
              href="#privacy"
              className="hover:text-[#1D4871]/70 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
            >
              Privacy
            </a>
            <span>•</span>
            <a
              href="#terms"
              className="hover:text-[#1D4871]/70 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded px-1"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
