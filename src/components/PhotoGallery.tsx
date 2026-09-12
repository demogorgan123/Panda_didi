import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_PHOTOS, DRIVE_VIDEOS } from '../data/galleryData';
import { 
  Heart, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Sparkles, 
  Play, 
  Video
} from 'lucide-react';
import { sounds } from '../utils/audio';

export const PhotoGallery: React.FC = () => {
  // Active video index from DRIVE_VIDEOS
  const [activeVideoIndex, setActiveVideoIndex] = useState<number>(0);

  // Selected photo index for lightbox
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Likes state
  const [likes, setLikes] = useState<Record<number, number>>({
    1: 48,
    2: 65,
    3: 42,
    4: 71,
    5: 89,
    6: 53,
    7: 38,
    8: 96,
    9: 50,
    10: 79,
    11: 72,
    12: 58,
    13: 94,
    14: 67,
    15: 112,
    16: 135,
  });

  const activeVideo = DRIVE_VIDEOS[activeVideoIndex];

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
          <span>Classic Moments • Friends to Best Friends to Big Sister</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-100 tracking-tight mb-4">
          Classic Moments &amp; Birthday Clips 🎬
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg">
          Dedicated to Parihar / Panda / Didi on her 22nd birthday: {DRIVE_VIDEOS.length} birthday videos and {GALLERY_PHOTOS.length} candid classic moments arranged in chronological order across our journey.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 1. TOP OF MEMORIES: GOOGLE DRIVE VIDEO FILES (FIRST THING VISITORS SEE)   */}
      {/* ========================================================================= */}
      <div className="mb-16 bg-gradient-to-b from-neutral-900/90 to-neutral-900/50 rounded-3xl p-5 sm:p-8 border border-neutral-800 shadow-2xl backdrop-blur-sm">
        {/* Videos Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              <Video className="w-4 h-4 text-emerald-400" />
              <span>Video Archive • Birthday Clips</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-100">
              Live Video Clips of Panda 🎥
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs px-3 py-1.5 rounded-full bg-neutral-800/90 border border-neutral-700 text-neutral-300 font-medium">
              5 Live Moments
            </span>
          </div>
        </div>

        {/* Active Featured Video Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Video Frame */}
          <div className="lg:col-span-8 bg-black rounded-2xl overflow-hidden border border-neutral-800 shadow-xl relative aspect-video flex items-center justify-center">
            <iframe
              src={`https://drive.google.com/file/d/${activeVideo.driveId}/preview`}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              title={activeVideo.title}
            />
          </div>

          {/* Active Video Info & Playlist */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            {/* Active Video Details */}
            <div className="bg-neutral-800/60 rounded-2xl p-5 border border-neutral-700/70">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  Video {activeVideo.id} of {DRIVE_VIDEOS.length}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  {activeVideo.size}
                </span>
              </div>

              <h4 className="font-display font-bold text-lg text-neutral-100 mb-1.5">
                {activeVideo.title}
              </h4>
              <p className="text-xs text-neutral-400 mb-3 font-mono">
                {activeVideo.fileName} • {activeVideo.date}
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeVideo.caption}
              </p>
            </div>

            {/* Quick Video Switcher Strip */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                Select Video Clip:
              </p>
              <div className="space-y-2">
                {DRIVE_VIDEOS.map((vid, index) => {
                  const isActive = index === activeVideoIndex;
                  return (
                    <button
                      key={vid.id}
                      type="button"
                      onClick={() => {
                        sounds.playChime();
                        setActiveVideoIndex(index);
                      }}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${
                        isActive
                          ? 'bg-emerald-500/15 border-emerald-500/60 shadow-md shadow-emerald-500/10'
                          : 'bg-neutral-800/40 hover:bg-neutral-800/80 border-neutral-700/60 text-neutral-300'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-emerald-500 text-neutral-950 font-bold' : 'bg-neutral-700 text-neutral-300'
                      }`}>
                        <Play className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs sm:text-sm font-semibold text-neutral-100 truncate">
                          {vid.title}
                        </div>
                        <div className="text-[11px] text-neutral-400 truncate">
                          {vid.date} • {vid.size}
                        </div>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                          Playing
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. CLASSIC MOMENTS (CHRONOLOGICAL ORDER, STREAMLINED CLEAN LAYOUT)        */}
      {/* ========================================================================= */}
      <div className="mb-8 flex items-center justify-between pb-4 border-b border-neutral-800">
        <div>
          <h3 className="font-display text-2xl font-bold text-neutral-100 flex items-center gap-2">
            <span>Classic Moments 📷</span>
            <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400 border border-neutral-700">
              {GALLERY_PHOTOS.length} photos
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
            Preserved in chronological order from our favorite days together.
          </p>
        </div>
      </div>

      {/* Responsive Grid (Chronological Classic Moments) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {GALLERY_PHOTOS.map((photo) => {
          const isLiked = (likes[photo.id] || 0) > 0;
          return (
            <div
              key={photo.id}
              id={`photo-card-${photo.id}`}
              onClick={() => openLightbox(photo.id)}
              className="group relative bg-neutral-800/70 rounded-2xl overflow-hidden border border-neutral-700/70 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/40 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-neutral-900">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-neutral-900/90 text-neutral-100 border border-neutral-700 transform scale-75 group-hover:scale-100 transition-transform shadow-lg">
                    <Maximize2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>

              {/* Photo Footer Bar (Clean: Date, Location & Like) */}
              <div className="p-3.5 flex items-center justify-between text-xs text-neutral-300">
                <div className="flex items-center gap-1.5 truncate">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-medium text-neutral-200 truncate">{photo.date}</span>
                  {photo.location && (
                    <>
                      <span className="text-neutral-600">•</span>
                      <span className="text-neutral-400 truncate text-[11px]">{photo.location}</span>
                    </>
                  )}
                </div>

                {/* Like Button */}
                <button
                  type="button"
                  id={`like-btn-${photo.id}`}
                  onClick={(e) => handleLike(photo.id, e)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-md hover:bg-neutral-700/60 text-neutral-300 hover:text-rose-400 transition-colors cursor-pointer shrink-0 ml-2"
                  title="Like moment"
                >
                  <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-400 fill-rose-400' : ''}`} />
                  <span className="font-semibold text-xs">{likes[photo.id] || 0}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal (Streamlined & Focused on Classic Moments) */}
      {activeLightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Lightbox Window */}
          <div
            className="relative bg-neutral-900 border border-neutral-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-900/90">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Classic Moment #{(selectedPhotoIndex ?? 0) + 1} of {GALLERY_PHOTOS.length}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{activeLightboxPhoto.date}</span>
                  {activeLightboxPhoto.location && (
                    <>
                      <span className="text-neutral-600">•</span>
                      <span>{activeLightboxPhoto.location}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  id="lightbox-close-btn"
                  onClick={closeLightbox}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Body: Full Photo */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[500px] p-2 sm:p-4">
              <img
                src={activeLightboxPhoto.url}
                alt={activeLightboxPhoto.alt}
                className="max-h-[72vh] w-auto max-w-full object-contain mx-auto rounded-lg shadow-xl"
              />

              {/* Prev & Next Floating Buttons */}
              <button
                type="button"
                id="lightbox-prev-btn"
                onClick={showPrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                title="Previous Moment (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                id="lightbox-next-btn"
                onClick={showNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                title="Next Moment (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Bar */}
            <div className="px-5 py-3 border-t border-neutral-800 bg-neutral-900/90 flex items-center justify-between">
              <span className="text-xs text-neutral-500 hidden sm:inline">
                Use Left / Right arrow keys to navigate
              </span>
              <div className="flex items-center gap-3 ml-auto">
                <button
                  type="button"
                  onClick={(e) => handleLike(activeLightboxPhoto.id, e)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Heart className={`w-4 h-4 ${(likes[activeLightboxPhoto.id] || 0) > 0 ? 'text-rose-400 fill-rose-400' : ''}`} />
                  <span>{likes[activeLightboxPhoto.id] || 0}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
