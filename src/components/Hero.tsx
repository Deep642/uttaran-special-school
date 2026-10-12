import React from 'react';
import { Phone, MapPin, Sparkles, ArrowRight, ShieldCheck, Heart, Users } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 bg-gradient-to-b from-emerald-50/50 via-[#FDFDFB] to-[#FBFBFA]">
      {/* Decorative subtle ambient circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-semibold mb-5 shadow-2xs">
            <div className="flex -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
            </div>
            <span>প্রতিটি শিশুই অনন্য, প্রতিটি শিশুই সম্ভাবনাময় • Berhampore</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
            Empowering Every Child to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-sky-600 to-emerald-600">
              Learn, Grow & Flourish
            </span>
          </h1>

          <p className="text-sm sm:text-base font-bold text-slate-800 mb-3">
            <span className="text-rose-600 font-extrabold">উত্তরণ: </span>
            বিশেষ চাহিদাসম্পন্ন শিশুদের স্নেহময় ও নির্ভরযোগ্য ঠিকানা
          </p>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Situated at Dhopaghati, Berhampore, <strong>Uttaran Special School</strong> nurtures children through individualized therapies (IEP), speech and occupational development, and cheerful community inclusion.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {/* Direct Mobile Quick Actions (Immediately visible on phones above the fold) */}
            <div className="grid grid-cols-2 gap-2.5 w-full sm:hidden">
              <a
                href={`tel:${schoolInfo.contacts.phonePrimary}`}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-rose-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md shadow-rose-600/20"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call School</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-white active:scale-95 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>Contact Us</span>
              </a>
            </div>

            <a
              href="#programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-semibold text-sm sm:text-base rounded-xl shadow-md shadow-slate-900/20 hover:shadow-lg transition-all"
            >
              <span>Explore Clinical Wings</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </a>

            <a
              href={`tel:${schoolInfo.contacts.phonePrimary}`}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 active:scale-95 text-slate-800 font-semibold text-sm sm:text-base rounded-xl border border-slate-300/80 shadow-xs hover:border-emerald-300 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Desk: {schoolInfo.contacts.phoneFormatted}</span>
            </a>

            <a
              href={schoolInfo.mapDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-sky-50 hover:bg-sky-100 active:scale-95 text-sky-900 font-semibold text-sm sm:text-base rounded-xl border border-sky-200 transition-all"
            >
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Locate on Map</span>
            </a>
          </div>
        </div>

        {/* Highlight cards styled with the 4 Logo Colors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-200/70">
          {schoolInfo.stats.map((stat, idx) => {
            const cardTheme = [
              { bg: 'bg-rose-50/70', border: 'border-rose-200/80', iconBg: 'bg-rose-100 text-rose-700' },
              { bg: 'bg-sky-50/70', border: 'border-sky-200/80', iconBg: 'bg-sky-100 text-sky-700' },
              { bg: 'bg-emerald-50/70', border: 'border-emerald-200/80', iconBg: 'bg-emerald-100 text-emerald-700' },
              { bg: 'bg-amber-50/70', border: 'border-amber-200/80', iconBg: 'bg-amber-100 text-amber-700' },
            ][idx % 4];

            return (
              <div
                key={idx}
                className={`${cardTheme.bg} p-5 rounded-2xl border ${cardTheme.border} shadow-2xs hover:shadow-md transition-all`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg ${cardTheme.iconBg} flex items-center justify-center font-bold text-xs`}>
                    {idx === 0 && <Sparkles className="w-4 h-4" />}
                    {idx === 1 && <Heart className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 3 && <Users className="w-4 h-4" />}
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-0.5">{stat.label}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
