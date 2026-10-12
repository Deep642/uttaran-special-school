import React from 'react';

interface PhotoItem {
  src: string;
  title: string;
  bengaliTag: string;
}

const marqueePhotos: PhotoItem[] = [
  {
    src: "/gallery/sensory-floor-activity.jpg",
    title: "Sensory & Motor Learning",
    bengaliTag: "ইন্দ্রিয়গত ও শারীরিক সমন্বয়",
  },
  {
    src: "/gallery/classroom-blackboard-session.jpg",
    title: "Special Education & Arithmetic",
    bengaliTag: "বিশেষ পাঠদান ও সরল গণনা",
  },
  {
    src: "/gallery/uttaran-creative-art.jpg",
    title: "Creative Art & Name Writing",
    bengaliTag: "রঙিন অক্ষর ও অঙ্কন",
  },
  {
    src: "/gallery/coin-math-numeracy.jpg",
    title: "Functional Numeracy & Coins",
    bengaliTag: "দৈনন্দিন মুদ্রা ও বাস্তব জ্ঞান",
  },
  {
    src: "/gallery/classroom-instruction.jpg",
    title: "1:1 Teacher-Student Guidance",
    bengaliTag: "একক যত্ন ও স্নেহময় পাঠদান",
  },
  {
    src: "/gallery/school-media-22.jpeg",
    title: "Classroom Peer Interaction",
    bengaliTag: "সহপাঠীদের আনন্দময় মেলবন্ধন",
  },
  {
    src: "/gallery/school-media-24.jpeg",
    title: "Motor Coordination Training",
    bengaliTag: "শারীরিক সক্ষমতা বিকাশ",
  },
  {
    src: "/gallery/school-media-27.jpeg",
    title: "Group Learning & Care",
    bengaliTag: "দলগত শিক্ষণ ও পরিচর্যা",
  },
  {
    src: "/gallery/school-media-20.jpeg",
    title: "Campus Cultural Moments",
    bengaliTag: "সাংস্কৃতিক অনুষ্ঠান ও উৎসব",
  },
  {
    src: "/gallery/school-media-17.jpg",
    title: "Student Growth Milestones",
    bengaliTag: "প্রতিটি শিশুর নিজস্ব অগ্রগতি",
  },
];

export const PhotoMarquee: React.FC = () => {
  // Duplicate for seamless 50% loop
  const duplicatedList = [...marqueePhotos, ...marqueePhotos];

  return (
    <div className="relative w-full overflow-hidden py-6 sm:py-8 bg-gradient-to-r from-rose-50/40 via-sky-50/40 via-emerald-50/40 to-amber-50/40 border-y border-slate-200/60 select-none">
      {/* Top subtle badge */}
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 ring-2 ring-white" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white" />
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
            Live Campus Moments • আমাদের প্রাত্যহিক শিক্ষা ও আনন্দের টুকরো ছবি
          </span>
        </div>
        <span className="hidden sm:inline-block text-[11px] text-slate-400 italic">
          Hover to pause sliding
        </span>
      </div>

      {/* Edge gradient fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#FBFBFA] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#FBFBFA] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track */}
      <div className="animate-marquee-left flex gap-4 sm:gap-6 items-center">
        {duplicatedList.map((photo, idx) => (
          <div
            key={idx}
            className="group relative w-56 sm:w-72 h-36 sm:h-44 shrink-0 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg border-2 border-white hover:border-emerald-300 transition-all duration-300 bg-slate-100"
          >
            <img
              src={photo.src}
              alt={photo.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay Gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

            {/* Bottom Tag */}
            <div className="absolute bottom-2.5 left-3 right-3 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
                {photo.bengaliTag}
              </span>
              <p className="text-xs font-semibold leading-tight line-clamp-1">
                {photo.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
