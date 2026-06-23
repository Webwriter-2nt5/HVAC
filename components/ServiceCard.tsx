import React from 'react';
import Link from 'next/link';
import { Service } from '@/lib/services';
import { IconMap } from '@/components/Icons';

interface ServiceCardProps {
  service: Service;
  variant?: 'grid' | 'mini';
}

export default function ServiceCard({ service, variant = 'grid' }: ServiceCardProps) {
  const IconComponent = IconMap[service.icon] || IconMap['Wrench'];

  if (variant === 'mini') {
    return (
      <Link
        href={`/services/${service.slug}`}
        id={`service-card-mini-${service.slug}`}
        className="group flex items-center gap-4 p-4 bg-white border border-steel-mid/20 border-l-[4px] border-l-arctic-blue rounded-lg shadow-xs hover:shadow-md transition-all duration-200"
      >
        <div className="bg-ice-white p-2.5 rounded group-hover:bg-arctic-blue/10 transition-colors duration-150 shrink-0">
          <IconComponent className="w-6 h-6 text-arctic-blue" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-slate-deep uppercase group-hover:text-arctic-blue transition-colors duration-150 leading-none">
            {service.name}
          </h3>
          <p className="font-body text-xs text-steel-mid mt-1 line-clamp-1">
            {service.shortDescription}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <article className="flex flex-col h-full bg-white border border-steel-mid/20 border-l-[4px] border-l-arctic-blue rounded-lg shadow-xs hover:shadow-md transition-all duration-200">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-ice-white p-3 rounded shrink-0">
            <IconComponent className="w-8 h-8 text-arctic-blue" />
          </div>
          {service.emergencyAvailable && (
            <span className="bg-red-50 text-red-600 text-xs font-display uppercase tracking-wide px-2.5 py-1 rounded font-semibold border border-red-200 animate-pulse">
              24/7 Dispatch
            </span>
          )}
        </div>

        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-deep uppercase mb-2">
          {service.name}
        </h3>
        
        <p className="font-body text-sm text-steel-mid mb-6 flex-grow line-clamp-4">
          {service.shortDescription}
        </p>

        <ul className="space-y-2 mb-6">
          {service.included.slice(0, 3).map((item, index) => (
            <li key={index} className="flex gap-2 text-xs font-body text-slate-deep">
              <span className="text-arctic-blue font-bold shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-gray-100">
          <Link
            href={`/services/${service.slug}`}
            id={`service-card-btn-${service.slug}`}
            className="inline-flex items-center gap-1.5 font-display text-sm uppercase tracking-wide font-bold text-slate-deep hover:text-arctic-blue transition-colors duration-150 group"
          >
            Explore Services 
            <span className="transform group-hover:translate-x-1 transition-transform duration-150">➔</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
