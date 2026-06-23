import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/FaqAccordion';
import TempDivider from '@/components/TempDivider';
import { BUSINESS_PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Arctic Breeze HVAC',
  description: 'Find answers to common questions about Dallas air conditioner repairs, furnace installations, seasonal HVAC tuneups, smart thermostat setup, and duct sanitation.',
};

export default function FaqPage() {
  const faqItems = [
    {
      question: "What is your typical emergency AC response dispatch time in Dallas?",
      answer: "During peak summer months when outdoor heat index exceeds 100 degrees, we prioritize active service outages. Our strategically stationed technicians can typically arrive at any Dallas or Uptown residence in 45 to 60 minutes. We operate 24/7. Phone support dispatching is always on call."
    },
    {
      question: "Why is my air conditioner blowing lukewarm or room temperature air?",
      answer: "Luke-warm airflow usually indicates restricted heat transfer. The most frequent causes include heavy dirt clogging your air filters, a failed fan capacitor preventing condenser activation, a frozen evaporator coil (caused by restricted airflow), or a physical refrigerant leak. Avoid emergency damage by turning off the system at the thermostat and requesting an immediate technical diagnostic."
    },
    {
      question: "Are your technicians NATE-certified and fully insured for Dallas county?",
      answer: "Yes, every field engineer we dispatch is fully registered with the State of Texas, NATE-certified, and carries comprehensive liability insurance. They undergo regular background checks and physical training to ensure safe handling of gas flues, high-voltage lines, and ecological refrigerants inside your local residence."
    },
    {
      question: "How often should I schedule professional maintenance for my HVAC systems?",
      answer: "We strongly recommend scheduling a cooling tuneup in early spring (March or April) and a separate heating inspection in late autumn (October or November). This bi-annual frequency ensures components remain lubricated, cleared drains prevent structural ceiling water damage, and electronic switches don't fail when load demands peak."
    },
    {
      question: "What are the typical indications that my gas furnace needs urgent repair?",
      answer: "Watch for sudden yellow or flickering burner flames (instead of a clean, bright blue flame), loud clicking noises prior to ignition, blower motor screeches, or uneven heating blocks throughout your layout. The most critical symptom is sensor alarms indicating trace combustion issues. If you suspect any safety threat, turn off the system immediately and request an emergency inspection."
    },
    {
      question: "Can installing a smart learning thermostat really lower my monthly electric bill?",
      answer: "Absolutely. Dallas area homeowners typically save 15% to 23% on summer cooling fees by utilizing smart thermostat schedules. It automatically adjusts thermostat targets when you're away from home, prevents central units from operating during high-efficiency peak rate times, and optimizes zone airflow to protect your cooling cycle."
    },
    {
      question: "What financing details are available for full system replacements?",
      answer: "We accommodate a broad selection of budgets. For complete heating or cooling units, we offer flexible 0% down financing options with low monthly fees, subject to standard approval audits. Our dispatcher will explain options on-site, allowing you to secure energy-efficient equipment without financial strain."
    },
    {
      question: "How do germicidal UV-C light installations improve indoor air quality?",
      answer: "A germicidal UV-C light is installed directly above your indoor evaporator coil, where humidity levels are high. It works silently by sterilizing airborne pollen, biological mold spores, bacterial contaminants, and germs. This process ensures only scrubbed, hygienic air streams emerge from your home registers."
    },
    {
      question: "How long does a complete home AC installation take?",
      answer: "Most standard residential cooling split system installations are completed in a single day—usually taking 6 to 8 hours. This includes safely removing and disposing of old condenser blocks and indoor units, adjusting plenum attachments, vacuuming lines, adding custom insulated wraps, and completing safety sign-offs."
    },
    {
      question: "Why should I clean my household ducts, and how often is recommended?",
      answer: "Over time, your sheet-metal and flexible ducts accumulate dust, drywall particles, hair, pet dander, and other allergy triggers. Dirty ducts restrict central airflow, making your system work harder and raise fees. A deep clean is typically suggested once every 3 to 5 years, or immediately upon moving into any newly acquired older Dallas property."
    }
  ];

  return (
    <>
      {/* Header Hero */}
      <section className="bg-slate-deep text-white relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-xs font-display uppercase tracking-widest text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>➔</span>
            <span className="text-arctic-blue">Frequently Asked Questions</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            ANSWERS FROM OUR COOLING & HEATING EXPERTS
          </h1>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            {"Get straightforward answers regarding pricing clarity, emergency repairs, equipment warranties, and simple steps to optimize your system's efficiency."}
          </p>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Main FAQ Accordions list */}
      <section className="py-16 sm:py-24 bg-ice-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FaqAccordion items={faqItems} />

        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Action CTA Block */}
      <section className="bg-slate-deep text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
            Have a Question Not Listed Above?
          </h2>
          <p className="font-body text-sm text-gray-300">
            Our expert dispatchers are on duty 24 hours a day to assist DFW homeowners with troubleshooting, scheduling logistics, or immediate system dispatch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-sm uppercase font-bold tracking-wide transition-colors"
            >
              Ask Support Team Online
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
