import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Heart, HeartHandshake } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Brochures", href: "#brochures" },
    { label: "Faculty & Staff", href: "#team" },
    // { label: "Alumni Pride", href: "#alumni" },
    { label: "Campus Gallery", href: "#gallery" },
    { label: "Support & Donate", href: "#donate" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90' : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-2xs'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & School Name */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-0.5 sm:p-1">
            <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-emerald-300 shadow-xs shrink-0 group-hover:scale-105 transition-transform bg-white">
              <img
                src="/uttaran-logo.jpg"
                alt="Uttaran Special School Official Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-rose-700 text-xs sm:text-lg lg:text-xl tracking-tight leading-none group-hover:text-rose-800 transition-colors whitespace-nowrap">
                  UTTARAN SPECIAL SCHOOL
                </span>
                <span className="hidden xs:inline-block text-[10px] sm:text-xs font-bold text-sky-800 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                  উত্তরণ
                </span>
              </div>
              <span className="hidden sm:block text-[11px] font-semibold text-emerald-700 tracking-wide uppercase mt-0.5">
                For Differently Able • Berhampore
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-bold text-slate-700 hover:text-rose-600 transition-colors py-2 border-b-2 border-transparent hover:border-rose-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* Donation Button with Emerald Combination */}
            <a
              href="#donate"
              aria-label="Make a donation"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-emerald-900 shadow-2xs transition-colors hover:bg-emerald-200 hover:border-emerald-400"
            >
              <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-700 fill-emerald-600" />
              <span>Donation</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden rounded-lg p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl px-4 pt-3 pb-6 max-h-[calc(100vh-4.5rem)] overflow-y-auto transition-all fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${schoolInfo.contacts.phonePrimary}`}
                className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-lg font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call {schoolInfo.contacts.phoneFormatted}</span>
              </a>

              <a
                href={schoolInfo.mapDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 text-white rounded-lg font-semibold text-sm shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Us Near Laldighi on Map</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
