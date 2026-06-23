import React from 'react';
import { Testimonial } from '@/lib/testimonials';
import { Star, Quote } from '@/components/Icons';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="bg-white border border-steel-mid/10 rounded-lg p-6 relative flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200">
      {/* Absolute Quotation mark layout behind */}
      <div className="absolute right-6 top-4 z-0 pointer-events-none">
        <Quote className="w-10 h-10 text-arctic-blue/15" />
      </div>

      <div className="relative z-10">
        {/* Star list */}
        <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400" />
          ))}
        </div>

        <p className="font-body text-sm text-slate-deep leading-relaxed italic mb-6">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-auto">
        <div className="flex justify-between items-end">
          <div>
            <h4 className="font-display font-semibold text-base text-slate-deep uppercase leading-tight">
              {testimonial.name}
            </h4>
            <p className="font-body text-xs text-steel-mid">
              {testimonial.neighborhood}
            </p>
          </div>
          <div className="text-right">
            <span className="font-display font-medium text-[10px] uppercase text-arctic-blue tracking-wider bg-arctic-blue/5 px-2 py-0.5 rounded">
              {testimonial.service}
            </span>
            <p className="font-body text-[10px] text-gray-400 mt-1">
              {testimonial.date}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
