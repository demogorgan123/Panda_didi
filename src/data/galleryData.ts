import { PhotoItem, DriveVideoItem } from '../types';

// =========================================================================
// 🌟 FEATURE PHOTO PLACEHOLDER
// Used in the Hero section to fill the space left by the removed feature photo.
// =========================================================================
export const FEATURED_PHOTO_PLACEHOLDER =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMTAwMCIgdmlld0JveD0iMCAwIDgwMCAxMDAwIiBmaWxsPSJub25lIj4KICA8cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjEwMDAiIGZpbGw9IiMxNDE0MTQiLz4KICA8ZGVmcz4KICAgIDxyYWRpYWxHcmFkaWVudCBpZD0iZ3JhZCIgY3g9IjUwJSIgY3k9IjM4JSIgcj0iNTUlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzEwYjk4MSIgc3RvcC1vcGFjaXR5PSIwLjIiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI2MCUiIHN0b3AtY29sb3I9IiMxNDE0MTQiIHN0b3Atb3BhY2l0eT0iMCIvPgogICAgPC9yYWRpYWxHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ic3Ryb2tlR3JhZCIgeDE9IjAiIHkxPSIwIiB4Mj0iODAwIiB5Mj0iMTAwMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjMTBiOTgxIiBzdG9wLW9wYWNpdHk9IjAuNDUiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNmNTllMGIiIHN0b3Atb3BhY2l0eT0iMC4yNSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMGI5ODEiIHN0b3Atb3BhY2l0eT0iMC40NSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIxMDAwIiBmaWxsPSJ1cmwoI2dyYWQpIi8+CiAgPHJlY3QgeD0iNDAiIHk9IjQwIiB3aWR0aD0iNzIwIiBoZWlnaHQ9IjkyMCIgcng9IjMyIiBzdHJva2U9InVybCgjc3Ryb2tlR3JhZCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iMTIgMTIiIGZpbGw9Im5vbmUiLz4KICAKICA8IS0tIFN1YnRsZSBwYW5kYSAmIHN0YXIgZGVjb3JhdGl2ZSBtYXJrcyAtLT4KICA8Y2lyY2xlIGN4PSI0MDAiIGN5PSIzODAiIHI9IjExMCIgZmlsbD0iIzFjMWMxYyIgc3Ryb2tlPSIjMzRkMzk5IiBzdHJva2Utd2lkdGg9IjIiIHN0b3Atb3BhY2l0eT0iMC4zIi8+CiAgPGNpcmNsZSBjeD0iMzMwIiBjeT0iMzAwIiByPSIyOCIgZmlsbD0iIzE3MTcxNyIgc3Ryb2tlPSIjMzRkMzk5IiBzdHJva2Utd2lkdGg9IjIiIHN0b3Atb3BhY2l0eT0iMC4zIi8+CiAgPGNpcmNsZSBjeD0iNDcwIiBjeT0iMzAwIiByPSIyOCIgZmlsbD0iIzE3MTcxNyIgc3Ryb2tlPSIjMzRkMzk5IiBzdHJva2Utd2lkdGg9IjIiIHN0b3Atb3BhY2l0eT0iMC4zIi8+CgogIDwhLS0gQ2FtZXJhIEljb24gLS0+CiAgPHBhdGggZD0iTTM0MCAzNzUgTDM2MCAzNTAgSDQ0MCBMNDYwIDM3NSBINDg1IEM0OTYgMzc1LCA1MDUgMzg0LCA1MDUgMzk1IFY0NjUgQzUwNSA0NzYsIDQ5NiA0ODUsIDQ4NSA0ODUgSDMxNSBDMzA0IDQ4NSwgMjk1IDQ3NiwgMjk1IDQ2NSBWMzk1IEMyOTUgMzg0LCAzMDQgMzc1LCAzMTUgMzc1IFoiIGZpbGw9IiMyNDI0MjQiIHN0b3Atb3BhY2l0eT0iMC43IiBzdHJva2U9IiMzNGQzOTkiIHN0cm9rZS13aWR0aD0iMyIvPgogIDxjaXJjbGUgY3g9IjQwMCIgY3k9IjQzMCIgcj0iMzIiIGZpbGw9IiMxYTFhMWEiIHN0cm9rZT0iIzM0ZDM5OSIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGNpcmNsZSBjeD0iNDYwIiBjeT0iMzk4IiByPSI4IiBmaWxsPSIjZmJmMjQiLz4KCiAgPCEtLSBUZXh0IC0tPgogIDx0ZXh0IHg9IjQwMCIgeT0iNTcwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjZmZmZmZmIiBsZXR0ZXItc3BhY2luZz0iMSI+RkVBVFVSRUQgUEhPVE88L3RleHQ+CiAgPHRleHQgeD0iNDAwIiB5PSI2MTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMzNGQzOTkiPlBhbmRhIOKAoiAyMm5kIEJpcnRoZGF5IFN0YXIg8J+QvDwvdGV4dD4KICA8dGV4dCB4PSI0MDAiIHk9IjY1NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2EzYTNhMyI+UGhvdG8gUGxhY2Vob2xkZXIgKFJlc2VydmVkIGZvciBGZWF0dXJlZCBQb3J0cmFpdCk8L3RleHQ+CgogIDwhLS0gU3BhcmtsZXMgLS0+CiAgPHRleHQgeD0iMjQwIiB5PSIyNDAiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmYmJmMjQiPuKcqDwvdGV4dD4KICA8dGV4dCB4PSI1NDAiIHk9IjI2MCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ZiYmYyNCI+4pyoPC90ZXh0PgogIDx0ZXh0IHg9IjQwMCIgeT0iNzMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjI4Ij7wn46LIPCfjoIg8J+OizwvdGV4dD4KPC9zdmc+';

// =========================================================================
// 🎥 VIDEO ARCHIVE (5 VIDEOS - ALL EXCLUSIVELY FROM GOOGLE DRIVE FOLDER)
// =========================================================================
export const DRIVE_VIDEOS: DriveVideoItem[] = [
  {
    id: 1,
    driveId: "1QC64gFI-rcul1TRSnhVuZYBP8h6jWMPI",
    fileName: "VID-20260319-WA0028.mp4",
    title: "March Laughs & Spontaneous Energy",
    date: "19 March 2026",
    size: "3.9 MB",
    caption: "Classic spontaneous Panda laughter and candid sibling banter caught on camera."
  },
  {
    id: 2,
    driveId: "1Wz2busX11YZhsd77eYwA14DmMr_1ovYo",
    fileName: "VID-20260430-WA0255.mp4",
    title: "April Shenanigans (Part 1)",
    date: "30 April 2026",
    size: "7.4 MB",
    caption: "A golden memory of pure joy and Panda's unmistakable big-sister charm."
  },
  {
    id: 3,
    driveId: "1LJnij_fFuwdJGU3grA164MorW2pcuCH2",
    fileName: "VID-20260430-WA0298.mp4",
    title: "Late Night Laughs (Part 2)",
    date: "30 April 2026",
    size: "5.5 MB",
    caption: "When the clock strikes late and everything turns into uncontrollable giggles."
  },
  {
    id: 4,
    driveId: "10Dsx1SZJAYkqXP6_Z_7MsktFDyz-QH2r",
    fileName: "VID-20260504-WA0159.mp4",
    title: "May Sunshine & Laughter",
    date: "04 May 2026",
    size: "4.9 MB",
    caption: "Radiant, high-energy vibes that always brighten the whole room."
  },
  {
    id: 5,
    driveId: "16HR5mbq8k9pJovRUSjJroSZzDQlixWkK",
    fileName: "VID-20260513-WA0065.mp4",
    title: "Panda Energy in Full Effect",
    date: "13 May 2026",
    size: "1.9 MB",
    caption: "Unfiltered, heartwarming, and quintessential Panda."
  }
];

// =========================================================================
// 📸 CANDID PHOTO MEMORIES (15 PHOTOS - ALL EXCLUSIVELY FROM GOOGLE DRIVE FOLDER)
// Note: Includes the former feature photo moved right here into memories!
// You can edit the 'caption' property of any photo to hardcode your words.
// =========================================================================
export const GALLERY_PHOTOS: PhotoItem[] = [
  // --- Photo 1: MOVED FEATURE PHOTO (IMG-20260904-WA0052) ---
  {
    id: 1,
    title: "Golden Hour Glow (Birthday Star)",
    url: "https://lh3.googleusercontent.com/d/1mIiI5qAYQELgjH8FlIVHU_g-tDYWILmP=w1000",
    alt: "Panda looking radiant and smiling in warm natural lighting",
    caption: "The former feature photo, now proudly in memories! Captured in that effortless glow right before turning 22.",
    date: "04 September 2026",
    location: "Home Sweet Home",
    vibe: "Birthday Star Energy 👑"
  },

  // --- Photo 2: (IMG-20260828-WA0023) ---
  {
    id: 2,
    title: "Late Night Sibling Banter",
    url: "https://lh3.googleusercontent.com/d/1Zva4_ZBofxhhZX4yv6dLr98OTyiP-PPU=w1000",
    alt: "Candid warm moment sharing laughs together",
    caption: "Mid-laugh before she declared she was going to sleep and then stayed awake talking for another hour.",
    date: "28 August 2026",
    location: "Late Night Hangout",
    vibe: "Pure Joy"
  },

  // --- Photo 3: (IMG-20260728-WA0458) ---
  {
    id: 3,
    title: "Summer Memories & Smiles",
    url: "https://lh3.googleusercontent.com/d/1ujVh5t-xh0qPZ5eEPBroWhfgfaH3sqmY=w1000",
    alt: "Outdoor summer snapshot with relaxed big sister vibes",
    caption: "Summer days with Panda. The weather was hot, the food was great, and the laughter was loud as ever.",
    date: "28 July 2026",
    location: "Summer Afternoon Outing",
    vibe: "Warm Sunshine"
  },

  // --- Photo 4: (IMG-20260728-WA0421) ---
  {
    id: 4,
    title: "The Unapologetic Smirk",
    url: "https://lh3.googleusercontent.com/d/1fGNrIzn22yOVBw22qFjtj0DlSoBl_XA6=w1000",
    alt: "Panda smiling playfully right at the camera",
    caption: "The exact face she makes when she knows she's 100% right about everything.",
    date: "28 July 2026",
    location: "Weekend Wander",
    vibe: "Playful & Iconic"
  },

  // --- Photo 5: (IMG-20260728-WA0374) ---
  {
    id: 5,
    title: "Chilling Like a True Panda",
    url: "https://lh3.googleusercontent.com/d/1sd8NZeYOBNCtDQaa1zbyTpwKHlnywXKj=w1000",
    alt: "Comfortable and relaxed moment",
    caption: "100% bamboo hibernation mode. Nobody relaxes with as much commitment as her.",
    date: "28 July 2026",
    location: "Cozy Corner",
    vibe: "Bamboo Hibernation"
  },

  // --- Photo 6: (IMG-20260603-WA0042) ---
  {
    id: 6,
    title: "June Cafe Escapade",
    url: "https://lh3.googleusercontent.com/d/1M2UojVqwPkMW18ry-WuUxdyZSe2f4oqS=w1000",
    alt: "Casual afternoon cafe meetup with iced coffee",
    caption: "Iced drinks, delicious snacks, and 45 minutes of analyzing life problems over pastries.",
    date: "03 June 2026",
    location: "Favorite Cafe",
    vibe: "Coffee & Good Times"
  },

  // --- Photo 7: (IMG-20260603-WA0017) ---
  {
    id: 7,
    title: "Spontaneous Adventures",
    url: "https://lh3.googleusercontent.com/d/1ccRRZfI59C-wa87FCOvEbKab7lvB-JG_=w1000",
    alt: "Spontaneous day out exploring together",
    caption: "'Let's just step outside for 5 minutes' turned into a full-day adventure full of wrong turns and big laughs.",
    date: "03 June 2026",
    location: "City Streets",
    vibe: "Spontaneous Wanderer"
  },

  // --- Photo 8: (IMG-20260504-WA0152) ---
  {
    id: 8,
    title: "May Mood: Radiant & Free",
    url: "https://lh3.googleusercontent.com/d/1d5cqu0hy-lM73XdVPQtMWsh6Oa5dD41Z=w1000",
    alt: "Bright and cheerful snapshot",
    caption: "Every memory with her has this warm, undeniable lightness to it that brightens the whole day.",
    date: "04 May 2026",
    location: "Sunny Spot",
    vibe: "Pure Radiance"
  },

  // --- Photo 9: (IMG-20260430-WA0296) ---
  {
    id: 9,
    title: "April Evening Shenanigans",
    url: "https://lh3.googleusercontent.com/d/11suYOrTlZqB9KXDidxqNWe218IAK5CCV=w1000",
    alt: "Evening atmosphere with lively expressions",
    caption: "Right after she made a joke so funny everyone forgot what we were originally arguing about.",
    date: "30 April 2026",
    location: "Dinner Table",
    vibe: "Unstoppable Laughs"
  },

  // --- Photo 10: (IMG_20260430_211708101_AE) ---
  {
    id: 10,
    title: "The Ultimate Big Sister Look",
    url: "https://lh3.googleusercontent.com/d/1jTiChPr2O-uKwjQyZfAj2s90RI_WneBL=w1000",
    alt: "Confident, protective elder sister portrait looking directly ahead",
    caption: "That steady, protective look that makes you feel like everything is going to be completely okay.",
    date: "30 April 2026",
    location: "Out and About",
    vibe: "Fierce Protector"
  },

  // --- Photo 11: (IMG-20260319-WA0022) ---
  {
    id: 11,
    title: "Spring Smiles",
    url: "https://lh3.googleusercontent.com/d/1E6C4Rpeaz6j3YJGQ7WM6yDJ0atvt8eum=w1000",
    alt: "Spring day candid picture with natural light",
    caption: "A genuine, unposed snapshot from March. Natural, beautiful, and effortlessly Panda.",
    date: "19 March 2026",
    location: "Walking Route",
    vibe: "Spring Bloom"
  },

  // --- Photo 12: (IMG-20260319-WA0018) ---
  {
    id: 12,
    title: "The Daily Laugh Check",
    url: "https://lh3.googleusercontent.com/d/1eQcWkfbaoEI3OuyejuBXuUHePjwXfwjn=w1000",
    alt: "Mid-conversation laughing portrait",
    caption: "You can practically hear the decibels in this photo. Unfiltered happiness at its finest.",
    date: "19 March 2026",
    location: "Mid-Walk",
    vibe: "Loud & Sweet"
  },

  // --- Photo 13: (IMG-20260213-WA0051) ---
  {
    id: 13,
    title: "Cozy February Days",
    url: "https://lh3.googleusercontent.com/d/1jwYpw8R-lsQjNdFRInmeAH0CuAJ0x6lh=w1000",
    alt: "Cozy indoor February picture",
    caption: "Winter chill outside, hot tea inside, and endless talk about future dreams.",
    date: "13 February 2026",
    location: "Living Room",
    vibe: "Winter Warmth"
  },

  // --- Photo 14: (IMG-20250920-WA0035) ---
  {
    id: 14,
    title: "Throwback Roots",
    url: "https://lh3.googleusercontent.com/d/1PNcNmdvzRPn8-hTW3ubaWTmftMUT_0XU=w1000",
    alt: "Classic nostalgic snapshot from the memory archive",
    caption: "From earlier seasons of life right up to turning 22. One thing never changes: she is our Panda.",
    date: "20 September 2025",
    location: "Memory Vault",
    vibe: "Timeless Bond"
  },


];
