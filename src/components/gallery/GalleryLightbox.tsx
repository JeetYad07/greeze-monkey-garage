import React, { useEffect, useCallback, useState } from 'react';
import type { GalleryItem } from '../../data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onNavigate
}) => {
  const [showBefore, setShowBefore] = useState(false);

  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  const handlePrev = useCallback(() => {
    if (hasPrev) {
      setShowBefore(false);
      onNavigate(items[currentIndex - 1]);
    }
  }, [hasPrev, currentIndex, items, onNavigate]);

  const handleNext = useCallback(() => {
    if (hasNext) {
      setShowBefore(false);
      onNavigate(items[currentIndex + 1]);
    }
  }, [hasNext, currentIndex, items, onNavigate]);

  // Keyboard controls
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose, handlePrev, handleNext]);

  if (!item) return null;

  const currentImage = showBefore && item.beforeImageUrl ? item.beforeImageUrl : item.imageUrl;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#17191A]/95 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-[#202426] text-[#F7F5F0] hover:text-white border border-[#353B3E] transition-colors focus-visible:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev Navigation Button */}
      {hasPrev && (
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#202426]/80 text-[#F7F5F0] hover:bg-[#D97732] hover:text-[#17191A] border border-[#353B3E] transition-colors hidden sm:flex items-center justify-center focus-visible:outline-none"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Next Navigation Button */}
      {hasNext && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#202426]/80 text-[#F7F5F0] hover:bg-[#D97732] hover:text-[#17191A] border border-[#353B3E] transition-colors hidden sm:flex items-center justify-center focus-visible:outline-none"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Image & Details Container */}
      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        <div className="relative rounded-lg overflow-hidden max-h-[70vh] bg-[#202426] border border-[#353B3E] shadow-2xl flex items-center justify-center">
          <img
            src={currentImage}
            alt={item.alt}
            className="max-h-[68vh] w-auto object-contain transition-opacity duration-300"
          />

          {/* Before / After Toggle Button if applicable */}
          {item.beforeImageUrl && (
            <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-[#202426]/90 backdrop-blur-md p-1 rounded border border-white/20">
              <button
                onClick={() => setShowBefore(false)}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold uppercase transition-colors ${
                  !showBefore ? 'bg-[#D97732] text-[#17191A]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                After (Finished)
              </button>
              <button
                onClick={() => setShowBefore(true)}
                className={`px-3 py-1 rounded text-xs font-mono font-semibold uppercase transition-colors ${
                  showBefore ? 'bg-[#D97732] text-[#17191A]' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Before (Original)
              </button>
            </div>
          )}
        </div>

        {/* Caption & Metadata */}
        <div className="w-full mt-4 bg-[#202426] p-4 rounded-lg border border-[#353B3E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#2C3235] text-[#F0B27A] border border-[#3E4549]">
                {item.category}
              </span>
              <span className="text-xs font-mono text-[#DDD9D0]/60">
                {currentIndex + 1} of {items.length}
              </span>
            </div>
            <h3 className="text-base font-semibold font-heading text-[#F7F5F0]">
              {item.title}
            </h3>
            <p className="text-xs text-[#DDD9D0]/80 mt-0.5">{item.description}</p>
          </div>

          {/* Mobile Prev/Next navigation */}
          <div className="flex sm:hidden items-center gap-2 w-full justify-between pt-2 border-t border-[#353B3E]">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className="px-3 py-1.5 rounded bg-[#2C3235] text-xs font-mono text-[#DDD9D0] disabled:opacity-30"
            >
              ← Prev
            </button>
            <span className="text-xs font-mono text-[#DDD9D0]">
              {currentIndex + 1}/{items.length}
            </span>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className="px-3 py-1.5 rounded bg-[#2C3235] text-xs font-mono text-[#DDD9D0] disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
