import React from 'react';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-arctic-blue focus:text-white focus:font-display focus:text-sm focus:uppercase focus:font-bold focus:tracking-wider focus:outline-none"
    >
      Skip to main content
    </a>
  );
}
