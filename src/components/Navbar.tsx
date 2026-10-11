import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, HeartHandshake } from 'lucide-react';
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
    { label: "Contact & Location", href: "#contact" },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80' : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Name */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-1">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight leading-none group-hover:text-emerald-700 transition-colors">
                UTTARAN
              </span>
              <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 tracking-wide uppercase mt-0.5">
                Special School • Berhampore
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors py-2 border-b-2 border-transparent hover:border-emerald-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${schoolInfo.contacts.phonePrimary}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-800 bg-slate-100 hover:bg-emerald-50 rounded-lg border border-slate-200/80 hover:border-emerald-200 transition-all shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{schoolInfo.contacts.phoneFormatted}</span>
            </a>

            <a
              href={schoolInfo.mapDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 rounded-lg shadow-sm transition-all"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Locate on Map</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
