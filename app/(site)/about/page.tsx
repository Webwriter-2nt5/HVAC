import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import TempDivider from '@/components/TempDivider';
import { IconMap } from '@/components/Icons';
import { BUSINESS_NAME, BUSINESS_PHONE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Our Company | Dallas HVAC Experts | Arctic Breeze HVAC',
  description: 'Meet the team of cooling and heating engineering masters behind Dallas’s top HVAC service company. Serving residential and commercial client layouts with standards.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Marcus Vance",
      role: "Founder & Master HVAC Engineer",
      bio: "Over 20 years of hands-on technical cooling and heavy boiler execution. Marcus is NATE certified and personally audits complex commercial air handler installations.",
      seed: "marcus_vance",
    },
    {
      name: "Sarah Jenkins",
      role: "Senior Operations Dispatcher",
      bio: "The voice of reassurance during acute climate emergencies. Sarah optimizes our technical dispatch schedules so help arrives in minutes, not hours.",
      seed: "sarah_jenkins",
    },
    {
      name: "Daniel Torres",
      role: "Lead Field Service Installer",
      bio: "An absolute master of structural duct integrity and clean unit fittings. Daniel ensures your equipment performs at maximum efficiency from day one.",
      seed: "daniel_torres",
    }
  ];

  const valueCards = [
    {
      title: "Uncompromising Honesty",
      desc: "No hidden diagnosis fees, no fictitious component failures, and no pressure sales. If it doesn't need replacing, we don't push it.",
      iconName: "Shield"
    },
    {
      title: "Mechanical Precision",
      desc: "Every thermodynamic calculation, refrigerant load charge, and gas line flue safety is double-checked according to strict guidelines.",
      iconName: "Wrench"
    },
    {
      title: "Rapid Dispatch Speed",
      desc: "Our vehicles remain stocked with standard parts to ensure we restore thermal comfort with total efficiency on the very first visit.",
      iconName: "Clock"
    },
    {
      title: "Absolute Safety First",
      desc: "Rigorous carbon monoxide testing, electrical system audits, and comprehensive combustion checks accompany every heating repair.",
      iconName: "Check"
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
            <span className="text-arctic-blue">About Us</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            ENGINEERING COMFORT IN NORTH TEXAS
          </h1>
          <p className="font-body text-sm sm:text-base text-gray-300 max-w-xl mx-auto">
            Our company was founded with a clear mechanical goal: to swap high-pressure sales with high-precision HVAC solutions for Dallas homeowners.
          </p>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 1. Licensing & Fictional Disclaimer Banner */}
      <section className="bg-red-50 border-b border-red-200 py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <span className="text-3xl shrink-0">⚠️</span>
          <div>
            <h4 className="font-display font-bold text-xs uppercase text-red-900 tracking-wide">
              Fictional Presentation & Licensing Mockup
            </h4>
            <p className="font-body text-xs text-red-700 leading-normal">
              This application is a fictional presentation demonstrating conversion-oriented website code structures. To comply with local guidelines, this app makes no live diagnostic representations. Regulated under fictitious DFW license TDLR #TACLA99999X.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <span className="font-display uppercase tracking-wider text-xs font-bold text-arctic-blue">
              Our Journey
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-deep uppercase leading-none mt-1">
              Fitted for Dallas Hot and Cold Extreme Spikes
            </h2>
          </div>

          <div className="font-body text-sm sm:text-base text-steel-mid space-y-6 leading-relaxed">
            <p>
              Arctic Breeze HVAC was founded in Dallas by a small team of veteran NATE-certified specialists who tired of seeing massive operations squeeze residents with artificial upcharges. We believed that HVAC is an essential system of home health and structural longevity. We set out to build an operation centering engineering integrity.
            </p>
            <p>
              Operating in North Texas means being ready for extreme temperature spikes. DFW homes endure long stretches of triple-digit July heatwaves followed by deep winter freezes that stress even heavy central heating systems. For over a decade, we have honed local installations and duct adjustments to survive these brutal fluctuations.
            </p>
            <p>
              Our mechanical strategy is simple: we fit systems properly the first time. Our cooling calculations analyze direct solar loads, wall insulation values, room volumes, and ceiling configurations prior to recommending compressor tonnage. That level of technical sizing prevents system cycling, slashing monthly utility costs for homeowners.
            </p>
            <p>
              {"Today, Arctic Breeze stands as a trusted HVAC crew serving Dallas county. We keep our operation close to home, maintaining focused neighborhood dispatches to ensure our technicians arrive in less than an hour to rescue freezing or overheating families. We're proud to be Dallas's serious choice for climate protection."}
            </p>
          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 3. Company Values Grid */}
      <section className="py-16 bg-ice-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-display uppercase tracking-wider text-xs font-bold text-arctic-blue">
              Core Principles
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-deep uppercase leading-none mt-1">
              Values That Run Our Dispatch Fleet
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueCards.map((card) => {
              const ValueIcon = IconMap[card.iconName] || IconMap['Check'];
              return (
                <article
                  key={card.title}
                  className="bg-white border border-steel-mid/10 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="bg-ice-white w-12 h-12 rounded flex items-center justify-center mb-4 shrink-0">
                    <ValueIcon className="w-6 h-6 text-arctic-blue" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-deep uppercase mb-2">
                    {card.title}
                  </h3>
                  <p className="font-body text-xs text-steel-mid leading-relaxed">
                    {card.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 4. Team Members Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-display uppercase tracking-wider text-xs font-bold text-arctic-blue">
              Our specialists
            </span>
            <h2 className="font-display font-bold text-3xl text-slate-deep uppercase leading-none mt-1">
              NATE-Certified HVAC Masters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="bg-white border border-steel-mid/10 rounded-lg overflow-hidden group hover:shadow-md transition-all duration-150"
              >
                {/* Team photo frame */}
                <div className="relative w-full h-[320px] bg-slate-100">
                  <Image
                    src={`https://picsum.photos/seed/${member.seed}/400/320`}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-bold text-xl uppercase tracking-wider text-slate-deep mt-2">
                    {member.name}
                  </h3>
                  <p className="font-display font-medium text-xs text-arctic-blue uppercase tracking-widest">
                    {member.role}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-steel-mid leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signature divider */}
      <TempDivider />

      {/* 5. Preventive Maintenance Program Teaser */}
      <section className="bg-slate-deep text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(14,165,233,0.06),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="font-display uppercase tracking-widest text-[#0EA5E9] text-xs font-bold block">
            Annual HVAC Membership Plans
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight leading-none text-white">
            Maintain System Vitality & Save 15% on All Future Repairs
          </h2>
          <p className="font-body text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Ensure your heating and cooling equipment operates peak thermodynamic efficiency. Join our bi-annual maintenance contract program for priority dispatching, fall/spring deep cleanings, and exclusive diagnostic pricing.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-sm uppercase font-bold tracking-wider transition-colors duration-150"
            >
              Sign Up For Maintenance Plans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
