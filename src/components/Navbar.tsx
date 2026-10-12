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
    { label: "Faculty & Staff", href: "#team" },
    { label: "Alumni Pride", href: "#alumni" },
    { label: "Campus Gallery", href: "#gallery" },
    { label: "Support & Donate", href: "#donate" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80' : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Name */}
          <a href="#" className="flex items-center gap-1.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-0.5 sm:p-1">
            <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-sm sm:text-xl tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                UTTARAN
              </span>
              <span className="hidden sm:block text-xs font-semibold text-emerald-700 tracking-wide uppercase mt-0.5">
                Special School • Berhampore
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors py-2 border-b-2 border-transparent hover:border-emerald-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Quick Call Button (Always visible on mobile & desktop) */}
            <a
              href={`tel:${schoolInfo.contacts.phonePrimary}`}
              aria-label="Call school directly"
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200/90 px-2 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors shadow-2xs"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-700" />
              <span>Call</span>
            </a>

            {/* Contact Us button (Always visible on mobile & desktop) */}
            <a
              href="#contact"
              aria-label="Contact us"
              className="inline-flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-semibold text-slate-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 shadow-2xs"
            >
              <span>Contact</span>
            </a>

            {/* Donate Now Button */}
            <a
              href="#donate"
              aria-label="Donate now"
              className="inline-flex items-center justify-center gap-1 rounded-lg bg-amber-400 px-2 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-bold text-slate-950 shadow-xs transition-colors hover:bg-amber-500"
            >
              <Heart className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">Donate</span>
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
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 transition-all fade-in">
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
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
            >
              Contact Us
            </a>

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
