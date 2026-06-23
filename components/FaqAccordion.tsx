'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-steel-mid/15 rounded-lg bg-white overflow-hidden transition-all duration-200"
          >
            <h3>
              <button
                type="button"
                id={`faq-btn-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-display font-semibold text-lg uppercase text-slate-deep hover:text-arctic-blue focus:outline-none transition-colors duration-150 group"
              >
                <span>{item.question}</span>
                <span 
                  className={`ml-4 shrink-0 transition-transform duration-200 text-arctic-blue text-xl font-body font-normal ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  ＋
                </span>
              </button>
            </h3>
            
            <div
              id={`faq-content-${index}`}
              role="region"
              aria-labelledby={`faq-btn-${index}`}
              className={`accordion-content ${isOpen ? 'open border-t border-gray-100' : ''}`}
            >
              <div className="px-6 py-4 font-body text-sm text-steel-mid leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
