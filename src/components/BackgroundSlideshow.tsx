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
          {/* Subtle watermark photograph with smooth ken burns zoom */}
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[10000ms] ease-out scale-105"
            style={{
              backgroundImage: `url(${slide.url})`,
              filter: 'saturate(1.2) blur(1px)',
              opacity: 0.14,
            }}
          />
          {/* Logo-palette colorized tint overlay to keep the site radiant & joyful */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${slide.accent} mix-blend-multiply`}
          />
        </div>
      ))}

      {/* Luminous frosted light overlay ensuring pristine contrast for all foreground text */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]" />
    </div>
  );
};
