import React, { useState } from 'react';
import { PANDA_FACTS } from '../data/insideJokes';
import { InsideJoke } from '../types';
import { Sparkles, Dices, Heart, Copy, Check, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export const PandaFactGenerator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [reactionCounts, setReactionCounts] = useState<Record<number, number>>(() => {
    const initial: Record<number, number> = {};
    PANDA_FACTS.forEach((f) => {
      initial[f.id] = f.reactionCount || 10;
    });
    return initial;
  });

  const currentFact: InsideJoke = PANDA_FACTS[currentIndex];

  const rollRandomFact = () => {
    setIsSpinning(true);
    sounds.playChime();

    // Quick rolling effect
    let rolls = 0;
    const interval = setInterval(() => {
      setCurrentIndex(Math.floor(Math.random() * PANDA_FACTS.length));
      rolls++;
      if (rolls >= 6) {
        clearInterval(interval);
        setIsSpinning(false);
        confetti({
          particleCount: 45,
          spread: 50,
          origin: { y: 0.8 },
          colors: ['#10b981', '#fbbf24', '#f43f5e', '#38bdf8']
        });
      }
    }, 70);
  };

  const handlePrevFact = () => {
    sounds.playChime();
    setCurrentIndex((prev) => (prev === 0 ? PANDA_FACTS.length - 1 : prev - 1));
  };

  const handleNextFact = () => {
    sounds.playChime();
    setCurrentIndex((prev) => (prev === PANDA_FACTS.length - 1 ? 0 : prev + 1));
  };

  const handleHeartReaction = () => {
    sounds.playChime();
    setReactionCounts((prev) => ({
      ...prev,
      [currentFact.id]: (prev[currentFact.id] || 0) + 1,
    }));
  };

  const copyFact = async () => {
    try {
      await navigator.clipboard.writeText(`"${currentFact.quote}" — Panda Fact #${currentFact.id}`);
      setCopied(true);
      sounds.playChime();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section id="facts" className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>39 Sister Truths (13 × 3)</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight mb-3">
          The 39 Panda Truths & Inside Jokes 🎋
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base">
          Exactly 39 reasons why my elder sister is iconic—and why only I get to call her Panda.
        </p>
      </div>

      {/* Main Interactive Fact Card */}
      <div className="max-w-2xl mx-auto bg-neutral-800/80 border border-neutral-700/90 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden">
        {/* Decorative Quote Mark */}
        <Quote className="absolute -top-4 -right-4 w-32 h-32 text-neutral-700/20 pointer-events-none" />

        {/* Fact Badge & Number */}
        <div className="flex items-center justify-between mb-6">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wider border border-emerald-500/30">
            {currentFact.badge}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-400">
              Truth {currentIndex + 1} of {PANDA_FACTS.length}
            </span>
          </div>
        </div>

        {/* Fact Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-100 mb-4 flex items-center gap-2">
          <span>{currentFact.title}</span>
          <span className="text-xl">🐼</span>
        </h3>

        {/* Quote */}
        <div className={`transition-all duration-200 ${isSpinning ? 'opacity-30 scale-98 blur-xs' : 'opacity-100 scale-100'}`}>
          <blockquote className="font-handwriting text-2xl sm:text-3xl text-emerald-300 leading-snug mb-4">
            “{currentFact.quote}”
          </blockquote>

          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed bg-neutral-900/60 p-4 rounded-xl border border-neutral-700/60">
            <span className="text-emerald-400 font-bold">Sibling Field Note: </span>
            {currentFact.context}
          </p>
        </div>

        {/* Card Actions */}
        <div className="mt-8 pt-6 border-t border-neutral-700/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              id="prev-fact-btn"
              onClick={handlePrevFact}
              className="p-2 rounded-lg bg-neutral-700/70 hover:bg-neutral-600 text-neutral-200 transition-all active:scale-95 cursor-pointer"
              title="Previous Fact"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              id="next-fact-btn"
              onClick={handleNextFact}
              className="p-2 rounded-lg bg-neutral-700/70 hover:bg-neutral-600 text-neutral-200 transition-all active:scale-95 cursor-pointer"
              title="Next Fact"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              id="like-fact-btn"
              onClick={handleHeartReaction}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
              <span>So True! ({reactionCounts[currentFact.id] || 0})</span>
            </button>

            <button
              type="button"
              id="copy-fact-btn"
              onClick={copyFact}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-neutral-200 text-xs font-semibold transition-all active:scale-95 cursor-pointer"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <button
            type="button"
            id="roll-fact-btn"
            onClick={rollRandomFact}
            disabled={isSpinning}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            <Dices className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>Random Truth 🎲</span>
          </button>
        </div>
      </div>
    </section>
  );
};
