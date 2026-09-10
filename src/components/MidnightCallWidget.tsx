import React, { useState } from 'react';
import { Phone, PhoneOff, PhoneCall, Moon, Volume2, Sparkles, MessageCircle, Play } from 'lucide-react';
import { MIDNIGHT_SCENARIOS } from '../data/insideJokes';
import { sounds } from '../utils/audio';
import { triggerPandaShower } from './PandaEffects';

export const MidnightCallWidget: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<number>(1);
  const [callStatus, setCallStatus] = useState<'idle' | 'ringing' | 'active'>('idle');

  const scenario = MIDNIGHT_SCENARIOS.find((s) => s.id === selectedScenarioId) || MIDNIGHT_SCENARIOS[0];

  const triggerCall = () => {
    setCallStatus('ringing');
    sounds.playPhoneRing();
    // Auto chime again after 1s if still ringing
    setTimeout(() => {
      if (callStatus !== 'active') {
        sounds.playPhoneRing();
      }
    }, 1200);
  };

  const answerCall = () => {
    sounds.playCelebration();
    triggerPandaShower();
    setCallStatus('active');
  };

  const hangUp = () => {
    sounds.playChime();
    setCallStatus('idle');
  };

  return (
    <section id="midnight-calls" className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-rose-500/20">
          <Moon className="w-3.5 h-3.5" />
          <span>Interactive Feature</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-100 tracking-tight mb-3">
          The 00:00 AM Midnight Call Simulator
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base">
          Experience what it feels like to be Panda's younger sibling at midnight. 
          Pick a scenario below and answer her incoming ring!
        </p>

        {/* Scenario selectors */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {MIDNIGHT_SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              id={`scenario-btn-${s.id}`}
              onClick={() => {
                sounds.playChime();
                setSelectedScenarioId(s.id);
                setCallStatus('idle');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedScenarioId === s.id
                  ? 'bg-rose-500 text-white font-bold shadow-md'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {s.time} • {s.reason}
            </button>
          ))}
        </div>
      </div>

      {/* Phone Screen Mockup */}
      <div className="max-w-md mx-auto bg-neutral-900 border border-neutral-700 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        {/* Top Phone speaker & camera notch */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-4 bg-neutral-800 rounded-full flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neutral-700" />
            <div className="w-10 h-1 rounded-full bg-neutral-700" />
          </div>
        </div>

        {/* Status bar */}
        <div className="flex justify-between items-center text-xs text-neutral-400 mb-8 px-2">
          <span>{scenario.time}</span>
          <span className="flex items-center gap-1">
            <Moon className="w-3 h-3 text-amber-300" />
            <span>Do Not Disturb (Overridden by Big Sis)</span>
          </span>
        </div>

        {/* Call Content */}
        {callStatus === 'idle' && (
          <div className="text-center py-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-neutral-800 border-2 border-dashed border-neutral-600 flex items-center justify-center text-4xl mb-4 shadow-inner">
              🐼
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-100">
              Panda 🐼
            </h3>
            <p className="text-xs text-neutral-400 mt-1 mb-6">
              Status: In bed scrolling through old memories at 00:23 AM 🌙
            </p>

            <button
              type="button"
              id="start-call-btn"
              onClick={triggerCall}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-400 text-white font-bold text-sm transition-all shadow-lg shadow-rose-500/30 active:scale-95 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>Simulate Incoming Call 📞</span>
            </button>
          </div>
        )}

        {callStatus === 'ringing' && (
          <div className="text-center py-6 animate-pulse">
            <div className="w-24 h-24 mx-auto rounded-full bg-rose-500/20 border-2 border-rose-500 flex items-center justify-center text-4xl mb-4 shadow-lg shadow-rose-500/40">
              🐼
            </div>
            <h3 className="font-display text-2xl font-bold text-neutral-100">
              Panda 🐼
            </h3>
            <p className="text-xs text-rose-300 font-semibold tracking-wide uppercase mt-1 mb-8 animate-bounce">
              Incoming Midnight Call...
            </p>

            <div className="flex items-center justify-around gap-6 pt-4">
              <button
                type="button"
                id="decline-call-btn"
                onClick={hangUp}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-neutral-800 group-hover:bg-neutral-700 text-neutral-300 flex items-center justify-center transition-colors">
                  <PhoneOff className="w-6 h-6" />
                </div>
                <span className="text-xs text-neutral-400">Sleep (No Way)</span>
              </button>

              <button
                type="button"
                id="accept-call-btn"
                onClick={answerCall}
                className="flex flex-col items-center gap-1.5 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500 group-hover:bg-emerald-400 text-neutral-950 flex items-center justify-center shadow-lg shadow-emerald-500/40 transition-transform group-hover:scale-105 active:scale-95">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="text-xs text-emerald-400 font-bold">Answer</span>
              </button>
            </div>
          </div>
        )}

        {callStatus === 'active' && (
          <div className="py-2">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🐼</span>
                <div>
                  <h4 className="font-bold text-sm text-neutral-100">Panda (Big Sis)</h4>
                  <p className="text-[11px] text-emerald-400 font-mono">00:01 • Connected</p>
                </div>
              </div>
              <button
                type="button"
                id="end-call-btn"
                onClick={hangUp}
                className="p-2 rounded-full bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30"
                title="End Call"
              >
                <PhoneOff className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Bubbles */}
            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1 text-xs">
              {scenario.dialogue.map((line, idx) => {
                const isPanda = line.startsWith('Panda:');
                const cleanText = line.replace(/^(Panda:|Me:)\s*/, '');
                return (
                  <div
                    key={idx}
                    className={`flex ${isPanda ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-2xl ${
                        isPanda
                          ? 'bg-neutral-800 text-neutral-100 rounded-tl-none border border-neutral-700'
                          : 'bg-emerald-600 text-white rounded-tr-none'
                      }`}
                    >
                      <span className="block font-bold text-[10px] opacity-70 mb-0.5">
                        {isPanda ? 'Panda 🐼' : 'You'}
                      </span>
                      <p className="leading-relaxed">{cleanText}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800 text-center">
              <span className="text-[11px] text-amber-300/90 font-medium italic">
                {scenario.reaction}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
