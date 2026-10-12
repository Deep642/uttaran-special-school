import React, { useState } from 'react';
import { Camera, Eye, ExternalLink, Play, Video, Sparkles } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/gallery';
import { PhotoModal, VideoModal } from './Modals';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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

  const [activeVideo, setActiveVideo] = useState<{
    isOpen: boolean;
    title: string;
    videoUrl: string;
    studentName: string;
  }>({
    isOpen: false,
    title: '',
    videoUrl: '',
    studentName: 'Uttaran Special School',
  });

  const categories = [
    { id: 'all', label: 'All Moments (সকল মুহূর্ত)', color: 'border-slate-300' },
    { id: 'videos', label: '▶ Videos (ভিডিও গ্যালারি)', color: 'border-rose-400 text-rose-700' },
    { id: 'classroom', label: 'Classrooms (শ্রেণিকক্ষ)', color: 'border-sky-400 text-sky-700' },
    { id: 'therapy', label: 'Therapy & Care (থেরাপি)', color: 'border-emerald-400 text-emerald-700' },
    { id: 'crafts', label: 'Crafts & Art (হস্তশিল্প)', color: 'border-amber-400 text-amber-700' },
    { id: 'events', label: 'Events & Sports (অনুষ্ঠান)', color: 'border-rose-400 text-rose-700' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleCardClick = (item: GalleryItem) => {
    if (item.mediaType === 'video' && item.videoUrl) {
      setActiveVideo({
        isOpen: true,
        title: item.title,
        videoUrl: item.videoUrl,
        studentName: item.bengaliTitle || 'Uttaran Special School',
      });
    } else {
      setActivePhoto({
        isOpen: true,
        title: item.title,
        description: item.description,
        imageUrl: item.imageUrl,
      });
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Logo 4-Color Accent Dots */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 text-xs sm:text-sm font-bold uppercase mb-3 shadow-2xs">
            <div className="flex -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
            </div>
            <span>ক্যাম্পাস গ্যালারি ও ভিডিও • Campus Gallery & Events</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Authentic Classroom, Therapy & Event Moments
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Real snapshots and video recordings of our students learning, practicing daily living routines, creating art, and celebrating festivals at Dhopaghati, Berhampore.
          </p>
        </div>

        {/* Filter Pills with Logo Palette Harmony */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md scale-102 ring-2 ring-slate-900'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item) => {
            const isVideo = item.mediaType === 'video';

            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image / Video Poster Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-950">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-xs ${
                        isVideo
                          ? 'bg-rose-600 text-white'
                          : item.category === 'therapy'
                          ? 'bg-emerald-600 text-white'
                          : item.category === 'classroom'
                          ? 'bg-sky-600 text-white'
                          : item.category === 'crafts'
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-900 text-white'
                      }`}
                    >
                      {item.categoryLabel}
                    </span>

                    {isVideo && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold backdrop-blur-xs">
                        <Video className="w-3 h-3 text-rose-400" />
                        <span>{item.duration || 'Video'}</span>
                      </span>
                    )}
                  </div>

                  {/* Center Play Button for Videos or Zoom for Photos */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {isVideo ? (
                      <div className="w-13 h-13 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-rose-600 transition-transform duration-300 ring-4 ring-white/30">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-xs text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-md">
                        <Eye className="w-5 h-5 text-slate-900" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 mb-1.5 line-clamp-1">
                      {item.bengaliTitle}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {isVideo && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600">
                      <span>Click to Play Recording</span>
                      <Play className="w-3 h-3 fill-rose-600" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Facebook Page Social Highlights Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase mb-1">
              <span>অফিসিয়াল ফেসবুক পেজ • Official Facebook Page</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Watch More Daily Campus Videos & Updates on Facebook
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Explore cultural performances, sports day videos, therapy milestones, and festival celebrations shared directly on our official Facebook community.
            </p>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61565479896427"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Visit Facebook Page</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      <PhotoModal
        isOpen={activePhoto.isOpen}
        onClose={() => setActivePhoto((prev) => ({ ...prev, isOpen: false }))}
        title={activePhoto.title}
        description={activePhoto.description}
        imageUrl={activePhoto.imageUrl}
      />

      {/* Video Player Modal */}
      <VideoModal
        isOpen={activeVideo.isOpen}
        onClose={() => setActiveVideo((prev) => ({ ...prev, isOpen: false }))}
        videoTitle={activeVideo.title}
        videoUrl={activeVideo.videoUrl}
        studentName={activeVideo.studentName}
      />
    </section>
  );
};
