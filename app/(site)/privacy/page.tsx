import type { Metadata } from 'next';
import Link from 'next/link';
import TempDivider from '@/components/TempDivider';

export const metadata: Metadata = {
  title: 'Privacy Policy | Arctic Breeze HVAC',
  description: 'Understand how we protect and manage personal information submitted through our fictional Dallas HVAC website mockup. Clear privacy policies.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-slate-deep text-white py-12 text-center">
        <h1 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
          PRIVACY POLICY
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
              This app represents a fictional marketing preview. Any contact information, emails, phone logs, or service selections submitted to Formspree are used exclusively for showing layout status. No details are shared with advertisers or stored for real-world HVAC dispatching.
            </p>
          </div>

          <div className="font-body text-sm text-steel-mid space-y-6 leading-relaxed">
            <h2 className="font-display font-bold text-xl text-slate-deep uppercase">
              1. Information We Collect
            </h2>
            <p>
              We collect information you directly provide to us when submitting our online contact form. This includes your full name, email address, phone number, physical area coordinates (for service feasibility), selected services of concern, and your specific text messages describing HVAC breakdowns.
            </p>

            <h2 className="font-display font-bold text-xl text-slate-deep uppercase">
              2. How We Use Informational Inputs
            </h2>
            <p>
              Because this represents a virtual model application, any inputs transmitted through our ContactForm elements post to Formspree for submission logging and are processed only to demonstrate validation workflows and success/error interface banners.
            </p>

            <h2 className="font-display font-bold text-xl text-slate-deep uppercase">
              3. Protection & Cookie Analytics
            </h2>
            <p>
              We run lightweight Google Analytics trackers to count browser footprints, page path visits, and button toggle usage behavior. These analytics do not capture private personal credentials. You can disable cookies inside browser settings should you prefer full tracking exemption.
            </p>

            <h2 className="font-display font-bold text-xl text-slate-deep uppercase">
              4. Third-Party Sharing Rules
            </h2>
            <p>
              We do not sell, rent, lease, or distribute private residential information or coordinates to third-party commercial organizations. No detail is analyzed or marketed for retail advertisement target groups.
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
