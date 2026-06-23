'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BUSINESS_PHONE } from '@/lib/constants';

export default function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide bar once footer is in view
    const footerElement = document.querySelector('footer');
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(footerElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 lg:hidden bg-slate-deep border-t border-steel-mid/20 shadow-xl px-4 py-3 pb-safe animate-fade-in">
      <div className="flex gap-4">
        {/* Call Now button */}
        <a
          href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
          className="flex-1 flex items-center justify-center gap-2 bg-arctic-blue hover:bg-sky-600 text-white py-3 px-4 font-display font-black text-sm uppercase tracking-wider text-center transition-colors shadow-sm"
        >
          <span>📞 Call (214) 555-0247</span>
        </a>

        {/* Schedule online button */}
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white py-3 px-4 font-display font-bold text-xs uppercase tracking-wide text-center border border-steel-mid/40 transition-colors"
        >
          <span>Schedule Online</span>
        </Link>
      </div>
    </div>
  );
}
