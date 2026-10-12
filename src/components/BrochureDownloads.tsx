import React from 'react';
import { Download, FileText, BookOpen, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface BrochureItem {
  title: string;
  bengaliTitle: string;
  language: string;
  description: string;
  bengaliDescription: string;
  fileUrl: string;
  fileName: string;
  badge: string;
  colorScheme: {
    border: string;
    badgeBg: string;
    badgeText: string;
    buttonBg: string;
    iconBg: string;
    cardBg: string;
  };
}

const brochureList: BrochureItem[] = [
  {
    title: 'Institutional Souvenir & Clinical Overview',
    bengaliTitle: 'উত্তরণ সুভ্যেনির ও প্রাতিষ্ঠানিক বিবরণী',
    language: 'English (English Edition)',
    badge: 'English Edition',
    description: 'Comprehensive institutional souvenir, historical background, milestones since 2016, and professional rehabilitation methodologies.',
    bengaliDescription: 'বিদ্যালয়ের সুদীর্ঘ পথচলা, থেরাপি ও শিক্ষকগণের পরিচিতি এবং সামগ্রিক কর্মপরিকল্পনা।',
    fileUrl: '/brochures/Uttaran_Special_School_Souvenir_English.pdf',
    fileName: 'Uttaran_Special_School_Souvenir_English.pdf',
    colorScheme: {
      border: 'border-sky-300 hover:border-sky-500',
      badgeBg: 'bg-sky-100 text-sky-800 border-sky-300',
      badgeText: 'text-sky-800',
      buttonBg: 'bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white shadow-sky-600/30',
      iconBg: 'bg-sky-500 text-white shadow-sky-500/30',
      cardBg: 'bg-gradient-to-br from-sky-50/80 via-white to-sky-100/40',
    },
  },
  {
    title: 'Commemorative Smoronika (Special Edition)',
    bengaliTitle: 'বিশেষ স্মরণিকা ও বার্ষিক প্রতিবেদন',
    language: 'Bengali (বাংলা সংস্করণ)',
    badge: 'Bengali Edition',
    description: 'Cultural events, child milestone achievements, patron messages, and community inclusion reports from Berhampore.',
    bengaliDescription: 'সাংস্কৃতিক অনুষ্ঠান, বার্ষিক ক্রীড়া, শিক্ষার্থীদের সাফল্য ও বিশিষ্টজনদের শুভেচ্ছাবার্তা সম্বলিত সংকলন।',
    fileUrl: '/brochures/Uttaran_Special_School_Smoronika.pdf',
    fileName: 'Uttaran_Special_School_Smoronika.pdf',
    colorScheme: {
      border: 'border-emerald-300 hover:border-emerald-500',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      badgeText: 'text-emerald-900',
      buttonBg: 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-emerald-600/30',
      iconBg: 'bg-emerald-500 text-white shadow-emerald-500/30',
      cardBg: 'bg-gradient-to-br from-emerald-50/80 via-white to-emerald-100/40',
    },
  },
];

export const BrochureDownloads: React.FC = () => {
  return (
    <section id="brochures" className="scroll-mt-20 py-16 sm:py-20 bg-gradient-to-br from-rose-50/60 via-amber-50/60 via-sky-50/60 to-emerald-50/60 border-y border-slate-200/70 relative overflow-hidden">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-rose-300/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-sky-300/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 shadow-2xs">
            <div className="flex -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
            </div>
            <span>ডাউনলোড করুন • Official Institutional Documents</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Download School Brochures & Souvenirs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Access and download our official prospectus and souvenir editions in both <strong>English</strong> and <strong>Bengali (বাংলা)</strong> for complete admission details and clinical care guidance.
          </p>
        </div>

        {/* Brochure Download Cards Grid (2 Balanced Editions: English Edition & Bengali Edition) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {brochureList.map((item, idx) => (
            <div
              key={idx}
              className={`${item.colorScheme.cardBg} backdrop-blur-md rounded-3xl border-2 ${item.colorScheme.border} p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5`}
            >
              <div>
                {/* Header Tag & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[11px] font-extrabold uppercase px-3 py-1 rounded-full border ${item.colorScheme.badgeBg}`}>
                    {item.badge}
                  </span>
                  <div className={`w-11 h-11 rounded-2xl ${item.colorScheme.iconBg} flex items-center justify-center shadow-md`}>
                    <FileText className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-700 mb-3">
                  {item.bengaliTitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                  {item.description}
                </p>
                <p className="text-xs text-slate-500 font-medium italic mb-6">
                  {item.bengaliDescription}
                </p>
              </div>

              {/* Download & View Actions */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center gap-2.5">
                <a
                  href={item.fileUrl}
                  download={item.fileName}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm ${item.colorScheme.buttonBg} shadow-md active:scale-95 transition-all`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-2xs transition-colors shrink-0"
                  title="Open PDF in new tab"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>View</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
