import type { Metadata } from 'next';
import Link from 'next/link';
import TempDivider from '@/components/TempDivider';
import { SERVICE_AREAS, BUSINESS_PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Service Areas | HVAC Tech Dispatch in Dallas County & DFW',
  description: 'Fast, responsive heating and air conditioning repair services across Dallas, TX. See our full service radius including Uptown, Highland Park, Preston Hollow, and Lakewood.',
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Header Hero Area */}
      <section className="bg-slate-deep text-white relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-xs font-display uppercase tracking-widest text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>➔</span>
            <span className="text-arctic-blue">Service Areas</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            DALLAS COUNTY HVAC SERVICE COVERAGE
          </h1>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            From the heart of Uptown to North Dallas residential communities, our technicians are stationed strategically throughout Dallas to arrive at your door in minutes.
          </p>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Service Areas grid & Interactive Map */}
      <section className="py-16 bg-ice-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* List of Area Cards (Left panel) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-display uppercase tracking-wider text-xs font-bold text-arctic-blue">
                  Rapid-Dispatch Hubs
                </span>
                <h2 className="font-display font-bold text-3xl text-slate-deep uppercase leading-none mt-1">
                  Local Communities We Serve
                </h2>
                <p className="font-body text-sm text-steel-mid mt-3">
                  Click any neighborhood below to request immediate cooling or heating restoration. All locations are backed by our transparent upfront pricing guarantee.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICE_AREAS.map((area) => (
                  <article
                    key={area}
                    className="p-5 bg-white border border-steel-mid/10 border-l-[4px] border-l-arctic-blue rounded shadow-xs hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-display font-semibold text-lg text-slate-deep uppercase mb-1">
                      {area}, TX Services
                    </h3>
                    <p className="font-body text-xs text-steel-mid mb-4">
                      Complete residential repairs, annual cooling optimization audits, and central installations.
                    </p>
                    <Link
                      href="/contact"
                      className="text-xs font-display font-bold text-arctic-blue uppercase tracking-wider hover:underline"
                    >
                      Book Local Tech ➔
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Google map iframe wrapper (Right panel) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-steel-mid/10 rounded-lg p-3 shadow-xs">
                {/* 100% responsive, high-contrast, accessibility-labeled Iframe map */}
                <iframe
                  title="Google Map showing our Dallas, TX core service area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1m2!1s0x864c1e7c54157d6d%3A0xe1047db3ca8b668d!2sDallas%2C%20TX!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '6px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Map showing active coverage of Arctic Breeze HVAC within Dallas layout"
                />
              </div>

              {/* Instant Call To Action */}
              <div className="bg-slate-deep text-white rounded-lg p-6 border border-steel-mid/20 text-center space-y-4">
                <h3 className="font-display font-bold text-lg uppercase text-white tracking-wide">
                  Outside Our Core Service Area?
                </h3>
                <p className="font-body text-xs text-gray-300">
                  Depending on availability, we can accommodate neighboring communities for a modest, transparent mileage adjustment. Call our dispatcher to verify coverage.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
                    className="block font-display font-black text-sm uppercase py-3 bg-arctic-blue hover:bg-sky-600 text-white transition-colors"
                  >
                    📞 Speak to Coordinator
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Bottom Dispatch Info panel */}
      <section className="bg-slate-deep text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="font-display uppercase text-xs font-bold text-arctic-blue">Fast HVAC Deliveries</span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase leading-none">
            Ready to Experience True Dallas Comfort?
          </h2>
          <p className="font-body text-xs sm:text-sm text-gray-300">
            We staff locally stationed technicians 24 hours a day, 365 days a year. Our typical travel time for any emergency heating or cooling restore is under an hour!
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-ice-white text-slate-deep font-display font-black text-sm uppercase px-8 py-3.5 transition-colors"
            >
              Book technician dispatch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
