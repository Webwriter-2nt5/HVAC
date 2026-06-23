import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TempDivider from '@/components/TempDivider';
import SeasonalBanner from '@/components/SeasonalBanner';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import { services } from '@/lib/services';
import { testimonials } from '@/lib/testimonials';
import { SERVICE_AREAS, BUSINESS_PHONE, BUSINESS_NAME, BUSINESS_EMAIL, BUSINESS_ADDRESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Arctic Breeze HVAC | Dallas, TX | Reliable AC Repair & Furnace Installation',
  description: "Stay comfortable in Dallas's extreme weather. NATE-certified technicians providing same-day AC repair, expert HVAC installs, furnace leak safety, and duct hygiene. Call (214) 555-0247.",
};

export default function HomePage() {
  // Select first 3 services for a neat homepage preview row
  const homeServices = services.slice(0, 3);
  
  // Select first 3 testimonials for homepage preview row
  const homeTestimonials = testimonials.slice(0, 3);

  // Business Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": BUSINESS_NAME,
    "image": "https://picsum.photos/seed/hvac-hero/600/480",
    "@id": "https://arcticbreezehvac.com/#hvacbusiness",
    "url": "https://arcticbreezehvac.com",
    "telephone": "+12145550247",
    "email": BUSINESS_EMAIL,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_ADDRESS.split(', ')[0],
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "postalCode": "75219",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.8093,
      "longitude": -96.8041
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": SERVICE_AREAS.map(area => ({
      "@type": "AdministrativeArea",
      "name": `${area}, TX`
    }))
  };

  return (
    <>
      {/* 1. HERO SECTION (slate-deep background, glowing radial, technical split) */}
      <section className="bg-slate-deep text-white relative py-12 md:py-24 overflow-hidden">
        {/* Cold air diffuser glow background effect */}
        <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column (Copy content) */}
            <div className="space-y-6 max-w-xl">
              <div>
                <span className="font-display uppercase tracking-widest text-[#0EA5E9] text-sm sm:text-base font-extrabold block">
                  {"Dallas's #1 Rated HVAC Company"}
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-none mt-2">
                  Stay Cool.<br />
                  Stay Warm.<br />
                  Stay Comfortable.
                </h1>
              </div>

              <p className="font-body text-sm sm:text-base text-gray-300 leading-relaxed">
                Licensed HVAC professionals serving Dallas and the DFW Metroplex. Whether you need an emergency middle-of-the-night AC repair or a high-efficiency system replacement, our work is fast, honest, and built to last.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  id="hero-primary-cta"
                  className="px-8 py-4 bg-arctic-blue hover:bg-sky-600 text-white font-display text-base uppercase font-bold tracking-wider text-center transition-all duration-150 decoration-none shadow-md"
                >
                  Schedule Service
                </Link>
                <a
                  href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
                  id="hero-secondary-cta"
                  className="px-8 py-4 border border-steel-mid/40 hover:bg-white/5 hover:border-white text-white font-display text-base uppercase font-bold tracking-wider text-center transition-all duration-150"
                >
                  Call {BUSINESS_PHONE}
                </a>
              </div>

              {/* Safe features strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-steel-mid/20 text-xs font-display uppercase tracking-widest text-gray-400">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold">✓ Same-Day</span>
                  <span>Dispatch Response</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold">✓ NATE</span>
                  <span>Certified Techs</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold">✓ $0 Down</span>
                  <span>Easy Financing Available</span>
                </div>
              </div>
            </div>

            {/* Right Column (Hero image hidden on mobile, priority-load for fast LCP) */}
            <div className="hidden lg:block relative w-full h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-deep via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 border border-steel-mid/20 rounded-lg overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/hvac-hero/600/480"
                  alt="Modern central split air conditioning unit ready for installation"
                  width={600}
                  height={480}
                  priority={true}
                  className="object-cover w-full h-full grayscale-[15%] contrast-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Mechanical accent line overlay */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-arctic-blue/40 pointer-events-none" />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-arctic-blue/40 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 2. SERVICES PREVIEW GRID */}
      <section className="bg-ice-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-lg">
              <span className="font-display uppercase tracking-wider text-xs font-bold text-arctic-blue">
                Industry-Leading Expertise
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-deep uppercase leading-none mt-1">
                HVAC Solutions Engineered For Dallas
              </h2>
              <p className="font-body text-sm text-steel-mid mt-3">
                No cooling or heating issue is too complex. We service residential systems, heat pump layouts, gas lines, and smart thermostatic vents on-demand.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/services"
                id="homepage-view-all-services"
                className="inline-flex items-center gap-1 font-display font-bold text-sm uppercase tracking-wide text-slate-deep hover:text-arctic-blue pb-1 border-b border-slate-deep hover:border-arctic-blue transition-all"
              >
                View All 9 Services ➔
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 3. SEASONAL CALL BANNER */}
      <SeasonalBanner />

      {/* Signature divider */}
      <TempDivider />

      {/* 4. CUSTOMER TESTIMONIALS SECTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-display uppercase tracking-wider text-xs font-bold text-arctic-blue">
              Client Commendations
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-deep uppercase leading-none mt-1">
              What Your DFW Neighbors Say
            </h2>
            <p className="font-body text-sm text-steel-mid mt-3">
              We take pride in our 5-star reputation. Read transparent reviews from real Dallas homeowners who saved big.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              id="homepage-view-testimonials"
              className="inline-flex items-center px-8 py-3 bg-slate-deep hover:bg-slate-800 text-white font-display text-xs uppercase font-extrabold tracking-widest transition-colors duration-150"
            >
              See All Verified Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 5. SERVICE AREA PILLS STRIP */}
      <section className="bg-ice-white py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display font-medium text-xs uppercase tracking-widest text-slate-deep/50 pb-2">
              Proudly Dispatching Technicians to These DFW Areas Daily:
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area}
                href="/service-areas"
                className="bg-white hover:bg-arctic-blue hover:text-white border border-steel-mid/10 text-xs font-display uppercase tracking-wider font-semibold py-2 px-4 transition-colors duration-150 rounded"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 6. FINAL ACTION CTA BLOCK */}
      <section className="bg-slate-deep text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="font-display uppercase tracking-widest text-[#0EA5E9] text-xs font-extrabold block">
            Emergency Dispatch Line Operating 24/7
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none text-white">
            HVAC Out of Service? <br />
            Get It Fixed Today.
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            {"Don't sweat the heat or freeze in the cold. Book your appointment online now or call our dispatcher. We'll send a certified technician to your door with a fully stocked restoration vehicle."}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/contact"
              id="home-footer-cta-primary"
              className="px-8 py-4 bg-arctic-blue hover:bg-sky-600 text-white font-display text-base uppercase font-bold tracking-wider transition-colors shadow"
            >
              Book Dispatch Online
            </Link>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
              id="home-footer-cta-secondary"
              className="px-8 py-4 border border-steel-mid/40 hover:bg-white/5 text-white font-display text-base uppercase font-bold tracking-wider transition-colors"
            >
              Call (214) 555-0247
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
