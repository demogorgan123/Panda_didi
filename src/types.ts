export interface PhotoItem {
  id: number;
  title: string;
  category: 'sister' | 'chaos' | 'food_sleep' | 'midnight' | 'milestone';
  categoryLabel: string;
  url: string;
  alt: string;
  caption: string;
  date: string;
  location?: string;
  vibe: string;
}

export interface InsideJoke {
  id: number;
  badge: string;
  title: string;
  quote: string;
  context: string;
  reactionCount?: number;
}

export interface MidnightCallScenario {
  id: number;
  time: string;
  reason: string;
  dialogue: string[];
  reaction: string;
}
