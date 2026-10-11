import React, { useState } from 'react';
import { Play, Image, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { alumniStories, AlumniStory } from '../data/alumni';
import { VideoModal, PhotoModal } from './Modals';

export const AlumniSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<{
    isOpen: boolean;
    title: string;
    url?: string;
    studentName: string;
  }>({
    isOpen: false,
    title: '',
    url: undefined,
    studentName: '',
  });

  const [activePhoto, setActivePhoto] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    imageUrl: string;
  }>({
    isOpen: false,
    title: '',
    description: '',
    imageUrl: '',
  });

  const handleOpenVideo = (student: AlumniStory) => {
    setActiveVideo({
      isOpen: true,
      title: student.videoTitle || `${student.name}'s Milestone Journey`,
      url: student.videoUrl,
      studentName: student.name,
    });
  };

  const handleOpenPhoto = (student: AlumniStory) => {
    const firstImg = student.galleryImages[0];
    if (firstImg) {
      setActivePhoto({
        isOpen: true,
        title: `${student.name} - ${student.achievementTitle}`,
        description: firstImg.caption,
        imageUrl: firstImg.url,
      });
    }
  };

  return (
    <section id="alumni" className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Alumni & Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Our Pride: Stories of Growth & Independence
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Celebrating our former students who are carving their own paths toward confidence, self-reliance, and joy.
          </p>
        </div>

        {/* Stories Card Grid (2-3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {alumniStories.map((story) => (
            <div
              key={story.id}
              className="bg-[#FCFCFB] rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual Thumbnail with Tag */}
                <div className="relative h-44 bg-slate-100 overflow-hidden">
                  <img
                    src={story.galleryImages[0]?.url}
                    alt={`${story.name} vocational practice`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-slate-800 rounded-lg text-xs font-bold shadow-xs">
                    Years: {story.yearsAttended}
                  </span>

                  {/* Name and Current Role Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold leading-tight">{story.name}</h3>
                    <p className="text-xs text-emerald-200 font-medium truncate">{story.currentRole}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100 text-[11px] font-semibold">
                    {story.programFocus}
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    {story.achievementTitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                    {story.storySnippet}
                  </p>

                  {/* Skills Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {story.skillsGained.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Video and Photo Modal Triggers */}
              <div className="p-5 pt-0 border-t border-slate-100/80 mt-4 flex items-center gap-2">
                <button
                  onClick={() => handleOpenVideo(story)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-semibold shadow-xs active:scale-95 transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Watch Video</span>
                </button>

                <button
                  onClick={() => handleOpenPhoto(story)}
                  className="inline-flex items-center justify-center p-2 bg-slate-100 hover:bg-slate-200/80 text-slate-700 rounded-xl text-xs font-semibold active:scale-95 transition-all cursor-pointer"
                  title="View Progress Gallery"
                  aria-label={`View photos of ${story.name}`}
                >
                  <Image className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Consent & Dignity Safeguard Box */}
        <div className="max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 text-xs text-slate-600 leading-relaxed">
          <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <strong className="text-slate-800 font-semibold">Consent & Dignity Safeguard: </strong>
            All student success stories, names, and visual representations are published with prior written permission from parents or legal guardians in adherence to child protection standards and dignity guidelines.
          </div>
        </div>
      </div>

      {/* Lightbox / Video Modals */}
      <VideoModal
        isOpen={activeVideo.isOpen}
        onClose={() => setActiveVideo((prev) => ({ ...prev, isOpen: false }))}
        videoTitle={activeVideo.title}
        videoUrl={activeVideo.url}
        studentName={activeVideo.studentName}
      />

      <PhotoModal
        isOpen={activePhoto.isOpen}
        onClose={() => setActivePhoto((prev) => ({ ...prev, isOpen: false }))}
        title={activePhoto.title}
        description={activePhoto.description}
        imageUrl={activePhoto.imageUrl}
      />
    </section>
  );
};
