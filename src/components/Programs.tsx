import React, { useState } from 'react';
import {
  BookOpen,
  MessageSquare,
  Activity,
  Accessibility,
  Sparkles,
  ClipboardList,
  Briefcase,
  Check,
  ArrowRight,
  ShieldCheck,
  Users,
  Award,
} from 'lucide-react';
import { developmentalPrograms } from '../data/programs';

export const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(developmentalPrograms[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Accessibility':
        return <Accessibility className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'ClipboardList':
        return <ClipboardList className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const selectedProgram = developmentalPrograms.find((p) => p.id === activeTab) || developmentalPrograms[0];

  return (
    <section id="programs" className="py-16 sm:py-24 bg-gradient-to-br from-sky-50/70 via-emerald-50/50 via-amber-50/60 to-rose-50/60 relative overflow-hidden">
      {/* Background ambient color flares */}
      <div className="absolute top-1/4 -right-12 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-12 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-700" />
            <span>আমাদের বিশেষ সুবিধাসমূহ • Clinical & Educational Wings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Specialized Care & Adaptive Learning Wings
          </h2>
          <p className="text-sm sm:text-base text-emerald-800 font-semibold mb-2">
            "আপনার সন্তান কি কথা বলতে দেরি করছে? বা মনোযোগ ও আচরণে কোনো বিশেষ সহায়তার প্রয়োজন রয়েছে? 'উত্তরণ' রয়েছে আপনার সন্তানের পাশে।"
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Each child receives compassionate, milestone-based rehabilitation under experienced educators, certified therapists, and our regular visiting clinical specialist panel from Kolkata.
          </p>
        </div>

        {/* 3 Core Highlights from Official Brochure */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100/60 p-5 rounded-2xl border-2 border-emerald-200/90 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30 flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-emerald-950">অভিজ্ঞ স্পেশাল এডুকেটর ও থেরাপিস্ট</h4>
              <p className="text-xs text-slate-700 mt-1 font-medium">Empathetic, certified faculty with specialized Kolkata clinical panel guidance.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100/60 p-5 rounded-2xl border-2 border-sky-200/90 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-md shadow-sky-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-sky-950">নিরাপদ ও আধুনিক শিশুবান্ধব পরিবেশ</h4>
              <p className="text-xs text-slate-700 mt-1 font-medium">Therapy-equipped sensory rooms, safety padding, and calm adaptive learning areas.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-5 rounded-2xl border-2 border-amber-200/90 shadow-sm hover:shadow-md transition-all flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/30 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-amber-950">সুনির্দিষ্ট উন্নয়ন পরিকল্পনা (IEP)</h4>
              <p className="text-xs text-slate-700 mt-1 font-medium">1:1 Individualized Education & Care Plan tailored to every child's milestone pace.</p>
            </div>
          </div>
        </div>

        {/* Tab Selector for Quick Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {developmentalPrograms.map((prog, pIdx) => {
            const isActive = prog.id === activeTab;
            const tabGradients = [
              'bg-gradient-to-r from-rose-600 to-rose-700',
              'bg-gradient-to-r from-sky-600 to-sky-700',
              'bg-gradient-to-r from-emerald-600 to-emerald-700',
              'bg-gradient-to-r from-amber-600 to-amber-700',
            ];
            const activeBg = tabGradients[pIdx % 4];

            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-xs ${
                  isActive
                    ? `${activeBg} text-white shadow-md scale-102 ring-2 ring-white`
                    : 'bg-white/90 text-slate-700 border-2 border-slate-200 hover:border-emerald-300 hover:bg-white hover:text-slate-900'
                }`}
              >
                {getIcon(prog.icon)}
                <span>{prog.name.split(' ')[0]} {prog.name.split(' ')[1] || ''}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Program Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase bg-emerald-100 text-emerald-800 mb-2">
                {selectedProgram.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
                {selectedProgram.name}
              </h3>

              <p className="text-base font-semibold text-emerald-800 mb-2">
                {selectedProgram.bengaliName}
              </p>

              <div className="inline-block px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium mb-4">
                🎯 {selectedProgram.focusTag}
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3">
                {selectedProgram.summary}
              </p>

              <p className="text-xs sm:text-sm text-slate-500 italic mb-6">
                "{selectedProgram.bengaliSummary}"
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  Primary Developmental Milestones & Goals:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProgram.keyGoals.map((goal, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 leading-snug">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                  Therapeutic Interventions & Methods:
                </h4>
                <div className="space-y-2">
                  {selectedProgram.methodologies.map((method, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <ArrowRight className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Overview / Quick Reference */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-6 sm:p-7 rounded-2xl border border-emerald-100/80">
              <h4 className="text-base font-bold text-slate-900 mb-1">
                All 7 Specialized Domains
              </h4>
              <p className="text-xs text-slate-500 mb-4">Click any domain to inspect therapeutic scope:</p>

              <div className="space-y-2.5">
                {developmentalPrograms.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      item.id === activeTab
                        ? 'bg-white border-emerald-500 shadow-xs ring-1 ring-emerald-500'
                        : 'bg-white/70 border-slate-200/70 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-xs font-bold text-emerald-800">{item.badge}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-900 truncate">{item.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{item.bengaliName}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/60">
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900">
                  <p className="text-xs font-bold mb-1">🌟 নতুন সেশনে ভর্তি চলছে (New Session Open)</p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Personalized assessments (IEP) are open for all age groups at our Dhopaghati centre. Contact Principal Partha Bhattacharjee directly to schedule an assessment.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-3.5 w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors shadow-2xs"
                >
                  Schedule Child Assessment <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
