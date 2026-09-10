import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PandaStory } from './components/PandaStory';
import { MidnightCallWidget } from './components/MidnightCallWidget';
import { PhotoGallery } from './components/PhotoGallery';
import { PandaFactGenerator } from './components/PandaFactGenerator';
import { PandaEffects } from './components/PandaEffects';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-200 relative">
      {/* Panda Ambient & Interactive Rain Effects */}
      <PandaEffects />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with Live Birthday Countdown to 13th September (Turning 22) */}
        <Hero />

        {/* The Heartfelt Big Sister & Panda Tribute Story */}
        <PandaStory />

        {/* Interactive 00:00 AM Midnight Call Simulator */}
        <MidnightCallWidget />

        {/* 20 Photos Masonry Gallery with Lightbox */}
        <PhotoGallery />

        {/* Interactive Panda Fact & Inside Joke Machine */}
        <PandaFactGenerator />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
