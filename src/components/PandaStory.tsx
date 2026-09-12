import React from 'react';
import { Heart, Sparkles, Moon, Zap, Shield, Coffee, Volume2 } from 'lucide-react';

export const PandaStory: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-neutral-950/60 border-y border-neutral-800/80 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-10 right-10 text-8xl opacity-5 select-none pointer-events-none">
        🐼
      </div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-5 select-none pointer-events-none">
        🎋
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-rose-500/20">
            <Heart className="w-3.5 h-3.5 fill-rose-400" />
            <span>Dedicated to Parihar / Panda / Didi on Her 22nd Birthday</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight mb-4">
            A Letter From Your Brother 💌
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            From friends to best friends, and now my big sister—written with all my heart on 13th September.
          </p>
        </div>

        {/* The Letter / Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Letter */}
          <div className="lg:col-span-7 bg-neutral-900/80 rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed">
            <div className="flex items-center gap-3 border-b border-neutral-800 pb-4">
              <span className="text-3xl">💌</span>
              <div>
                <h3 className="font-display text-lg font-bold text-neutral-100">
                  Happy Birthday Parihar / Panda / Didi!
                </h3>
                <p className="text-xs text-neutral-400">Written with all my heart for your 22nd birthday on 13th September</p>
              </div>
            </div>

            <p>
              From friends to best friends, and now my big sister—we have truly come a long way. I love how you listen to everything I have to say, whether it is completely sensible or total nonsense. You are my safe space to rant, cry, and just be myself.
            </p>

            <div className="p-4 rounded-xl bg-neutral-800/60 border-l-4 border-rose-400 my-4 text-neutral-200 font-medium italic text-base">
              “Calling each other every day has become such an indispensable part of my routine that on the days you do not call, I immediately find myself wondering, ‘Where is she busy today?’”
            </div>

            <p>
              Thank you for guiding me, helping me, listening patiently, and always making me feel right at home. This bond is forever now because I am your brother, and I love my big sister so much.
            </p>

            <p>
              I pray to God that success, immense happiness, prosperity, and everything you have ever wished for find their way to you as soon as possible. I trust you completely—I know you will win, and I will stand firm by your side through every bit of hard work and struggle. I promise to be right there in the front row, cheering the loudest and celebrating every single success with you.
            </p>

            <div className="pt-4 border-t border-neutral-800/80 flex flex-col items-end text-right">
              <p className="font-display text-lg font-bold text-emerald-300">Happy Birthday!</p>
              <p className="text-sm text-neutral-400 font-medium mt-1">With lots of love,</p>
              <p className="font-handwriting text-2xl font-bold text-amber-300 mt-0.5">Your Brother 💖</p>
            </div>
          </div>

          {/* Pillars of Our Bond (from the letter) */}
          <div className="lg:col-span-5 space-y-5">
            {/* The 4 Pillars Card */}
            <div className="bg-neutral-900/90 rounded-2xl p-6 border border-emerald-500/20 shadow-lg">
              <h4 className="font-display text-lg font-bold text-neutral-100 mb-4 flex items-center gap-2">
                <span>The 4 Pillars of Our Bond</span>
                <span className="text-xs px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/30">Forever</span>
              </h4>

              <div className="space-y-4 text-sm">
                <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/60">
                  <div className="flex items-center gap-2 font-semibold text-rose-300 mb-1">
                    <Shield className="w-4 h-4 text-rose-400" />
                    <span>1. Safe Space to Rant &amp; Be Myself</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Listening patiently to everything I have to say, whether completely sensible or total nonsense.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/60">
                  <div className="flex items-center gap-2 font-semibold text-amber-300 mb-1">
                    <Moon className="w-4 h-4 text-amber-400" />
                    <span>2. Indispensable Daily Calls</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Calling each other every single day. If you don't call, I instantly wonder: “Where is she busy today?”
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/60">
                  <div className="flex items-center gap-2 font-semibold text-emerald-300 mb-1">
                    <Coffee className="w-4 h-4 text-emerald-400" />
                    <span>3. Guiding &amp; Feeling Right at Home</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    Guiding me, helping me, listening patiently, and always making me feel right at home.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-800/50 border border-neutral-700/60">
                  <div className="flex items-center gap-2 font-semibold text-sky-300 mb-1">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span>4. Front Row Cheering Forever</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    I trust you completely—I know you will win, and I'll be in the front row cheering the loudest!
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 mt-4 italic text-center">
                “This bond is forever now because I am your brother.”
              </p>
            </div>

            {/* Handwritten Brother's Promise Sticky Note */}
            <div className="bg-amber-100 text-neutral-900 p-5 rounded-2xl shadow-lg rotate-1 transform hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between border-b border-amber-300 pb-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-display">
                  📌 A Brother's Eternal Promise
                </span>
                <span className="text-lg">💖</span>
              </div>
              <p className="font-handwriting text-2xl font-bold leading-snug">
                “I trust you completely—I know you will win, and I will stand firm by your side through every bit of hard work and struggle. Front row cheering guaranteed!”
              </p>
              <p className="text-right text-xs font-bold text-amber-800 mt-2">
                — Tera Bhai Forever 🐼
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
