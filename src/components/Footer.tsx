import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import { sounds } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sounds.playChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-900 border border-emerald-500/30 flex items-center justify-center text-xl shadow-inner">
            🐼
          </div>
          <div>
            <p className="font-display font-bold text-neutral-200 text-sm">
              Dedicated to My Elder Sister's 22nd Birthday • 13th September 🎂
            </p>
            <p className="text-xs text-neutral-400">
              She is my elder sister, and only I get to call her Panda 🐼
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span>Made with endless love & laughter</span>
          <button
            type="button"
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-700 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
