import React, { useState } from 'react';
import { Info, X, PhoneCall } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export const NoticeBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-amber-500/10 border-b border-amber-200/80 text-amber-900 px-4 py-2.5 text-xs sm:text-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1">
          <span className="p-1 rounded-full bg-amber-500/20 text-amber-800 shrink-0">
            <Info className="w-4 h-4" />
          </span>
          <p className="font-medium text-slate-700 leading-snug">
            <strong className="text-amber-900 font-semibold">Admissions & Verification Notice: </strong>
            To arrange personalized assessments or verify visit timings at Raninagar / Laldighi, please call us directly before arriving.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${schoolInfo.contacts.phonePrimary}`}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium text-xs whitespace-nowrap transition-colors shadow-xs"
          >
            <PhoneCall className="w-3.5 h-3.5 shrink-0" />
            <span>Call School</span>
          </a>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss notice"
            className="p-1 rounded-md text-amber-800/70 hover:text-amber-900 hover:bg-amber-500/15 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
