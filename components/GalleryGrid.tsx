'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox';

interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { url: 'https://picsum.photos/seed/hvac_p1/600/800', alt: 'Commercial split system condenser placed neatly on an Uptown rooftop layout', category: 'AC Installation' },
  { url: 'https://picsum.photos/seed/hvac_p2/800/600', alt: 'Premium copper refrigerant line soldering insulated neatly by our master installer', category: 'AC Repair' },
  { url: 'https://picsum.photos/seed/hvac_p3/700/500', alt: 'Multi-zone gas furnace unit installation displaying perfectly routed flues and gas lines', category: 'Heating Installation' },
  { url: 'https://picsum.photos/seed/hvac_p4/650/450', alt: 'Smart thermostat wall mounting wired cleanly showing custom cooling schedulers', category: 'Smart Home' },
  { url: 'https://picsum.photos/seed/hvac_p5/600/600', alt: 'Detailed video camera duct review showing completely dust-free structural trunk lines', category: 'Duct Cleaning' },
  { url: 'https://picsum.photos/seed/hvac_p6/500/700', alt: 'NATE-certified technician checking compressor electrical capacitors with digital multimeters', category: 'AC Repair' },
  { url: 'https://picsum.photos/seed/hvac_p7/800/400', alt: 'Germicidal UV-C light air sanitation system operating within central return lines', category: 'Air Quality' },
  { url: 'https://picsum.photos/seed/hvac_p8/400/600', alt: 'Condensate safety pan flush and chemical clean during Spring maintenance membership tuning', category: 'Maintenance' },
  { url: 'https://picsum.photos/seed/hvac_p9/600/500', alt: 'A parallel row of heavy high-output heat pumps fitted neatly in Dallas storage units', category: 'AC Installation' },
  { url: 'https://picsum.photos/seed/hvac_p10/500/500', alt: 'Applying thermal mastic paint to joints to secure and prevent cooling leaks in ducts', category: 'Duct Cleaning' },
  { url: 'https://picsum.photos/seed/hvac_p11/620/820', alt: 'Gas burner inspection and flame sensor replacement on industrial furnace heating grids', category: 'Heating Repair' },
  { url: 'https://picsum.photos/seed/hvac_p12/820/620', alt: 'Homeowner testing high airflow from clean and freshly cleaned registers', category: 'Air Quality' },
];

export default function GalleryGrid() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const handleNavigate = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* 12 Image Masonry Grid using Native CSS columns (no heavy masonry library) */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 max-w-7xl mx-auto px-4">
        {galleryImages.map((image, index) => {
          // First 4 images are loaded with high priority for visual LCP speeds
          const isPriority = index < 4;

          return (
            <article
              key={index}
              className="break-inside-avoid bg-white border border-steel-mid/10 rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg hover:border-arctic-blue/30 transition-all duration-200"
              onClick={() => openLightbox(index)}
            >
              {/* Image Frame wrapping Next Image component */}
              <div className="relative w-full h-[240px] sm:h-[300px] bg-slate-100 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={isPriority}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Accent bar inside zoom category */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                  <div className="text-white">
                    <span className="font-display font-medium text-[10px] bg-arctic-blue uppercase tracking-widest px-2 py-0.5 rounded">
                      {image.category}
                    </span>
                    <p className="font-body text-xs mt-1.5 line-clamp-1">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-card tags */}
              <div className="p-4 flex justify-between items-center bg-white border-t border-gray-100">
                <span className="font-display font-bold text-xs uppercase text-slate-deep tracking-wider">
                  {image.category}
                </span>
                <span className="text-arctic-blue text-xs font-bold font-display group-hover:translate-x-1 transition-transform">
                  ZOOM 🔍
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Accessible Interactive Overlay Dialog */}
      <Lightbox
        images={galleryImages}
        currentIndex={activeIndex}
        isOpen={isOpen}
        onClose={closeLightbox}
        onNavigate={handleNavigate}
      />
    </>
  );
}
