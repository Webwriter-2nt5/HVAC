import type { Metadata } from 'next';
import Link from 'next/link';
import TestimonialCard from '@/components/TestimonialCard';
import TempDivider from '@/components/TempDivider';
import { testimonials } from '@/lib/testimonials';
import { Star } from '@/components/Icons';
import { BUSINESS_PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials | 5-Star HVAC Repairs | Arctic Breeze',
  description: 'See verified reviews and ratings from genuine Dallas homeowners and businesses. We operate with standard NATE certifications and five-star technical accuracy.',
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Header Hero */}
      <section className="bg-slate-deep text-white relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-xs font-display uppercase tracking-widest text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>➔</span>
            <span className="text-arctic-blue">Client reviews</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            VERIFIED DALLAS AREA REVIEWS
          </h1>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Our priority is to deliver transparent heating and AC service. Read direct reports on our troubleshooting efficiency, response speed, and price fairness.
          </p>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Aggregate review badge and Testimonial list */}
      <section className="py-16 bg-ice-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Aggregate Rating Banner Widget */}
          <div className="bg-white border border-steel-mid/10 rounded-lg p-6 sm:p-8 max-w-xl mx-auto mb-16 text-center space-y-3">
            <h2 className="font-display font-medium text-xs uppercase tracking-widest text-[#64748B]">
              Trusted by Hundreds of Local Families
            </h2>
            <div className="flex justify-center items-center gap-1.5" aria-label="5 out of 5 stars aggregate score">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <p className="font-display font-bold text-3xl text-slate-deep">
              4.92 / 5.0 STAR OVERALL AVERAGE
            </p>
            <p className="font-body text-xs text-steel-mid max-w-md mx-auto">
              Calculated based on 320+ verified community surveys across Google, Yelp, and residential maintenance plan sign-ups who choose Arctic Breeze.
            </p>
          </div>

          {/* Testimonial Cards Grid (9 cards total) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <TestimonialCard key={test.id} testimonial={test} />
            ))}
          </div>

        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Action CTA bar */}
      <section className="bg-slate-deep text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Ready to Partner with Dallas’s Best?
          </h2>
          <p className="font-body text-sm text-gray-300">
            Book NATE-certified service today. Discover why your neighbours rate our technicians as the most precise and polite crew in North Texas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Book Dispatch Online Now
            </Link>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
              className="px-8 py-3.5 border border-steel-mid/40 hover:bg-white/5 text-white font-display text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Contact Dispatcher
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
