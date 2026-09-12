export interface DriveVideoItem {
  id: number;
  driveId: string;
  fileName: string;
  title: string;
  date: string;
  size: string;
  caption: string;
}

export interface PhotoItem {
  id: number;
  url: string;
  alt: string;
  date: string;
  location?: string;
  title?: string;
  caption?: string;
  vibe?: string;
  category?: 'sister' | 'chaos' | 'food_sleep' | 'midnight' | 'milestone';
  categoryLabel?: string;
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
