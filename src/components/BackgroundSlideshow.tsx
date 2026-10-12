import React, { useState, useEffect } from 'react';

const bgSlides = [
  {
    url: '/gallery/sports-prize-ceremony.jpg',
    title: 'Annual Sports Celebration',
    accent: 'from-amber-500/10 via-rose-500/10 to-sky-500/10',
  },
  {
    url: '/gallery/world-disability-day.jpg',
    title: 'World Disability Day Observance',
    accent: 'from-sky-500/10 via-emerald-500/10 to-amber-500/10',
  },
  {
    url: '/gallery/annual-sports-stage.jpg',
    title: 'Campus Gathering & Sports Stage',
    accent: 'from-rose-500/10 via-sky-500/10 to-emerald-500/10',
  },
  {
    url: '/gallery/cultural-music-harmonium.jpg',
    title: 'Music & Cultural Expression',
    accent: 'from-amber-500/10 via-emerald-500/10 to-rose-500/10',
  },
  {
    url: '/gallery/currency-learning-session.jpg',
    title: '1:1 Life-Skill & Math Guidance',
    accent: 'from-emerald-500/10 via-sky-500/10 to-amber-500/10',
  },
  {
    url: '/gallery/craft-cotton-swan.jpg',
    title: 'Tactile Cotton Craft Work',
    accent: 'from-rose-500/10 via-amber-500/10 to-sky-500/10',
  },
  {
    url: '/gallery/craft-clay-mandala.jpg',
    title: 'Color Clay Mandala Creation',
    accent: 'from-amber-500/10 via-emerald-500/10 to-rose-500/10',
  },
];

export const BackgroundSlideshow: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % bgSlides.length);
    }, 7000); // Transitions smoothly every 7 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {bgSlides.map((slide, idx) => (
        <div
          key={slide.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Photo photograph with rich warmth and slow zoom */}
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[12000ms] ease-out scale-105"
            style={{
              backgroundImage: `url(${slide.url})`,
              filter: 'saturate(1.25) contrast(1.05)',
              opacity: 0.28,
            }}
          />
          {/* Logo-palette colorized gradient aura */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.accent} mix-blend-color-burn`}
          />
        </div>
      ))}

      {/* Luminous colorful radial lighting orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-rose-400/25 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-sky-400/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-[550px] h-[550px] bg-amber-400/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-400/25 rounded-full blur-[100px] pointer-events-none" />

      {/* Semi-transparent protective scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/45 to-white/60" />
    </div>
  );
};
