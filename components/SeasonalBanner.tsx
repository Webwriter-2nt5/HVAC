'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Snowflake, Flame } from '@/components/Icons';

export default function SeasonalBanner() {
  const [isSummer, setIsSummer] = useState<boolean>(true);

  useEffect(() => {
    // Summer is defined from May (4) to September (8)
    const month = new Date().getMonth();
    const summer = month >= 4 && month <= 8;
    const timer = setTimeout(() => {
      setIsSummer(summer);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-slate-deep text-ice-white relative overflow-hidden py-12 px-6 sm:px-12 md:px-24">
      {/* Background Decorative Accent */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-5 hidden lg:block">
        {isSummer ? (
          <Snowflake className="w-96 h-96 text-arctic-blue" />
        ) : (
          <Flame className="w-96 h-96 text-arctic-blue" />
        )}
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="bg-slate-800 p-4 rounded-lg border border-steel-mid/30 shrink-0">
          {isSummer ? (
            <Snowflake className="w-12 h-12 text-arctic-blue" />
          ) : (
            <Flame className="w-12 h-12 text-arctic-blue" />
          )}
        </div>

        <div className="flex-grow text-center md:text-left">
          <span className="font-display uppercase tracking-wider text-xs text-arctic-blue font-semibold">
            {isSummer ? "Beat the Dallas Summer Heat!" : "Stay Safe in Dallas Winter Freezes!"}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-1 uppercase leading-none">
            {isSummer ? "AC Peak Efficiency Tune-Up" : "Gas Furnace Safety & Repair Sweep"}
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-300 mt-2 max-w-xl">
            {isSummer 
              ? "Ensure your air conditioning is prepared to endure triple-digit temperatures. Prevent high energy bills and expensive summer shutdowns with our 27-point professional diagnostic."
              : "Texas freezes hit hard and fast. Protect your family with complete furnace safety clearances, electrical diagnostics, and strict carbon monoxide leak checks."}
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <Link
            href="/contact"
            id="seasonal-banner-cta"
            className="block text-center px-6 py-3 bg-arctic-blue hover:bg-sky-600 text-white font-display text-base uppercase font-bold tracking-wider transition-colors duration-200"
          >
            {isSummer ? "Schedule Cooling Care" : "Secure Heating Plan"}
          </Link>
        </div>
      </div>
    </section>
  );
}
