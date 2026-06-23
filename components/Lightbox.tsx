'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, ArrowLeft, ArrowRight } from '@/components/Icons';

interface LightboxImage {
  url: string;
  alt: string;
  category?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard navigation and closing
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % images.length;
        onNavigate(nextIndex);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        onNavigate(prevIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus Lock on Open
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 bg-slate-deep/95 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-fade-in"
      onClick={onClose}
    >
      {/* Top Banner and Controls */}
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/50 to-transparent p-4 flex justify-between items-center z-10 text-white">
        <div className="font-display uppercase text-sm sm:text-base tracking-wider font-semibold">
          {currentImage.category ? `${currentImage.category} • ` : ''} Image {currentIndex + 1} of {images.length}
        </div>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 border border-white/20 hover:border-arctic-blue hover:bg-arctic-blue/10 rounded transition-colors duration-150 text-white cursor-pointer"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Main Image Slider Container */}
      <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous Image"
          className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 p-3 border border-white/10 hover:border-arctic-blue hover:bg-arctic-blue text-white rounded transition-all duration-150 z-20 cursor-pointer"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next Image"
          className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 p-3 border border-white/10 hover:border-arctic-blue hover:bg-arctic-blue text-white rounded transition-all duration-150 z-20 cursor-pointer"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>

        {/* Next.js Image Element (Fully responsive & optimized) */}
        <div className="relative w-full h-full max-h-full">
          <Image
            src={currentImage.url}
            alt={currentImage.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority={true}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Bottom Subtitle Caption */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-6 text-center text-white z-10">
        <p className="font-body text-sm sm:text-base max-w-2xl mx-auto">
          {currentImage.alt}
        </p>
      </div>
    </div>
  );
}
