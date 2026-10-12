import React, { useState } from 'react';
import { Camera, Eye, Filter, ExternalLink } from 'lucide-react';
import { galleryItems, GalleryItem } from '../data/gallery';
import { PhotoModal } from './Modals';

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

  const categories = [
    { id: 'all', label: 'All Moments' },
    { id: 'classroom', label: 'Classrooms & Living' },
    { id: 'therapy', label: 'Sensory & Therapy' },
    { id: 'crafts', label: 'Handicrafts & Art' },
    { id: 'events', label: 'Events & Festivals' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleOpenPhoto = (item: GalleryItem) => {
    setActivePhoto({
      isOpen: true,
      title: item.title,
      description: item.description,
      imageUrl: item.imageUrl,
    });
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <Camera className="w-4 h-4 text-emerald-700" />
            <span>Campus & Daily Life</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Classrooms, Therapy & Creative Wings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A glimpse into the loving, adaptive spaces where our children explore sensory stimulation, artistic expression, and independent life routines.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenPhoto(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all cursor-pointer flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-xs flex items-center gap-1.5 text-xs font-semibold">
                    <Eye className="w-4 h-4" />
                    <span>View Image</span>
                  </div>
                </div>
                <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white/90 text-slate-800 text-[10px] font-bold shadow-2xs backdrop-blur-xs">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Page Social Highlights Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase mb-1">
              <span>অফিসিয়াল ফেসবুক পেজ • Official Facebook Page</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Watch Videos & Daily Student Moments on Facebook
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Explore cultural performances, sports day videos, therapy milestones, and festival celebrations shared directly on the school's official page.
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
