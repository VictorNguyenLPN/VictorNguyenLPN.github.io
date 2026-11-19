import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MEMORY_PHOTOS, type MemoryPhoto } from '../data/portfolio';

const BY_ID = Object.fromEntries(
  MEMORY_PHOTOS.map((photo) => [photo.id, photo])
) as Record<string, MemoryPhoto>;

interface MomentFrameProps {
  photo: MemoryPhoto;
  onOpen: (id: string, trigger: HTMLButtonElement) => void;
}

function MomentFrame({ photo, onOpen }: MomentFrameProps) {
  return (
    <button
      type="button"
      className={`moment-frame moment-frame--${photo.id}`}
      onClick={(e) => onOpen(photo.id, e.currentTarget)}
      aria-label={`View full size: ${photo.alt}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: photo.objectPosition }}
        className="moment-img"
      />
      <span className="moment-expand-hint" aria-hidden="true">
        <Expand size={14} />
      </span>
    </button>
  );
}

export const Moments: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const activeIndex = activeId
    ? MEMORY_PHOTOS.findIndex((photo) => photo.id === activeId)
    : -1;
  const activePhoto = activeIndex >= 0 ? MEMORY_PHOTOS[activeIndex] : null;

  const handleOpen = useCallback((id: string, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setActiveId(id);
  }, []);

  const handleClose = useCallback(() => {
    setActiveId(null);
    lastTriggerRef.current?.focus();
  }, []);

  const handlePrev = useCallback(() => {
    if (activeIndex < 0) return;
    const prevIdx = (activeIndex - 1 + MEMORY_PHOTOS.length) % MEMORY_PHOTOS.length;
    setActiveId(MEMORY_PHOTOS[prevIdx].id);
  }, [activeIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex < 0) return;
    const nextIdx = (activeIndex + 1) % MEMORY_PHOTOS.length;
    setActiveId(MEMORY_PHOTOS[nextIdx].id);
  }, [activeIndex]);

  useEffect(() => {
    if (!activePhoto) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhoto, handleClose, handlePrev, handleNext]);

  return (
    <section className="section moments-section" id="moments" aria-label="Moments">
      <div className="container">
        <h2 className="section-heading reveal">Moments</h2>

        <p className="moments-intro reveal">
          A few fun facts about me: I specialized in chemistry in high school, love photography—especially
          capturing landscapes—and enjoy playing sports in my free time. My interest in technology began
          in sixth grade, when I discovered the Arduino ecosystem and worked on a few projects focused on
          railway safety.
        </p>

        <div className="moments-stack reveal">
          {/* Band 1: 5 conference & campus highlights */}
          <div className="moments-band moments-band--one">
            <div className="moments-col">
              <MomentFrame photo={BY_ID.image4} onOpen={handleOpen} />
            </div>
            <div className="moments-col">
              <MomentFrame photo={BY_ID.image5} onOpen={handleOpen} />
              <MomentFrame photo={BY_ID.image2} onOpen={handleOpen} />
            </div>
            <div className="moments-col">
              <MomentFrame photo={BY_ID.image3} onOpen={handleOpen} />
              <MomentFrame photo={BY_ID.image1} onOpen={handleOpen} />
            </div>
          </div>

          {/* Band 2: 4 competition, teamwork & award moments */}
          <div className="moments-band moments-band--two">
            <div className="moments-col">
              <MomentFrame photo={BY_ID.image7} onOpen={handleOpen} />
              <div className="moments-subrow">
                <MomentFrame photo={BY_ID.image8} onOpen={handleOpen} />
                <MomentFrame photo={BY_ID.image6} onOpen={handleOpen} />
              </div>
            </div>
            <div className="moments-col">
              <MomentFrame photo={BY_ID.image9} onOpen={handleOpen} />
            </div>
          </div>

          {/* Band 3: 3 campus & life memories */}
          <div className="moments-band moments-band--three">
            <MomentFrame photo={BY_ID.image10} onOpen={handleOpen} />
            <MomentFrame photo={BY_ID.image11} onOpen={handleOpen} />
            <MomentFrame photo={BY_ID.image12} onOpen={handleOpen} />
          </div>
        </div>
      </div>

      {activePhoto &&
        createPortal(
          <div
            className="lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.alt}
            onClick={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          >
            <button
              ref={closeBtnRef}
              type="button"
              className="lightbox-close-btn"
              onClick={handleClose}
              aria-label="Close full-size image"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-nav-btn--prev"
              onClick={handlePrev}
              aria-label="Previous photo"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            <figure className="lightbox-content">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="lightbox-img"
              />
              <figcaption className="lightbox-caption">{activePhoto.alt}</figcaption>
            </figure>

            <button
              type="button"
              className="lightbox-nav-btn lightbox-nav-btn--next"
              onClick={handleNext}
              aria-label="Next photo"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>,
          document.body
        )}
    </section>
  );
};
