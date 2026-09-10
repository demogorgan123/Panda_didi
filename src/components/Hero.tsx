import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Clock, ArrowDown, Calendar, PhoneCall, ShieldCheck, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';
import { triggerPandaShower } from './PandaEffects';

export const Hero: React.FC = () => {
  // Timer mode: 'countdown' or 'friendship'
  const [timerMode, setTimerMode] = useState<'countdown' | 'friendship'>('countdown');
  const [isToday, setIsToday] = useState<boolean>(false);

  // Time state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [friendshipTime, setFriendshipTime] = useState({
    days: 2140,
    hours: 14,
    minutes: 22,
    seconds: 45,
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

      // Simulated ticking friendship elapsed timer (assuming started ~6 years ago)
      const baseFriendshipStart = new Date(now.getFullYear() - 6, 3, 15, 12, 0, 0);
      const fDiff = now.getTime() - baseFriendshipStart.getTime();
      const fDays = Math.floor(fDiff / (1000 * 60 * 60 * 24));
      const fHours = Math.floor((fDiff / (1000 * 60 * 60)) % 24);
      const fMins = Math.floor((fDiff / (1000 * 60)) % 60);
      const fSecs = Math.floor((fDiff / 1000) % 60);
      setFriendshipTime({ days: fDays, hours: fHours, minutes: fMins, seconds: fSecs });
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
    <section id="hero" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Panda Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-800/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <span className="text-base animate-bounce">🎋</span>
          <span>13th September • Turning 22 • Happy Birthday Panda! 🐼</span>
          <span className="text-base">🎂</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-50 mb-6 leading-tight">
          Happy 22nd Birthday,{' '}
          <span className="relative inline-block text-emerald-400 underline decoration-wavy decoration-emerald-500/40 underline-offset-8">
            Panda!
          </span>
          <span className="inline-block ml-3 animate-wiggle">🎂</span>
        </h1>

        {/* Subtitle with deep persona context */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-300 font-normal leading-relaxed mb-8">
          Celebrating <strong className="text-emerald-300 font-semibold">22 legendary years</strong> of Panda! 
          The mastermind of <span className="text-emerald-300 font-medium">smart-working shortcuts</span>, 
          the reigning hot pot champion, my fiercely protective big sister, and the queen of <span className="text-amber-300 font-medium">00:00 AM random nostalgia calls</span>. 
          This entire website is dedicated to you, Panda!
        </p>

        {/* Key Persona Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 font-medium">
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

        {/* Interactive Live Countdown / Friendship Timer Card */}
        <div className="max-w-xl mx-auto bg-neutral-800/60 border border-neutral-700/80 rounded-2xl p-5 sm:p-6 backdrop-blur-sm shadow-xl mb-10">
          <div className="flex items-center justify-between border-b border-neutral-700/60 pb-3 mb-5">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-200">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>
                {timerMode === 'countdown' ? 'Countdown to 13th September (Turning 22!)' : 'Time as Your Younger Sibling'}
              </span>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center bg-neutral-900 rounded-lg p-1 border border-neutral-700 text-xs">
              <button
                type="button"
                id="timer-toggle-countdown"
                onClick={() => { sounds.playChime(); setTimerMode('countdown'); }}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  timerMode === 'countdown' 
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow' 
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Countdown
              </button>
              <button
                type="button"
                id="timer-toggle-friendship"
                onClick={() => { sounds.playChime(); setTimerMode('friendship'); }}
                className={`px-2.5 py-1 rounded font-medium transition-all ${
                  timerMode === 'friendship' 
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow' 
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Friendship Days
              </button>
            </div>
          </div>

          {/* Time digits */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            {timerMode === 'countdown' ? (
              <>
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
              </>
            ) : (
              <>
                <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-700/60">
                  <span className="block font-display text-2xl sm:text-4xl font-bold text-rose-400">
                    {friendshipTime.days}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Days Together</span>
                </div>
                <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-700/60">
                  <span className="block font-display text-2xl sm:text-4xl font-bold text-neutral-100">
                    {String(friendshipTime.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Hours</span>
                </div>
                <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-700/60">
                  <span className="block font-display text-2xl sm:text-4xl font-bold text-neutral-100">
                    {String(friendshipTime.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Minutes</span>
                </div>
                <div className="bg-neutral-900/90 rounded-xl p-3 border border-neutral-700/60">
                  <span className="block font-display text-2xl sm:text-4xl font-bold text-emerald-400">
                    {String(friendshipTime.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-neutral-400 font-medium">Seconds</span>
                </div>
              </>
            )}
          </div>

          <p className="text-xs text-neutral-400 mt-3 italic">
            {timerMode === 'countdown'
              ? (isToday 
                  ? '🎉 TODAY IS SEPTEMBER 13TH! Happy 22nd Birthday to Panda! 🎂🐼' 
                  : 'Counting down every second until September 13th when Panda officially turns 22! 🎂')
              : 'Over 2,000+ days of your chaotic laughter, warm hugs, and zero regrets! ❤️'}
          </p>
        </div>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#gallery"
            id="hero-view-gallery-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm sm:text-base transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            <span>View Birthday Memories</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#story"
            id="hero-read-story-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-100 font-semibold text-sm sm:text-base transition-all active:scale-95"
          >
            <span>Read The 22nd Birthday Tribute</span>
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          </a>

          <button
            type="button"
            id="hero-confetti-btn"
            onClick={handleConfetti}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-200 font-semibold text-sm sm:text-base transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-rose-300" />
            <span>Shower Love 🎉</span>
          </button>
        </div>
      </div>
    </section>
  );
};
