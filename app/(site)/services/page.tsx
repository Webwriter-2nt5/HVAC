import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import TempDivider from '@/components/TempDivider';
import { services } from '@/lib/services';
import { BUSINESS_PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'All HVAC Services | AC Repair & Heating Experts | Arctic Breeze Dallas',
  description: 'Explore our full list of commercial and residential HVAC services in Dallas, TX. From 24/7 central air repairs and system replacements to duct sanitization and filter purifiers.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Dynamic Header Hero Block */}
      <section className="bg-slate-deep text-white relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-xs font-display uppercase tracking-widest text-[#94A3B8] mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>➔</span>
            <span className="text-arctic-blue">Our Services</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            COMMERCIAL & RESIDENTIAL SERVICES
          </h1>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Providing Dallas households and retail buildings with professional HVAC solutions designed to maximize airflow, reduce energy costs, and ensure indoor safety.
          </p>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Main Services Grid */}
      <section className="py-16 sm:py-24 bg-ice-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-display uppercase tracking-wider text-xs font-bold text-arctic-blue">
              Our Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-deep uppercase leading-none mt-1">
              Guaranteed Thermal Comfort
            </h2>
            <p className="font-body text-sm text-steel-mid mt-3">
              Every job is performed by fully certified NATE technicians. We back our results with standard parts guarantees and upfront, upfront prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Bottom Specialties CTA Bar */}
      <section className="bg-slate-deep text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-none">
            Need Custom Professional Calculations?
          </h2>
          <p className="font-body text-sm text-gray-300">
            For complex multi-building setups, commercial integrations, or specific filter choices, get in touch for custom engineering site reviews.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Request Custom Estimate
            </Link>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
              className="px-8 py-3.5 border border-steel-mid/40 hover:bg-white/5 text-white font-display text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Call {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
