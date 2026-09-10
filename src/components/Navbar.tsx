import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import { triggerPandaShower } from './PandaEffects';

export const Navbar: React.FC = () => {
  const triggerCelebration = () => {
    sounds.playCelebration();
    triggerPandaShower();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#10b981', '#f59e0b', '#ec4899', '#ffffff', '#3b82f6']
    });
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-neutral-900/85 border-b border-neutral-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#hero" 
          id="nav-brand-link"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-full bg-neutral-800 border border-emerald-500/30 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
            🐼
          </div>
          <div>
            <span className="font-display font-bold text-lg sm:text-xl text-neutral-100 tracking-tight flex items-center gap-1.5">
              Panda<span className="text-emerald-400">.</span>22nd
            </span>
            <span className="hidden sm:block text-[11px] font-medium text-emerald-400/90 -mt-1 tracking-wider uppercase">
              13th September • Happy Birthday Panda!
            </span>
          </div>
        </a>

        {/* Quick Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-300">
          <a 
            href="#story" 
            id="nav-story-link"
            className="px-3 py-1.5 rounded-md hover:text-emerald-300 hover:bg-neutral-800/60 transition-colors"
          >
            The Story
          </a>
          <a 
            href="#gallery" 
            id="nav-gallery-link"
            className="px-3 py-1.5 rounded-md hover:text-emerald-300 hover:bg-neutral-800/60 transition-colors"
          >
            Memories
          </a>
          <a 
            href="#midnight-calls" 
            id="nav-calls-link"
            className="px-3 py-1.5 rounded-md hover:text-emerald-300 hover:bg-neutral-800/60 transition-colors"
          >
            Midnight Calls 🌙
          </a>
          <a 
            href="#facts" 
            id="nav-facts-link"
            className="px-3 py-1.5 rounded-md hover:text-emerald-300 hover:bg-neutral-800/60 transition-colors"
          >
            Panda Facts 🎋
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Milestone Tag */}
          <div className="hidden xs:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800/90 border border-neutral-700 text-neutral-300 text-xs font-semibold">
            <span className="text-amber-400">🎂</span>
            <span>13 Sept • Turning 22</span>
          </div>

          <button
            type="button"
            id="nav-celebrate-btn"
            onClick={triggerCelebration}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/25 hover:border-emerald-400 active:scale-95 transition-all shadow-sm cursor-pointer"
            title="Celebrate with Confetti & Music"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 animate-pulse" />
            <span>Celebrate!</span>
          </button>
        </div>
      </div>
    </header>
  );
};
