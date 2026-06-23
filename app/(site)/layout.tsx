'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';
import SkipToContent from '@/components/SkipToContent';
import { trackPageView } from '@/lib/analytics';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <SkipToContent />
      
      {/* Sticky Header Nav */}
      <Header />

      {/* Main Focus container */}
      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none pb-12 lg:pb-0">
        {children}
      </main>

      {/* Corporate footer */}
      <Footer />

      {/* Mobile-only Sticky call buttons */}
      <StickyCallBar />
    </div>
  );
}
