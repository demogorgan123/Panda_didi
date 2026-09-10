import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Heart, 
  Clock, 
  ArrowDown, 
  PhoneCall, 
  ShieldCheck, 
  Flame, 
  Camera, 
  Film 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import { triggerPandaShower } from './PandaEffects';

export const Hero: React.FC = () => {
  const [, setIsToday] = useState<boolean>(false);

  // Time state for live countdown to September 13th
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate live countdown to September 13th (turning 22)
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      // Check if today is September 13th (Month index 8 = September)
      const birthdayToday = now.getMonth() === 8 && now.getDate() === 13;
      setIsToday(birthdayToday);

      // Target September 13 at 00:00:00
      let target = new Date(currentYear, 8, 13, 0, 0, 0);

      // If already past September 13 23:59:59 this year, target next year's September 13th
      const endOfBirthday = new Date(currentYear, 8, 13, 23, 59, 59);
      if (now.getTime() > endOfBirthday.getTime()) {
        target = new Date(currentYear + 1, 8, 13, 0, 0, 0);
      }

      const diff = Math.max(0, target.getTime() - now.getTime());

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConfetti = () => {
    sounds.playCelebration();
    triggerPandaShower();
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#34d399', '#f43f5e', '#fbbf24', '#ffffff', '#a7f3d0']
    });
  };

  return (
    <section id="hero" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Panda Birthday Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-sm">
            <span className="text-base animate-bounce">🎋</span>
            <span>13th September • Turning 22 • Happy Birthday Panda! 🐼</span>
            <span className="text-base">🎂</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* BALANCED 2-COLUMN HERO: BIRTHDAY WISH (LEFT) + HARDCODED PHOTO (RIGHT)    */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          
          {/* LEFT COLUMN: Main Heading, Birthday Wish Message, Persona Badges, CTA */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-50 mb-5 leading-tight">
              Happy 22nd Birthday,{' '}
              <span className="relative inline-block text-emerald-400 underline decoration-wavy decoration-emerald-500/40 underline-offset-8">
                Panda!
              </span>
              <span className="inline-block ml-3 animate-wiggle">🎂</span>
            </h1>

            {/* Main Birthday Wish Message */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed mb-6">
              Celebrating <strong className="text-emerald-300 font-semibold">22 legendary years</strong> of Panda! 
              The mastermind of <span className="text-emerald-300 font-medium">smart-working shortcuts</span>, 
              the reigning hot pot champion, my fiercely protective big sister, and the queen of <span className="text-amber-300 font-medium">00:00 AM random nostalgia calls</span>. 
              This entire website is dedicated to you, Panda!
            </p>

            {/* Key Persona Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-200 font-medium">
                <span className="text-amber-300">🎂</span>
                <span>Turning 22 on 13th Sept</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700 text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fierce Sister & Protector</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700 text-neutral-200">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Smart Work &gt; Hard Work</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700 text-neutral-200">
                <PhoneCall className="w-4 h-4 text-rose-400" />
                <span>00:00 AM Nostalgia Caller</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full">
              <a
                href="#gallery"
                id="hero-view-gallery-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer"
              >
                <Film className="w-4 h-4" />
                <span>View Memories & Videos</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#story"
                id="hero-read-story-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-100 font-semibold text-sm transition-all active:scale-95 cursor-pointer"
              >
                <span>Read Birthday Tribute</span>
                <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              </a>

              <button
                type="button"
                id="hero-confetti-btn"
                onClick={handleConfetti}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-200 font-semibold text-sm transition-all active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-rose-300" />
                <span>Shower Love 🎉</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Featured Photo Card Prominently to the Side of Birthday Wish */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/30 via-amber-400/20 to-rose-500/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />
              
              {/* Main Featured Photo Container (Polaroid / Keepsake Frame) */}
              <div className="relative bg-neutral-900 border border-neutral-700/90 rounded-2xl p-4 sm:p-5 shadow-2xl backdrop-blur-md">
                
                {/* Header Strip of the Photo Frame */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Featured Portrait
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
                    Birthday Star • Level 22
                  </span>
                </div>

                {/* Featured Photo Image */}
                <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 w-full rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-inner group">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Yk-3CtL5dz6nfPXsqWqOkedCJXizgO3m=w1200"
                    alt="Featured Photo - Panda 22nd Birthday"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  />

                  {/* Subtle Gradient Shadow at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-80" />

                  {/* Floating Corner Badges */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                    <span>👑 Level 22</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <p className="text-xs font-mono text-emerald-300 font-semibold flex items-center gap-1 mb-0.5">
                      <Camera className="w-3 h-3" />
                      <span>September 13th • Queen Panda</span>
                    </p>
                    <p className="text-sm font-semibold text-white truncate">
                      Panda • 22nd Birthday Portrait
                    </p>
                  </div>
                </div>

                {/* Keepsake Caption Area */}
                <div className="mt-4 text-center">
                  <p className="text-xs sm:text-sm font-medium text-neutral-200 italic leading-snug mb-1">
                    “Radiant smiles, endless memories & another wonderful chapter.”
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    September 13th • Celebrating Queen Panda 🐼
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LIVE BIRTHDAY COUNTDOWN TIMER CARD                                        */}
        {/* ========================================================================= */}
        <div className="max-w-2xl mx-auto bg-neutral-800/60 border border-neutral-700/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-xl">
          <div className="flex items-center justify-between border-b border-neutral-700/60 pb-3 mb-5">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-200">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>Countdown to 13th September (Turning 22! 🎂)</span>
            </div>

            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-semibold">
              Birthday Clock
            </span>
          </div>

          {/* Time digits */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-700/60">
              <span className="block font-display text-2xl sm:text-4xl font-bold text-emerald-400">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Days</span>
            </div>
            <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-700/60">
              <span className="block font-display text-2xl sm:text-4xl font-bold text-neutral-100">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Hours</span>
            </div>
            <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-700/60">
              <span className="block font-display text-2xl sm:text-4xl font-bold text-neutral-100">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Minutes</span>
            </div>
            <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-700/60">
              <span className="block font-display text-2xl sm:text-4xl font-bold text-amber-400">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
