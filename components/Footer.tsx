import React from 'react';
import Link from 'next/link';
import TempDivider from '@/components/TempDivider';
import { Snowflake } from '@/components/Icons';
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS, HOURS } from '@/lib/constants';

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
    { label: "Reviews", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" }
  ];

  const quickServices = [
    { label: "AC Repair", href: "/services/ac-repair" },
    { label: "AC Installation", href: "/services/ac-installation" },
    { label: "Heating Repair", href: "/services/heating-repair" },
    { label: "Heating Installation", href: "/services/heating-installation" },
    { label: "Air Quality Control", href: "/services/air-quality" },
    { label: "Preventive Maintenance", href: "/services/preventive-maintenance" }
  ];

  return (
    <footer className="w-full bg-slate-deep text-white shrink-0 mt-auto">
      {/* Signature full-bleed divider */}
      <TempDivider />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-arctic-blue/15 p-1 rounded border border-arctic-blue/30 scale-90">
                <Snowflake className="w-5 h-5 text-arctic-blue" />
              </div>
              <span className="font-display font-bold text-xl uppercase tracking-wider">
                ARCTIC BREEZE
              </span>
            </div>
            <p className="font-body text-xs text-gray-300 leading-relaxed mb-6 max-w-xs">
              Serving our Dallas, Texas customers with top-tier cooling and heating installations, seasonal maintenance, and rapid 24/7 HVAC dispatches.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
                className="block font-display uppercase text-lg font-black text-white hover:text-arctic-blue transition-colors duration-150"
              >
                📞 {BUSINESS_PHONE}
              </a>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="block font-body text-xs text-gray-300 hover:text-white underline transition-colors"
              >
                {BUSINESS_EMAIL}
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-display uppercase tracking-widest text-[#94A3B8] text-sm font-semibold mb-5 pb-1.5 border-b border-steel-mid/20">
              Site Directory
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-body">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-arctic-blue transition-colors duration-150 block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HVAC Specialties */}
          <div>
            <h3 className="font-display uppercase tracking-widest text-[#94A3B8] text-sm font-semibold mb-5 pb-1.5 border-b border-steel-mid/20">
              Our Specialties
            </h3>
            <ul className="space-y-2.5 text-xs font-body">
              {quickServices.map((srv) => (
                <li key={srv.href}>
                  <Link
                    href={srv.href}
                    className="text-gray-300 hover:text-arctic-blue transition-colors duration-150 block"
                  >
                    {srv.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Hours */}
          <div>
            <h3 className="font-display uppercase tracking-widest text-[#94A3B8] text-sm font-semibold mb-5 pb-1.5 border-b border-steel-mid/20">
              Dallas Headquarters
            </h3>
            <address className="not-italic text-xs font-body text-gray-300 space-y-3 mb-6">
              <p className="flex items-start gap-1.5 leading-relaxed">
                <span className="text-arctic-blue">📍</span>
                <span>{BUSINESS_ADDRESS}</span>
              </p>
              <div className="space-y-1 pt-1">
                <p className="font-display font-medium text-[10px] text-gray-400 uppercase tracking-widest">
                  Operating Hours:
                </p>
                <p>Mon - Fri: {HOURS.mon_fri}</p>
                <p>Saturday: {HOURS.saturday}</p>
                <p className="text-red-400 font-semibold">Sunday: {HOURS.sunday}</p>
              </div>
            </address>
          </div>
        </div>

        {/* Lower bar (Credits & Legals) */}
        <div className="border-t border-steel-mid/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-body text-[11px] text-gray-400">
              &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
            </p>
            <p className="font-body text-[9px] text-[#64748B] max-w-2xl leading-normal">
              Disclaimer: This application is a fully functional mockup created for presentation and demonstration, serving as sample code. All reviews, service claims, warranties, addresses, and staff members are entirely fictional.
            </p>
          </div>
          
          <div className="flex gap-4 text-[10px] font-display uppercase tracking-wide">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-steel-mid">|</span>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
