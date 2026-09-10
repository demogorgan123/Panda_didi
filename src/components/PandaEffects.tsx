import React, { useState, useEffect, useCallback } from 'react';
import { sounds } from '../utils/audio';

interface FloatingItem {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
  rotation: number;
  speed: number;
}

interface ClickParticle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const PANDA_EMOJIS = ['🐼', '🎋', '🐾', '🎂', '💖', '✨', '🍙', '🧋'];

// Global emitter for Panda shower effects
type ShowerListener = () => void;
const showerListeners: Set<ShowerListener> = new Set();

export const triggerPandaShower = () => {
  showerListeners.forEach((listener) => listener());
};

export const PandaEffects: React.FC = () => {
  const [showerParticles, setShowerParticles] = useState<FloatingItem[]>([]);
  const [clickParticles, setClickParticles] = useState<ClickParticle[]>([]);
  const [isPandaRainActive, setIsPandaRainActive] = useState<boolean>(false);

  // Trigger burst of panda items
  const triggerBurst = useCallback(() => {
    sounds.playCelebration();
    const count = 35;
    const newParticles: FloatingItem[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i + Math.random(),
      x: Math.random() * 95, // viewport width %
      y: -10 - Math.random() * 20, // start above viewport
      emoji: PANDA_EMOJIS[Math.floor(Math.random() * PANDA_EMOJIS.length)],
      size: Math.floor(Math.random() * 24) + 24, // 24px - 48px
      rotation: Math.random() * 360,
      speed: Math.random() * 2.5 + 2, // 2s - 4.5s fall duration
    }));

    setShowerParticles((prev) => [...prev, ...newParticles]);
    setIsPandaRainActive(true);

    // Remove particles after they fall
    setTimeout(() => {
      setShowerParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
      setIsPandaRainActive(false);
    }, 5000);
  }, []);

  // Listen to global shower events
  useEffect(() => {
    showerListeners.add(triggerBurst);
    return () => {
      showerListeners.delete(triggerBurst);
    };
  }, [triggerBurst]);

  // Handle global click effect for cute panda paw prints
  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      // Don't spawn if clicking input, button, or links directly to avoid clutter
      const target = e.target as HTMLElement;
      if (target.closest('button, input, textarea, a')) {
        return;
      }

      const randomEmoji = Math.random() > 0.4 ? '🐾' : (Math.random() > 0.5 ? '🎋' : '🐼');
      const newParticle: ClickParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        emoji: randomEmoji,
      };

      setClickParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setClickParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  return (
    <>
      {/* Ambient Floating Panda & Bamboo Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none opacity-25">
        <span className="absolute top-[15%] left-[3%] text-4xl animate-pulse duration-1000">🎋</span>
        <span className="absolute top-[28%] right-[4%] text-3xl animate-bounce duration-700">🐾</span>
        <span className="absolute top-[55%] left-[2%] text-3xl animate-bounce duration-1000">🐼</span>
        <span className="absolute top-[70%] right-[3%] text-4xl animate-pulse duration-700">🎋</span>
        <span className="absolute top-[88%] left-[4%] text-2xl">🐾</span>
      </div>

      {/* Click Paw / Bamboo Ripples */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {clickParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute transition-all duration-1000 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-2xl animate-fade-up"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              animation: 'pandaFloat 1s forwards ease-out',
            }}
          >
            {particle.emoji}
          </div>
        ))}
      </div>

      {/* Full-Screen Falling Panda Shower */}
      {showerParticles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {showerParticles.map((p) => (
            <div
              key={p.id}
              className="absolute pointer-events-none select-none drop-shadow-md"
              style={{
                left: `${p.x}vw`,
                top: `${p.y}vh`,
                fontSize: `${p.size}px`,
                transform: `rotate(${p.rotation}deg)`,
                animation: `pandaRain ${p.speed}s linear forwards`,
              }}
            >
              {p.emoji}
            </div>
          ))}
        </div>
      )}

      {/* Floating Panda Magic Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          type="button"
          id="panda-magic-btn"
          onClick={triggerBurst}
          className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-emerald-300 hover:text-emerald-200 border-2 border-emerald-500/40 hover:border-emerald-400 shadow-xl shadow-emerald-950/50 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
          title="Trigger Panda Rain & Bamboo Shower!"
        >
          <span className="text-xl group-hover:scale-125 transition-transform animate-bounce">
            🐼
          </span>
          <span className="font-display text-xs sm:text-sm font-bold tracking-wide">
            Panda Magic 🐾
          </span>
          <span className="text-xs bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
            {isPandaRainActive ? 'Raining!' : 'Tap!'}
          </span>
        </button>
      </div>

      {/* Keyframe Styles for Falling Panda Effect */}
      <style>{`
        @keyframes pandaRain {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes pandaFloat {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.9;
          }
          50% {
            transform: translate(-50%, -80%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -120%) scale(0.9);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
