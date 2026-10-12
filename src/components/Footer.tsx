import React from 'react';
import { HeartHandshake, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: School Identity */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-emerald-500/40 bg-white shadow-xs shrink-0">
                <img
                  src="/uttaran-logo.jpg"
                  alt="Uttaran Special School Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-white text-lg tracking-tight block">
                    UTTARAN SPECIAL SCHOOL
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800">
                    উত্তরণ
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 tracking-wider uppercase block">
                  For Differently Able • Berhampore
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {schoolInfo.subTagline}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 flex items-start gap-2.5">
              <Heart className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Dedicated to inclusive education, emotional grounding, sensory integration, and life-skill empowerment.
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Our Philosophy
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-emerald-400 transition-colors">
                  4 Developmental Milestone Wings
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-emerald-400 transition-colors">
                  Leadership & Faculty
                </a>
              </li>
              {/* <li>
                <a href="#alumni" className="hover:text-emerald-400 transition-colors">
                  Alumni & Success Stories
                </a>
              </li> */}
              <li>
                <a href="#gallery" className="hover:text-emerald-400 transition-colors">
                  Campus & Activities Gallery
                </a>
              </li>
              <li>
                <a href="#donate" className="hover:text-emerald-400 transition-colors">
                  Support Our Students
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact & Location Map
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contacts & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>
                  {schoolInfo.address.line1}, {schoolInfo.address.locality}, {schoolInfo.address.landmark}, Berhampore, Murshidabad, WB - {schoolInfo.address.pin}
                </span>
              </div>

              <div className="flex flex-col gap-1 text-xs">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-slate-400">School Desk:</span>
                  <a href={`tel:${schoolInfo.contacts.phonePrimary}`} className="hover:text-emerald-400 text-white font-medium">
                    {schoolInfo.contacts.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2 pl-5.5">
                  <span className="text-slate-400">Principal:</span>
                  <a href={`tel:${schoolInfo.contacts.phoneSecondary}`} className="hover:text-emerald-400 text-white font-medium">
                    {schoolInfo.contacts.phoneSecondaryFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${schoolInfo.contacts.email}`} className="hover:text-emerald-400">
                  {schoolInfo.contacts.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href={schoolInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-blue-900/60 border border-slate-700/80 text-blue-300 hover:text-white transition-colors text-xs font-semibold"
                >
                  <span>Follow on Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex items-center justify-center text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Uttaran Special School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
