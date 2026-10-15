import React, { useState } from 'react';
import {
  Award,
  Heart,
  Quote,
  Users,
  GraduationCap,
  HandHeart,
  CheckCircle,
} from 'lucide-react';
import { leadershipData, staffMembers, StaffMember, StaffDesignationGroup } from '../data/team';

type DesignationTab = 'all' | StaffDesignationGroup;

const StaffCard: React.FC<{ member: StaffMember }> = ({ member }) => {
  const badgeStyle =
    member.designationGroup === 'leadership'
      ? 'bg-amber-100/95 text-amber-900 border border-amber-300'
      : member.designationGroup === 'special-educator'
      ? 'bg-sky-100/95 text-sky-900 border border-sky-300'
      : 'bg-rose-100/95 text-rose-900 border border-rose-300';

  return (
    <div className="bg-[#FCFCFB] rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Photo Header */}
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
          <img
            src={member.photoUrl}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span
            className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold shadow-2xs backdrop-blur-xs ${badgeStyle}`}
          >
            {member.categoryLabel}
          </span>
        </div>

        {/* Body Info */}
        <div className="p-5 space-y-2.5">
          <div>
            <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
              {member.name}
            </h4>
            <p className="text-xs font-semibold text-emerald-800 mt-0.5">
              {member.role}
            </p>
          </div>

          <div className="text-[11px] text-slate-500 leading-snug">
            <p className="font-medium text-slate-700">{member.qualifications}</p>
            <p className="text-slate-500 mt-0.5">
              <strong>Focus:</strong> {member.specialization}
            </p>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed pt-1">
            {member.bioSnippet}
          </p>
        </div>
      </div>

      {/* Footer Experience Pill */}
      <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-[11px]">
        <span className="font-semibold text-emerald-700 flex items-center gap-1">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          {member.experience}
        </span>
        <span className="text-slate-400">Uttaran Family</span>
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DesignationTab>('all');

  const specialEducators = staffMembers.filter((m) => m.designationGroup === 'special-educator');
  const coTeachers = staffMembers.filter((m) => m.designationGroup === 'co-teacher');
  const leadershipMembers = staffMembers.filter((m) => m.designationGroup === 'leadership');

  return (
    <section
      id="team"
      className="py-16 sm:py-24 bg-gradient-to-br from-amber-50/70 via-rose-50/50 to-sky-50/60 border-b border-slate-200/70 relative overflow-hidden"
    >
      {/* Background ambient color flares */}
      <div className="absolute top-10 -left-12 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-12 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <Users className="w-4 h-4 text-emerald-600" />
            <span>Leadership & Dedicated Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            The Hearts & Minds Behind Uttaran
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our certified special educators, co-teachers, and school leadership working with devotion, empathy, and specialized techniques every single day.
          </p>
        </div>

        {/* 1. Founder / Owner's Desk Card */}
        <div className="bg-gradient-to-br from-emerald-50/70 via-teal-50/30 to-slate-50 rounded-3xl border border-emerald-200/80 p-6 sm:p-10 mb-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Image & Title */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="relative inline-block w-48 sm:w-60 aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white shadow-md mx-auto bg-amber-50">
                <img
                  src={leadershipData.photoUrl}
                  alt={leadershipData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 bg-emerald-700 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                  {leadershipData.titleBadge}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {leadershipData.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-0.5">
                  {leadershipData.role}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {leadershipData.credentials}
                </p>
              </div>
            </div>

            {/* Founder's Message & Vision */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-emerald-700">
                <Quote className="w-8 h-8 opacity-40 rotate-180" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                  Vision & Philosophy
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-medium text-slate-800 italic leading-snug">
                "{leadershipData.visionSnippet}"
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                {leadershipData.message}
              </p>

              <div className="pt-4 border-t border-emerald-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                  <Heart className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                  <span>Serving the special needs community of Berhampore & Murshidabad</span>
                </div>
                {leadershipData.contactNote && (
                  <span className="px-3 py-1 bg-white rounded-lg border border-emerald-200 text-emerald-900 font-medium">
                    {leadershipData.contactNote}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Faculty & Staff: Designation-Based Sections with Filter */}
        <div>
          {/* Filter Header and Category Pills */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Faculty & Teaching Team
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Classroom educators and coordinators structured by their specialized designations
              </p>
            </div>

            {/* Designation Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200/80">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Faculty ({staffMembers.length})
              </button>
              <button
                onClick={() => setActiveTab('special-educator')}
                className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'special-educator'
                    ? 'bg-white text-sky-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Special Educators ({specialEducators.length})
              </button>
              <button
                onClick={() => setActiveTab('co-teacher')}
                className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'co-teacher'
                    ? 'bg-white text-rose-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Co-Teachers ({coTeachers.length})
              </button>
              <button
                onClick={() => setActiveTab('leadership')}
                className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'leadership'
                    ? 'bg-white text-amber-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Principal & Coordinator ({leadershipMembers.length})
              </button>
            </div>
          </div>

          {/* Section 1: Special Educators */}
          {(activeTab === 'all' || activeTab === 'special-educator') && (
            <div className="mb-14">
              <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-sky-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 shadow-2xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-extrabold text-slate-900">
                        Special Educators
                      </h4>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                        IDD • H.I • V.I
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Disability-specific educators trained in Intellectual Disability, Hearing Impairment, and Visual Impairment
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200/80">
                  {specialEducators.length} Specialists
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {specialEducators.map((member) => (
                  <StaffCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* Section 2: Co-Teaching Faculty */}
          {(activeTab === 'all' || activeTab === 'co-teacher') && (
            <div className="mb-14">
              <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-rose-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700 shadow-2xs">
                    <HandHeart className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-extrabold text-slate-900">
                        Co-Teaching Faculty
                      </h4>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                        Classroom Learning Support
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Collaborative educators offering direct activity guidance, emotional reassurance, and classroom motor support
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200/80">
                  {coTeachers.length} Member
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-sm sm:max-w-none gap-6">
                {coTeachers.map((member) => (
                  <StaffCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Institutional Leadership & Coordination */}
          {(activeTab === 'all' || activeTab === 'leadership') && (
            <div className="mb-8">
              <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-amber-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 shadow-2xs">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xl font-extrabold text-slate-900">
                        Leadership & Institutional Coordination
                      </h4>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        Principal CUM Coordinator
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Institutional guidance, student IEP assessment oversight, and autism/developmental coordination
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/80">
                  {leadershipMembers.length} Lead
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-sm sm:max-w-none gap-6">
                {leadershipMembers.map((member) => (
                  <StaffCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
