// Web Audio API helper for sound effects without external audio files

class SoundFX {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // Cute chime for buttons / facts
  playChime() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15); // G5

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }

  // Festive birthday melody snippet
  playCelebration() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const notes = [
        { f: 392.00, d: 0.15 }, // G4
        { f: 392.00, d: 0.15 }, // G4
        { f: 440.00, d: 0.3 },  // A4
        { f: 392.00, d: 0.3 },  // G4
        { f: 523.25, d: 0.3 },  // C5
        { f: 493.88, d: 0.5 },  // B4
      ];
      let t = ctx.currentTime;
      notes.forEach((n) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, t);
        gain.gain.setValueAtTime(0.15, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + n.d);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + n.d);
        t += n.d + 0.04;
      });
    } catch {
      // ignore
    }
  }

  // Midnight Phone Call ringtone
  playPhoneRing() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      
      // Dual tone ring
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(440, now);
      osc2.frequency.setValueAtTime(480, now);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.8);
      osc2.stop(now + 0.8);
    } catch {
      // ignore
    }
  }
}

export const sounds = new SoundFX();
