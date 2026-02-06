import Image from 'next/image';

export function FooterV4() {
  return (
    <footer className="relative bg-[#1D4871] border-t-4 border-[#FFDE59]">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-10">
          {/* Left Column: Logo + Description */}
          <div className="space-y-3">
            <a
              href="/v4"
              className="flex items-center gap-2 text-white font-bold text-lg md:text-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#FFDE59] focus:ring-offset-2 focus:ring-offset-[#1D4871] rounded-lg px-2 -ml-2 w-fit"
              aria-label="Sayso home"
            >
              <img src="/logo-neg-transparent-horizontal.png" alt="Sayso" className="h-8" />
            </a>
            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              Win the Moment — your real-time call superpower.
            </p>
          </div>

          {/* Right Column: Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-3">
              <h3 className="text-xs tracking-widest uppercase text-[#FFDE59] font-bold">Product</h3>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">How it works</a></li>
                <li><a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#book-demo" className="text-sm text-white/70 hover:text-white transition-colors">Book a demo</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs tracking-widest uppercase text-[#FFDE59] font-bold">Company</h3>
              <ul className="space-y-2">
                <li><a href="#security" className="text-sm text-white/70 hover:text-white transition-colors">Security</a></li>
                <li><a href="#help" className="text-sm text-white/70 hover:text-white transition-colors">Help</a></li>
                <li><a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xs tracking-widest uppercase text-[#FFDE59] font-bold">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-sm text-white/70 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#terms" className="text-sm text-white/70 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 512 512" fill="none" className="inline-block">
              <path d="M294.4 25.6L115.2 281.6H256L217.6 486.4L396.8 230.4H256L294.4 25.6Z" fill="currentColor" stroke="currentColor" strokeWidth="20"/>
            </svg>
            &copy; 2026 Sayso. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/50">
            <a href="#privacy" className="hover:text-white/70 transition-colors">Privacy</a>
            <span>&bull;</span>
            <a href="#terms" className="hover:text-white/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Subtle superhero Easter egg in corner */}
      <div className="absolute bottom-4 right-4 pointer-events-none">
        <Image
          src="/sayso_superhero_point_right.png"
          alt=""
          width={48}
          height={51}
          className="w-10 md:w-12 h-auto opacity-20"
          aria-hidden="true"
        />
      </div>
    </footer>
  );
}
