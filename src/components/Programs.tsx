import React, { useState } from 'react';
import { Sparkles, BookOpen, HeartHandshake, Briefcase, Check, ArrowRight } from 'lucide-react';
import { developmentalPrograms } from '../data/programs';

export const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(developmentalPrograms[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const selectedProgram = developmentalPrograms.find((p) => p.id === activeTab) || developmentalPrograms[0];

  return (
    <section id="programs" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Programs & Wings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            Our 4 Developmental Milestone Wings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Students are placed based on their personal abilities, developmental milestones, and sensory comfort rather than chronological age or standard numbered classes.
          </p>
        </div>

        {/* Tab Selector for Quick Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {developmentalPrograms.map((prog) => {
            const isActive = prog.id === activeTab;
            return (
              <button
                key={prog.id}
                onClick={() => setActiveTab(prog.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20 scale-102'
                    : 'bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {getIcon(prog.icon)}
                <span>{prog.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Program Card */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 sm:p-10 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase bg-emerald-100 text-emerald-800 mb-3">
                {selectedProgram.badge} • {selectedProgram.focusAge}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                {selectedProgram.name}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {selectedProgram.summary}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Primary Milestones & Growth Goals:
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
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  Methods & Gentle Interventions:
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
              <h4 className="text-base font-bold text-slate-900 mb-4">
                All 4 Wings at a Glance
              </h4>
              <div className="space-y-3">
                {developmentalPrograms.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      item.id === activeTab
                        ? 'bg-white border-emerald-500 shadow-xs'
                        : 'bg-white/60 border-slate-200/70 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-800">{item.badge}</span>
                      <span className="text-[11px] text-slate-500">{item.focusAge.split(' ')[0]} {item.focusAge.split(' ')[1]}</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800 truncate">{item.name}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200/60">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <em>Have questions about which wing suits your child?</em> Our experienced special educators evaluate individual developmental profiles to design customized daily routines.
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                >
                  Schedule an exploratory visit <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
