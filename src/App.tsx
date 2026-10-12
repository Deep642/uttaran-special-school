import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhotoMarquee } from './components/PhotoMarquee';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { TeamSection } from './components/TeamSection';
import { AlumniSection } from './components/AlumniSection';
import { GallerySection } from './components/GallerySection';
import { DonationSection } from './components/DonationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50/70 via-rose-50/50 via-sky-50/50 to-emerald-50/60 text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-950 relative overflow-x-hidden">
      {/* Decorative Floating Colorful Light Orbs from the Logo Palette */}
      <div className="fixed top-24 -left-20 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-1/3 -right-20 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed top-2/3 -left-20 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <PhotoMarquee />
        <About />
        <Programs />
        <TeamSection />
        {/* <AlumniSection /> (Temporarily paused as requested) */}
        <GallerySection />
        <DonationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
