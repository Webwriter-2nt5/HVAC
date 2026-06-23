import type { Metadata } from 'next';
import Link from 'next/link';
import GalleryGrid from '@/components/GalleryGrid';
import TempDivider from '@/components/TempDivider';
import { BUSINESS_PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Project Gallery | Real Dallas HVAC Installations | Arctic Breeze',
  description: 'Browse our portfolio of commercial AC replacements, gas furnace installations, air purifier fittings, and duct vacuum repairs completed across Dallas, TX.',
};

export default function GalleryPage() {
  return (
    <>
      {/* Header Hero Section */}
      <section className="bg-slate-deep text-white relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-xs font-display uppercase tracking-widest text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>➔</span>
            <span className="text-arctic-blue">Project Gallery</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            RECENT LOCAL INSTALLATIONS & REPAIRS
          </h1>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Review actual on-site proof of our meticulous workmanship. We install systems straight, tape junctions perfectly, and maintain clinical cleanliness inside your home.
          </p>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Gallery masonry layout section */}
      <section className="py-16 sm:py-24 bg-ice-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Gallery client grid handling Lightbox states */}
          <GalleryGrid />

          {/* Fictional demo notice below grid */}
          <div className="max-w-xl mx-auto text-center mt-12 px-6">
            <p className="font-body text-[10px] text-zinc-400 italic">
              Notice: All files and portraits above are standard high-quality illustrative placeholders used to demonstrate functional design and code interfaces. No real on-site homeowner private pictures are displayed.
            </p>
          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Bottom CTA */}
      <section className="bg-slate-deep text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Ready to Upgrade Your Central System?
          </h2>
          <p className="font-body text-sm text-gray-300">
            Learn how clean, symmetrical installations increase unit efficiency and add decade-long durability to your residential property.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Get System Installation Quote
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
