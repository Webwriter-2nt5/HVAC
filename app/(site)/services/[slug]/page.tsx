import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import TempDivider from '@/components/TempDivider';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/services';
import { IconMap } from '@/components/Icons';
import { BUSINESS_PHONE } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | Arctic Breeze HVAC',
    };
  }

  return {
    title: `${service.name} | Dallas, TX | Arctic Breeze HVAC`,
    description: `${service.shortDescription} Professional, NATE-certified service across Dallas. Same-day emergency service dispatch available.`,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = IconMap[service.icon] || IconMap['Wrench'];

  // Filter 3 related services for bottom carousel, omitting the current service
  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Detail Hero Header */}
      <section className="bg-slate-deep text-white relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.08),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          {/* Breadcrumb controls */}
          <div className="flex justify-center items-center gap-2 text-xs font-display uppercase tracking-widest text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>➔</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>➔</span>
            <span className="text-arctic-blue">{service.name}</span>
          </div>

          <div className="inline-flex bg-arctic-blue/15 p-3 rounded-lg border border-arctic-blue/30 mb-2">
            <IconComponent className="w-10 h-10 text-arctic-blue" />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            {service.name} Services
          </h1>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Detail Core Content Layout */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content column: Description + bullets */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-deep uppercase leading-tight">
                  Professional Systems Care & Inspection
                </h2>
                <p className="font-body text-sm sm:text-base text-steel-mid leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* What's Included bullets section */}
              <div className="bg-ice-white/60 border border-steel-mid/10 rounded-lg p-6 sm:p-8 space-y-4">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-deep uppercase">
                  Service Deliverables Include:
                </h3>
                <ul className="space-y-3">
                  {service.included.map((item, index) => (
                    <li key={index} className="flex gap-3 text-xs sm:text-sm font-body text-slate-deep items-start">
                      <span className="text-arctic-blue font-bold text-base shrink-0 select-none">✓</span>
                      <div>
                        <strong>{item.split(' - ')[0] || item}</strong>
                        {item.split(' - ')[1] ? ` - ${item.split(' - ')[1]}` : ''}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                <div className="p-4 bg-slate-50 border border-steel-mid/5 rounded-lg flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <h4 className="font-display font-bold text-xs uppercase text-slate-deep">Fully Registered</h4>
                    <p className="font-body text-[10px] text-steel-mid">Licensed in State of Texas</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 border border-steel-mid/5 rounded-lg flex items-center gap-3">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h4 className="font-display font-bold text-xs uppercase text-slate-deep">Parts Protected</h4>
                    <p className="font-body text-[10px] text-steel-mid">Up to 10yr Warranty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar column: Media mockup, side phone CTA cards */}
            <div className="lg:col-span-5 space-y-8">
              {/* Service visual context placeholder (next/image) */}
              <div className="relative w-full h-[320px] rounded-lg overflow-hidden border border-steel-mid/10 shadow-xs">
                <Image
                  src={service.imageUrl}
                  alt={`Professional Dallas HVAC technician demonstrating ${service.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Immediate Booking Callout Widget */}
              <div className="bg-slate-deep text-white border border-steel-mid/20 p-6 rounded-lg space-y-4">
                <h3 className="font-display uppercase font-bold text-lg tracking-wider text-white">
                  Schedule Emergency Service
                </h3>
                <p className="font-body text-xs text-gray-300">
                  {"Dallas heatwaves and freezes don't wait. Rest secure. Our dispatcher is answering phone queries for immediate system visits right now."}
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
                    className="block text-center w-full py-3 bg-arctic-blue hover:bg-sky-600 text-white font-display font-black text-sm uppercase tracking-wider transition-colors duration-150"
                  >
                    📞 Call Master Dispatch
                  </a>
                  <Link
                    href="/contact"
                    className="block text-center w-full py-3 mt-2 bg-slate-800 hover:bg-slate-700 text-white font-display text-xs uppercase tracking-wide border border-steel-mid/25 transition-colors duration-150"
                  >
                    Request Date Online
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 3. RELATED SERVICES SECTION */}
      <section className="bg-ice-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left mb-12">
            <span className="font-display uppercase tracking-wider text-xs font-bold text-arctic-blue">
              Thermodynamic Support
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-deep uppercase leading-none mt-1">
              Explore Related HVAC Solvers
            </h2>
            <p className="font-body text-sm text-steel-mid mt-2 max-w-sm">
              We cover all angles to guarantee air and cooling perfection inside your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((rS) => (
              <ServiceCard key={rS.slug} service={rS} variant="grid" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
