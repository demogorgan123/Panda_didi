import React, { useState, useEffect, useCallback } from 'react';
import { PhotoItem } from '../types';
import { GALLERY_PHOTOS } from '../data/galleryData';
import { Heart, Maximize2, X, ChevronLeft, ChevronRight, Calendar, MapPin, Sparkles, Filter } from 'lucide-react';
import { sounds } from '../utils/audio';

export const PhotoGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [likes, setLikes] = useState<Record<number, number>>({
    1: 42,
    2: 58,
    3: 39,
    4: 64,
    5: 81,
    6: 49,
    7: 35,
    8: 91,
    9: 44,
    10: 73,
    11: 67,
    12: 52,
    13: 88,
    14: 61,
    15: 75,
    16: 46,
    17: 59,
    18: 68,
    19: 94,
    20: 120,
  });

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'sister', label: 'Sister Instincts 🛡️' },
    { id: 'midnight', label: 'Midnight Calls 🌙' },
    { id: 'food_sleep', label: 'Food & Sleep 🎋' },
    { id: 'chaos', label: 'Pure Chaos ⚡' },
    { id: 'milestone', label: 'Milestones 🌸' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const openLightbox = (id: number) => {
    const idx = GALLERY_PHOTOS.findIndex((p) => p.id === id);
    if (idx !== -1) {
      setSelectedPhotoIndex(idx);
      sounds.playChime();
    }
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showPrev = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) =>
        prev === 0 ? GALLERY_PHOTOS.length - 1 : (prev ?? 0) - 1
      );
      sounds.playChime();
    }
  }, [selectedPhotoIndex]);

  const showNext = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((prev) =>
        prev === GALLERY_PHOTOS.length - 1 ? 0 : (prev ?? 0) + 1
      );
      sounds.playChime();
    }
  }, [selectedPhotoIndex]);

  const handleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playChime();
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, showPrev, showNext]);

  const activeLightboxPhoto = selectedPhotoIndex !== null ? GALLERY_PHOTOS[selectedPhotoIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-500/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Memory Archive</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight mb-4">
          Unforgettable Panda Moments 📸
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg">
          Dedicated to Panda on her 22nd birthday: from impromptu midnight nostalgia calls to hot-pot feasts, hilarious life advice, and endless laughter. Click on any photo to view in high resolution with memory notes.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              id={`filter-btn-${cat.id}`}
              onClick={() => {
                sounds.playChime();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-neutral-950 font-bold shadow-md shadow-emerald-500/20 scale-105'
                  : 'bg-neutral-800/80 hover:bg-neutral-700/80 text-neutral-300 border border-neutral-700/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Responsive Grid (20 Photos) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredPhotos.map((photo) => {
          const isLiked = (likes[photo.id] || 0) > 0;
          return (
            <div
              key={photo.id}
              id={`photo-card-${photo.id}`}
              onClick={() => openLightbox(photo.id)}
              className="group relative bg-neutral-800/60 rounded-2xl overflow-hidden border border-neutral-700/70 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/40 cursor-pointer flex flex-col"
            >
              {/* Image Container with Aspect Ratio */}
              <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-neutral-900">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Top Badge: Category */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md text-[11px] font-semibold text-emerald-300 border border-emerald-500/30">
                    {photo.categoryLabel}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-neutral-900/90 text-neutral-100 border border-neutral-700 transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                {/* Vibe pill */}
                <div className="absolute bottom-3 right-3 z-10">
                  <span className="px-2 py-0.5 rounded-md bg-neutral-950/80 backdrop-blur-sm text-[10px] text-amber-300 font-medium border border-amber-400/20">
                    {photo.vibe}
                  </span>
                </div>
              </div>

              {/* Photo Information & Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-semibold text-base text-neutral-100 group-hover:text-emerald-300 transition-colors line-clamp-1 mb-1.5">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-3">
                    {photo.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-700/50 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1 truncate max-w-[150px]">
                    <Calendar className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{photo.date}</span>
                  </div>

                  {/* Like Button */}
                  <button
                    type="button"
                    id={`like-btn-${photo.id}`}
                    onClick={(e) => handleLike(photo.id, e)}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-neutral-700/60 text-neutral-300 hover:text-rose-400 transition-colors"
                  >
                    <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-400 fill-rose-400' : ''}`} />
                    <span className="font-semibold text-xs">{likes[photo.id] || 0}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeLightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Lightbox Window */}
          <div
            className="relative bg-neutral-900 border border-neutral-700 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-900/90">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {activeLightboxPhoto.categoryLabel}
                </span>
                <span className="text-xs text-neutral-400 hidden sm:inline">
                  {activeLightboxPhoto.vibe}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="lightbox-close-btn"
                  onClick={closeLightbox}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Body: Image + Info */}
            <div className="flex-1 overflow-y-auto flex flex-col md:flex-row">
              {/* Main Image */}
              <div className="relative flex-1 bg-black flex items-center justify-center min-h-[260px] sm:min-h-[400px]">
                <img
                  src={activeLightboxPhoto.url}
                  alt={activeLightboxPhoto.alt}
                  className="max-h-[65vh] w-auto object-contain mx-auto"
                />

                {/* Prev & Next Floating Buttons */}
                <button
                  type="button"
                  id="lightbox-prev-btn"
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                  title="Previous Memory (Left Arrow)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  type="button"
                  id="lightbox-next-btn"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                  title="Next Memory (Right Arrow)"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Sidebar Description & Memory Details */}
              <div className="w-full md:w-80 p-5 bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                      {activeLightboxPhoto.vibe}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-neutral-100 mb-3">
                    {activeLightboxPhoto.title}
                  </h3>

                  <div className="font-handwriting text-neutral-200 text-lg sm:text-xl leading-relaxed bg-neutral-800/40 p-4 rounded-xl border border-neutral-700/60 mb-4">
                    “{activeLightboxPhoto.caption}”
                  </div>

                  <div className="space-y-2 text-xs text-neutral-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{activeLightboxPhoto.date}</span>
                    </div>
                    {activeLightboxPhoto.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{activeLightboxPhoto.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Controls in Lightbox */}
                <div className="pt-4 border-t border-neutral-800 mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    id={`lightbox-like-${activeLightboxPhoto.id}`}
                    onClick={(e) => handleLike(activeLightboxPhoto.id, e)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 transition-all font-semibold text-xs cursor-pointer"
                  >
                    <Heart className="w-4 h-4 fill-rose-400 text-rose-400" />
                    <span>Love this memory ({likes[activeLightboxPhoto.id] || 0})</span>
                  </button>

                  <span className="text-[11px] text-neutral-400 italic">
                    Press ← / → keys
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
