'use client';

import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Security', href: '#security' },
  { label: 'Help', href: '#help' },
];

export default function SaysoNavbarV3() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    function handleEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    }
    if (isMobileMenuOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-4 z-50 flex justify-center px-4" aria-label="Main navigation">
      <div className="relative w-full max-w-[1200px]">
        {/* Main Navbar — comic border style */}
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6 rounded-full bg-white border-2 border-[#1D4871] v2-comic-shadow-sm">
          {/* Logo */}
          <a
            href="/v2"
            className="flex items-center gap-2 text-[#1D4871] font-bold text-lg md:text-xl hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded-lg px-2 -ml-2"
            aria-label="Sayso home"
          >
            <img src="/logo-pos-horizontal.png" alt="Sayso" className="h-8" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#1D4871] font-bold text-sm md:text-base hover:text-[#2367EE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2 rounded-lg px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            <a
              href="#get-started"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#2367EE] text-white font-bold text-sm md:text-base v2-comic-btn border-2 border-[#1D4871] focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2"
            >
              Get Started
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#1D4871] hover:bg-[#FFDE59]/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#2367EE] focus:ring-offset-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white border-2 border-[#1D4871] v2-comic-shadow overflow-hidden"
          >
            <div className="py-4 px-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-[#1D4871] font-bold text-base hover:bg-[#FFDE59]/20 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full mt-3 px-4 py-3 rounded-full bg-[#2367EE] text-white font-bold text-base text-center v2-comic-btn border-2 border-[#1D4871]"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
