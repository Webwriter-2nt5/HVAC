import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import TempDivider from '@/components/TempDivider';
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_ADDRESS, HOURS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us | 24/7 HVAC Dispatch & Quotes | Arctic Breeze Dallas',
  description: 'Connect with Arctic Breeze HVAC today. Book immediate central air conditioning repairs, system replacement consultations, or maintenance memberships in Dallas, TX. (214) 555-0247.',
};

export default function ContactPage() {
  return (
    <>
      {/* 1. Emergency Dispatch Status Banner */}
      <section className="bg-red-600 text-white py-3.5 px-4 text-center font-display font-semibold text-xs sm:text-sm tracking-wider uppercase animate-pulse select-none relative z-10 shadow-md">
        🚨 EMERGENCY HVAC DISPATCH OUTAGES ACTIVE: Dallas local technicians active 24/7. Dial <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`} className="underline font-black text-white hover:text-red-100 font-display">({BUSINESS_PHONE})</a> for instant restoration.
      </section>

      {/* Header Hero Area */}
      <section className="bg-slate-deep text-white relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex justify-center items-center gap-2 text-xs font-display uppercase tracking-widest text-gray-400 mb-1">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>➔</span>
            <span className="text-arctic-blue">Contact Us</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            SCHEDULE HVAC DIAL OR SERVICE DISPATCH
          </h1>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Contact us for expert system installations, regular fall/spring tuneups, duct cleanings, or instant triple-digit temperature AC diagnosis.
          </p>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Core Form and Info layouts */}
      <section className="py-16 bg-ice-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Form Client Component (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Emergency details card */}
              <article className="p-6 bg-slate-deep border border-steel-mid/20 rounded-lg text-white space-y-4 shadow-sm">
                <span className="font-display text-[10px] bg-red-600 text-white uppercase tracking-widest px-2 py-0.5 rounded font-black">
                  URGENT HELP NEEDED?
                </span>
                <h3 className="font-display font-bold text-2xl uppercase text-white leading-none">
                  24/7 Red-Line Helpline
                </h3>
                <p className="font-body text-xs text-gray-300 leading-relaxed">
                  Is your residential central unit completely out order during dangerous Dallas weather? Do not submit general contact forms. Speak with our direct dispatch line for a technician update in less than 5 minutes.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`}
                    className="block text-center w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-display font-black text-base uppercase tracking-wider transition-colors shadow"
                  >
                    📞 Call Our Red-Line Hotline
                  </a>
                </div>
              </article>

              {/* Standard Headquarters card */}
              <article className="p-6 bg-white border border-steel-mid/10 rounded-lg space-y-6 shadow-sm">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-deep uppercase mb-1">
                    Central Headquarters
                  </h3>
                  <p className="font-body text-xs text-steel-mid">
                    Our dispatch vehicles leave this hub every morning carrying professional tooling.
                  </p>
                </div>

                <div className="space-y-4 text-xs font-body text-slate-deep">
                  <p className="flex items-start gap-2">
                    <span className="text-arctic-blue text-base">📍</span>
                    <span>
                      <strong>{BUSINESS_NAME}</strong>
                      <br />
                      {BUSINESS_ADDRESS}
                    </span>
                  </p>
                  
                  <p className="flex items-center gap-2">
                    <span className="text-arctic-blue text-base">📞</span>
                    <span>
                      <strong>Primary Line:</strong> <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, '')}`} className="underline text-slate-deep hover:text-arctic-blue">({BUSINESS_PHONE})</a>
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <span className="text-arctic-blue text-base">✉️</span>
                    <span>
                      <strong>Official Email:</strong> <a href={`mailto:${BUSINESS_EMAIL}`} className="underline text-slate-deep hover:text-arctic-blue">{BUSINESS_EMAIL}</a>
                    </span>
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <h4 className="font-display font-bold text-xs text-slate-deep uppercase tracking-wider">
                    Operating Hours:
                  </h4>
                  <ul className="text-xs font-body text-steel-mid space-y-1">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <strong className="text-slate-deep">{HOURS.mon_fri}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <strong className="text-slate-deep">{HOURS.saturday}</strong>
                    </li>
                    <li className="flex justify-between text-red-600">
                      <span>Sunday (Emergency):</span>
                      <strong>{HOURS.sunday}</strong>
                    </li>
                  </ul>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* Embedded Map Section */}
      <section className="bg-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-display font-bold text-2xl text-slate-deep uppercase">
              Map and Driving Directions
            </h2>
            <p className="font-body text-xs text-steel-mid mt-2">
              Visit our core dispatch office neatly based off Maple Ave, close to downtown Dallas coordinates.
            </p>
          </div>

          <div className="border border-steel-mid/10 rounded-lg overflow-hidden p-2 shadow-xs">
            <iframe
              title="Google Maps interface displaying physical address of headquarters"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x864e993181829bef%3A0xe7f9cdbf05ccaefb!2s3812%20Maple%20Ave%2C%20Dallas%2C%20TX%2075219!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map rendering of 3812 Maple Ave, Dallas, TX 75219"
            />
          </div>
        </div>
      </section>
    </>
  );
}
