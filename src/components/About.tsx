import React from 'react';
import { Heart, Compass, CheckCircle2, ShieldAlert, Award, Smile } from 'lucide-react';
import { schoolInfo } from '../data/schoolInfo';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Smile,
      title: "Child-Centric Dignity",
      description: "Every child is accepted with warmth, patience, and absolute respect for their unique pace and emotional comfort.",
    },
    {
      icon: Compass,
      title: "Milestone-Based Growth",
      description: "We abandon the stress of academic grade exams, focusing entirely on cognitive, sensory, and motor milestones.",
    },
    {
      icon: Heart,
      title: "Holistic Daily Care",
      description: "From sensory calm corners to toilet training, eating etiquette, and hygiene, we teach what truly builds independence.",
    },
    {
      icon: Award,
      title: "Vocational Pathways",
      description: "Guiding older adolescents into handcrafted arts, basic computing, and community tasks that instill lifelong pride.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            About Our Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            Nurturing Potential Without Conventional Pressure
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Started in 2016 as <em>"Uttaran Spastic Society"</em> and formally established on February 6, 2020 as <strong>Uttaran Special School</strong> at Dhopaghati, Berhampore, our center provides a loving, dignified sanctuary for children with neurodevelopmental and physical diversity.
          </p>
        </div>

        {/* Narrative & Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              Why We Operate as a Developmental Learning Center, Not a Conventional School
            </h3>
            
            <p className="text-slate-600 leading-relaxed">
              Standard schools expect every student of a certain age to fit into numbered classes (Class 1 to Class 10), following rigid curriculums and high-pressure written examinations. For children on the autism spectrum, with Down syndrome, cerebral palsy, or speech & cognitive delays, this environment can cause emotional distress.
            </p>

            <p className="text-slate-600 leading-relaxed">
              At <strong>Uttaran Special School</strong>, we group children by their individual developmental readiness. A 10-year-old child working on speech begins with gentle sensory and verbal foundations, while an adolescent learns practical budgeting and handicrafts. Our triumph is seen in smiles, self-confidence, and self-reliance.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">
                  <strong>Zero-pressure learning atmosphere:</strong> No pass/fail rankings; only celebrated personal milestones.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">
                  <strong>Adaptive learning tools:</strong> Visual cue cards, sensory play sand, rhythmic instruments, and ergonomic seating.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 font-medium">
                  <strong>Family coaching:</strong> Guiding parents on home routines, behavioral de-escalation, and dignity.
                </p>
              </div>
            </div>
          </div>

          {/* Side Card: The Uttaran Difference */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-slate-50 p-6 sm:p-8 rounded-3xl border border-emerald-200/80 shadow-xs">
            <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              The Uttaran Core Philosophy
            </h4>

            <div className="space-y-4">
              <div className="p-4 bg-white/90 rounded-xl border border-emerald-100 shadow-2xs">
                <p className="text-xs uppercase font-bold tracking-wider text-emerald-700 mb-1">Observation First</p>
                <p className="text-sm text-slate-700">Detailed assessment of each child's sensory triggers, physical mobility, and communication preferences before formulating a daily schedule.</p>
              </div>

              <div className="p-4 bg-white/90 rounded-xl border border-emerald-100 shadow-2xs">
                <p className="text-xs uppercase font-bold tracking-wider text-emerald-700 mb-1">Functional Autonomy</p>
                <p className="text-sm text-slate-700">Prioritizing the ability to feed oneself, convey basic health needs, and express distress without resorting to agitation.</p>
              </div>

              <div className="p-4 bg-white/90 rounded-xl border border-emerald-100 shadow-2xs">
                <p className="text-xs uppercase font-bold tracking-wider text-emerald-700 mb-1">Community Integration</p>
                <p className="text-sm text-slate-700">Organizing visits, craft fairs, and festival celebrations in Berhampore so students belong warmly in society.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Advisory Box for Parents */}
        <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/70 border border-amber-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-base font-bold text-amber-950">Important Parent Notice Regarding Visits</h4>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed mt-0.5">
                {schoolInfo.statusNotice}
              </p>
            </div>
          </div>
          <a
            href={`tel:${schoolInfo.contacts.phonePrimary}`}
            className="shrink-0 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold text-xs sm:text-sm shadow-xs transition-colors self-stretch md:self-auto text-center"
          >
            Direct Verification Call
          </a>
        </div>
      </div>
    </section>
  );
};
