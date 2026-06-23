'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Snowflake } from '@/components/Icons';
import { BUSINESS_NAME, BUSINESS_PHONE } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/testimonials" },
    { label: "FAQ", href: "/faq" }
  ];

  // Close drawer on path change
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Accessibility focus management: focus on close button
      if (closeBtnRef.current) {
        closeBtnRef.current.focus();
      }
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-deep text-white border-b border-steel-mid/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          id="header-logo"
          className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-arctic-blue outline-none"
        >
          <div className="bg-arctic-blue/15 p-1.5 rounded border border-arctic-blue/30 shrink-0">
            <Snowflake className="w-6 h-6 text-arctic-blue" />
          </div>
          <span className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-white">
            ARCTIC BREEZE <span className="text-arctic-blue font-semibold">HVAC</span>
          </span>
        </Link>

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Desktop Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`font-display text-sm uppercase tracking-wider font-semibold transition-colors duration-150 py-2 hover:text-arctic-blue ${
                  isActive ? 'text-arctic-blue border-b-2 border-b-arctic-blue' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Phone and Schedule Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
            id="header-phone-desktop"
            className="font-display uppercase text-sm font-bold text-gray-300 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="text-arctic-blue">📞</span> {BUSINESS_PHONE}
          </a>
          
          <Link
            href="/contact"
            id="header-schedule-desktop"
            className="px-5 py-2.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-sm uppercase font-bold tracking-wide transition-colors duration-150"
          >
            Schedule Service
          </Link>
        </div>

        {/* Mobile Hamburger toggle button */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
            id="header-phone-mobile"
            className="bg-arctic-blue/10 p-2 border border-arctic-blue/30 rounded text-arctic-blue flex items-center justify-center shrink-0"
            aria-label="Call Arctic Breeze"
          >
            <span>📞</span>
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            id="hamburger-btn"
            className="p-2 border border-steel-mid/30 rounded text-white hover:border-arctic-blue font-bold focus:outline-none"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile slide-in Navigation Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-deep/75 backdrop-blur-xs flex justify-end"
          onClick={toggleMenu}
        >
          <div
            ref={drawerRef}
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
            className="w-4/5 max-w-sm bg-slate-deep border-l border-steel-mid/20 h-full p-6 flex flex-col justify-between shadow-2xl animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer header control */}
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-steel-mid/20">
                <span className="font-display font-bold text-lg uppercase text-white tracking-widest">
                  Menu Navigation
                </span>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={toggleMenu}
                  aria-label="Close menu drawer"
                  id="drawer-close-btn"
                  className="p-2 text-gray-400 hover:text-white border border-steel-mid/30 rounded transition-colors focus:outline-none"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Navigation links stack */}
              <nav className="flex flex-col gap-4" aria-label="Mobile Navigation Stack">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      id={`drawer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                      className={`font-display text-lg uppercase tracking-wide font-bold transition-colors py-1.5 block ${
                        isActive ? 'text-arctic-blue' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom contact CTA card */}
            <div className="border-t border-steel-mid/20 pt-6 mt-auto">
              <a
                href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
                className="block text-center font-display uppercase font-bold text-white text-lg tracking-wider mb-4"
              >
                CALL: <span className="text-arctic-blue">{BUSINESS_PHONE}</span>
              </a>
              <Link
                href="/contact"
                id="drawer-schedule-btn"
                className="block text-center w-full py-3.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-base uppercase font-bold tracking-wider transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
