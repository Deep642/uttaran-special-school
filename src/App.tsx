import React from 'react';
import { NoticeBanner } from './components/NoticeBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Advisory Banner */}
      <NoticeBanner />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Programs />
        <TeamSection />
        <AlumniSection />
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
