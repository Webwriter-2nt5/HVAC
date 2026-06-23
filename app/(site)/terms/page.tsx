import type { Metadata } from 'next';
import Link from 'next/link';
import TempDivider from '@/components/TempDivider';

export const metadata: Metadata = {
  title: 'Terms of Service | Arctic Breeze HVAC',
  description: 'Review the terms and conditions governing the usage of our frictional Dallas HVAC website template mockup and presentation structures.',
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-slate-deep text-white py-12 text-center">
        <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
          TERMS OF SERVICE
        </h1>
        <p className="font-body text-xs text-gray-400 mt-2">
          Last Updated: June 23, 2026
        </p>
      </section>

      <TempDivider />

      <section className="py-16 bg-white shrink-0">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-8">
          
          {/* Demo Content Banner */}
          <div className="bg-yellow-50 border border-yellow-200 border-l-[4px] border-l-yellow-600 rounded-lg p-5">
            <span className="font-display font-black text-xs uppercase text-yellow-900 tracking-wider block mb-1">
              ⚠️ FICTIONAL DESIGN DEMONSTRATION NOTICE
            </span>
            <p className="font-body text-xs text-yellow-800 leading-normal">
              This system is a fictional mockup created to demonstrate polished website coding. No real HVAC consultations, technical diagnoses, dispatch dispatches, or guaranteed pricing arrangements are established through using this digital interface.
            </p>
          </div>

          <div className="font-body text-sm text-steel-mid space-y-6 leading-relaxed">
            <h2 className="font-display font-bold text-xl text-slate-deep uppercase">
              1. Acceptance of Virtual Terms
            </h2>
            <p>
              By accessing this application, you acknowledge that you understand its status as a fictional demonstration module and agree to operate with standard testing decency. Do not flood our form inputs with malicious code, spam links, or artificial traffic programs.
            </p>

            <h2 className="font-display font-bold text-xl text-slate-deep uppercase">
              2. Fictional Representation Caveat
            </h2>
            <p>
              All reviews, ratings, corporate licensing indices (TDLR #TACLA99999X), technician profiles (Marcus Vance, Sarah Jenkins, Daniel Torres), address listings, and promotional cooling/heating pricing discounts are entirely fictitious. No real-world commercial HVAC service contract is formed.
            </p>

            <h2 className="font-display font-bold text-xl text-slate-deep uppercase">
              3. Intellectual Property Design
            </h2>
            <p>
              {"The visual concept, styling, typography structures paired with 'Barlow Condensed' and 'Inter,' reusable \"<TempDivider />\" lines, and responsive layout grids are copyrighted structures proprietary to Arctic Breeze HVAC presentation designs. You can study these files to understand high-speed static export metrics."}
            </p>

            <h2 className="font-display font-bold text-xl text-slate-deep uppercase">
              4. Complete Liability Exclusion
            </h2>
            <p>
              We decline any liability for system disruption, browser cache errors, network latency, or form delivery failure. Using this mockup does not create a professional consulting tie with our engineering staff.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100 flex justify-center">
            <Link
              href="/"
              className="px-6 py-2 bg-slate-deep hover:bg-slate-800 text-white font-display text-xs uppercase font-bold tracking-wider transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
