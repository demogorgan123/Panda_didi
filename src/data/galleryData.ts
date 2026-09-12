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
    title: "Batch of Honour - Agas26",
    date: "19 March 2026",
    size: "3.9 MB",
    caption: "Kaand? do sports kaand follows my brotherr."
  },
  {
    id: 2,
    driveId: "1Wz2busX11YZhsd77eYwA14DmMr_1ovYo",
    fileName: "VID-20260430-WA0255.mp4",
    title: "Parihar with army",
    date: "30 April 2026",
    size: "7.4 MB",
    caption: "Group ki pehli ghaat trip!!!"
  },
  {
    id: 3,
    driveId: "1LJnij_fFuwdJGU3grA164MorW2pcuCH2",
    fileName: "VID-20260430-WA0298.mp4",
    title: "Suhana mausam with chantu bantu",
    date: "30 April 2026",
    size: "5.5 MB",
    caption: "PArihar didi proud of her chantu bantu."
  },
  {
    id: 4,
    driveId: "10Dsx1SZJAYkqXP6_Z_7MsktFDyz-QH2r",
    fileName: "VID-20260504-WA0159.mp4",
    title: "Ye to mai hun",
    date: "04 May 2026",
    size: "4.9 MB",
    caption: "Mai record karungi jo karna karo!!!"
  },
  {
    id: 5,
    driveId: "16HR5mbq8k9pJovRUSjJroSZzDQlixWkK",
    fileName: "VID-20260513-WA0065.mp4",
    title: "Panda Energy in Full Effect",
    date: "13 May 2026",
    size: "1.9 MB",
    caption: "Bhai ka bithday hai godi lena to banta hai!!"
  }
];

// =========================================================================
// 📸 CLASSIC MOMENTS (14 PHOTOS ARRANGED IN CHRONOLOGICAL ORDER)
// All titles, captions, and vibes removed per request for a clean gallery.
// =========================================================================
export const GALLERY_PHOTOS: PhotoItem[] = [
  // --- Photo 1: 20 September 2025 (IMG-20250920-WA0035) ---
  {
    id: 1,
    url: "https://lh3.googleusercontent.com/d/1PNcNmdvzRPn8-hTW3ubaWTmftMUT_0XU=w1000",
    alt: "Nostalgic throwback memory",
    date: "20 September 2025",
    location: "Memory Vault"
  },

  // --- Photo 2: 13 February 2026 (IMG-20260213-WA0051) ---
  {
    id: 2,
    url: "https://lh3.googleusercontent.com/d/1jwYpw8R-lsQjNdFRInmeAH0CuAJ0x6lh=w1000",
    alt: "Cozy February moment",
    date: "13 February 2026",
    location: "Living Room"
  },

  // --- Photo 3: 19 March 2026 (IMG-20260319-WA0018) ---
  {
    id: 3,
    url: "https://lh3.googleusercontent.com/d/1eQcWkfbaoEI3OuyejuBXuUHePjwXfwjn=w1000",
    alt: "March candid laughter",
    date: "19 March 2026",
    location: "Mid-Walk"
  },

  // --- Photo 4: 19 March 2026 (IMG-20260319-WA0022) ---
  {
    id: 4,
    url: "https://lh3.googleusercontent.com/d/1E6C4Rpeaz6j3YJGQ7WM6yDJ0atvt8eum=w1000",
    alt: "Spring candid smile",
    date: "19 March 2026",
    location: "Walking Route"
  },

  // --- Photo 5: 30 April 2026 (IMG_20260430_211708101_AE) ---
  {
    id: 5,
    url: "https://lh3.googleusercontent.com/d/1jTiChPr2O-uKwjQyZfAj2s90RI_WneBL=w1000",
    alt: "Big sister portrait",
    date: "30 April 2026",
    location: "Out and About"
  },

  // --- Photo 6: 30 April 2026 (IMG-20260430-WA0296) ---
  {
    id: 6,
    url: "https://lh3.googleusercontent.com/d/11suYOrTlZqB9KXDidxqNWe218IAK5CCV=w1000",
    alt: "April evening laughter",
    date: "30 April 2026",
    location: "Dinner Table"
  },

  // --- Photo 7: 04 May 2026 (IMG-20260504-WA0152) ---
  {
    id: 7,
    url: "https://lh3.googleusercontent.com/d/1d5cqu0hy-lM73XdVPQtMWsh6Oa5dD41Z=w1000",
    alt: "May sunshine moment",
    date: "04 May 2026",
    location: "Sunny Spot"
  },

  // --- Photo 8: 03 June 2026 (IMG-20260603-WA0017) ---
  {
    id: 8,
    url: "https://lh3.googleusercontent.com/d/1ccRRZfI59C-wa87FCOvEbKab7lvB-JG_=w1000",
    alt: "June spontaneous day out",
    date: "03 June 2026",
    location: "City Streets"
  },

  // --- Photo 9: 03 June 2026 (IMG-20260603-WA0042) ---
  {
    id: 9,
    url: "https://lh3.googleusercontent.com/d/1M2UojVqwPkMW18ry-WuUxdyZSe2f4oqS=w1000",
    alt: "Cafe afternoon meetup",
    date: "03 June 2026",
    location: "Favorite Cafe"
  },

  // --- Photo 10: 28 July 2026 (IMG-20260728-WA0374) ---
  {
    id: 10,
    url: "https://lh3.googleusercontent.com/d/1sd8NZeYOBNCtDQaa1zbyTpwKHlnywXKj=w1000",
    alt: "Relaxed cozy afternoon",
    date: "28 July 2026",
    location: "Cozy Corner"
  },

  // --- Photo 11: 28 July 2026 (IMG-20260728-WA0421) ---
  {
    id: 11,
    url: "https://lh3.googleusercontent.com/d/1fGNrIzn22yOVBw22qFjtj0DlSoBl_XA6=w1000",
    alt: "Playful candid smile",
    date: "28 July 2026",
    location: "Weekend Wander"
  },

  // --- Photo 12: 28 July 2026 (IMG-20260728-WA0458) ---
  {
    id: 12,
    url: "https://lh3.googleusercontent.com/d/1ujVh5t-xh0qPZ5eEPBroWhfgfaH3sqmY=w1000",
    alt: "Summer outdoor snapshot",
    date: "28 July 2026",
    location: "Summer Afternoon Outing"
  },

  // --- Photo 13: 28 August 2026 (IMG-20260828-WA0023) ---
  {
    id: 13,
    url: "https://lh3.googleusercontent.com/d/1Zva4_ZBofxhhZX4yv6dLr98OTyiP-PPU=w1000",
    alt: "Late night laughs",
    date: "28 August 2026",
    location: "Late Night Hangout"
  },

  // --- Photo 14: 04 September 2026 (IMG-20260904-WA0052) ---
  {
    id: 14,
    url: "https://lh3.googleusercontent.com/d/1mIiI5qAYQELgjH8FlIVHU_g-tDYWILmP=w1000",
    alt: "Panda looking radiant and smiling in warm natural lighting",
    date: "04 September 2026",
    location: "Home Sweet Home"
  }
];
