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
            <span>A 22nd Birthday Sisterly Tribute</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight mb-4">
            My Elder Sister, My Panda 🐼
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Celebrating 22 years of the loudest, sweetest, cleverest big sister on September 13th.
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
                  To My Elder Sister Turning 22,
                </h3>
                <p className="text-xs text-neutral-400">Written for 13th September from the only person allowed to call you Panda</p>
              </div>
            </div>

            <p>
              To everyone else in the world, you are the mature, accomplished, protective older sister figure. But between you and me, you didn't just become an anchor—you became my <strong className="text-emerald-300">Panda</strong>, and only I get to call you that.
            </p>

            <p>
              You embody the spirit of a panda in the most endearing way imaginable: you possess an Olympic-level dedication to eating and sleeping, yet whenever I'm having a tough day, you move with ferocious speed to protect and cheer me up. As my elder sister, you naturally look out for me. You make sure I eat, you check that I got home safely, and you never let anyone walk over me.
            </p>

            <div className="p-4 rounded-xl bg-neutral-800/60 border-l-4 border-amber-400 my-4 text-neutral-200 font-medium italic text-base">
              “Why work hard for 8 hours when you can finish the whole task in 35 minutes with pure brainpower and sleep for the rest of the day?”
            </div>

            <p>
              Your <strong className="text-amber-300">smart-working philosophy</strong> is legendary. While the rest of us panic and overcomplicate things, you casually stroll in with a cup of iced coffee, identify the 2 critical shortcuts that eliminate 90% of the effort, and solve the crisis before lunchtime.
            </p>

            <p>
              And then there are the <strong className="text-rose-300">midnight phone calls</strong>. At 00:23 AM, my phone will suddenly light up with your name. Not because of an emergency, but simply because you were scrolling through old photo albums, saw a snapshot of us from years ago, and called just to laugh loudly and say, <em>“I missed your goofy face, okay go back to sleep!”</em>
            </p>

            <p className="text-neutral-100 font-medium">
              Turning 22 on September 13th is an iconic milestone, but no matter how many years pass, you will always be our compass, our sanctuary, and our real big sister. Happy 22nd Birthday, big sis Panda!
            </p>
          </div>

          {/* Persona Breakdown Cards & "The Panda Formula" */}
          <div className="lg:col-span-5 space-y-5">
            {/* The Panda Formula */}
            <div className="bg-neutral-900/90 rounded-2xl p-6 border border-emerald-500/20 shadow-lg">
              <h4 className="font-display text-lg font-bold text-neutral-100 mb-4 flex items-center gap-2">
                <span>The Official Panda Formula</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Verified</span>
              </h4>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-neutral-300 flex items-center gap-1">
                      <Coffee className="w-3.5 h-3.5 text-emerald-400" /> Food & Bamboo Hibernation
                    </span>
                    <span className="text-emerald-400">40%</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full w-[40%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-neutral-300 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400" /> Smart-Working Clever Hacks
                    </span>
                    <span className="text-amber-400">35%</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full w-[35%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-neutral-300 flex items-center gap-1">
                      <Moon className="w-3.5 h-3.5 text-rose-400" /> Midnight Nostalgia Rings
                    </span>
                    <span className="text-rose-400">15%</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-rose-400 rounded-full w-[15%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-neutral-300 flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-sky-400" /> Fierce Big Sister Protection
                    </span>
                    <span className="text-sky-400">10%</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                    <div className="h-full bg-sky-400 rounded-full w-[10%]" />
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-neutral-400 mt-4 italic text-center">
                *Total: 100% Irreplaceable Big Sister Energy
              </p>
            </div>

            {/* Handwritten Sister Post-it Note */}
            <div className="bg-amber-100 text-neutral-900 p-5 rounded-2xl shadow-lg rotate-1 transform hover:rotate-0 transition-transform">
              <div className="flex items-center justify-between border-b border-amber-300 pb-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 font-display">
                  📌 Elder Sister Rule #1
                </span>
                <span className="text-lg">🐼</span>
              </div>
              <p className="font-handwriting text-2xl font-bold leading-snug">
                “Whenever life gets chaotic, remember: I am older than you, I have seen it all, and nobody gets to make you sad while I have breath in my lungs.”
              </p>
              <p className="text-right text-xs font-bold text-amber-800 mt-2">
                — Your Big Sis Panda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
