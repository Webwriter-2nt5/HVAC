'use client';

import React, { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');

  const servicesOption = [
    "General Inquiry",
    "AC Repair",
    "AC Installation",
    "Heating Repair",
    "Heating Installation",
    "Air Quality Checkup",
    "Duct Cleaning",
    "Maintenance Agreement",
    "Emergency Services"
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Clear error immediately on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name Validation
    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone Validation (Optional, minimum 10 digits if provided)
    if (form.phone.trim()) {
      const phoneClean = form.phone.replace(/\D/g, '');
      if (phoneClean.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
      }
    }

    // Message Validation
    if (!form.message.trim()) {
      newErrors.message = "Please include a brief message about your needs";
    } else if (form.message.length > 1000) {
      newErrors.message = "Message maximum limit is 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('IDLE');

    const formspreeID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'test_id';
    const formspreeUrl = `https://formspree.io/f/${formspreeID}`;

    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        setSubmitStatus('SUCCESS');
        trackEvent('form_submission_success', { service_requested: form.service });
        setForm({
          name: '',
          email: '',
          phone: '',
          service: 'General Inquiry',
          message: ''
        });
      } else {
        setSubmitStatus('ERROR');
        trackEvent('form_submission_failed', { status: response.status });
      }
    } catch (err) {
      setSubmitStatus('ERROR');
      trackEvent('form_submission_network_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'SUCCESS') {
    return (
      <div className="bg-white border border-green-200 border-l-[4px] border-l-green-600 rounded-lg p-8 shadow-sm text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl text-green-600 font-bold">✓</span>
        </div>
        <h3 className="font-display font-bold text-3xl text-slate-deep uppercase mb-2">
          Request Received!
        </h3>
        <p className="font-body text-sm text-steel-mid max-w-md mx-auto mb-6">
          Thank you for choosing Arctic Breeze HVAC! A Texas project dispatcher will review your request and call or message you within the next 15-30 minutes.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus('IDLE')}
          className="px-6 py-2.5 bg-slate-deep hover:bg-slate-800 text-white font-display text-sm uppercase tracking-wide font-bold transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-steel-mid/10 rounded-lg p-6 sm:p-8 shadow-sm">
      <h3 className="font-display font-bold text-2xl text-slate-deep uppercase mb-1">
        Request Same-Day HVAC Support
      </h3>
      <p className="font-body text-xs text-steel-mid mb-6">
        No payment details required. Clear pricing shared prior to dispatching any technician.
      </p>

      {submitStatus === 'ERROR' && (
        <div className="bg-red-50 border border-red-200 border-l-[4px] border-l-red-600 p-4 rounded mb-6 text-sm text-red-700 font-body">
          <strong>Submission failed:</strong> There was a network error during delivery. Please dial our central helpline directly at <a href="tel:2145550247" className="underline font-bold font-display text-base">(214) 555-0247</a> for instant dispatch!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name field */}
        <div>
          <label htmlFor="name" className="block text-xs font-display uppercase tracking-wide font-semibold text-slate-deep mb-1">
            Full Name <span className="text-arctic-blue">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-2.5 bg-ice-white/50 border rounded text-sm text-slate-deep placeholder-gray-400 focus:outline-none transition-colors duration-150 ${
              errors.name ? 'border-red-500 bg-red-50/10' : 'border-steel-mid/20 focus:border-arctic-blue'
            }`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-red-600 text-xs mt-1 font-body">{errors.name}</p>
          )}
        </div>

        {/* Two Columns Grid for Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-xs font-display uppercase tracking-wide font-semibold text-slate-deep mb-1">
              Email Address <span className="text-arctic-blue">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2.5 bg-ice-white/50 border rounded text-sm text-slate-deep placeholder-gray-400 focus:outline-none transition-colors duration-150 ${
                errors.email ? 'border-red-500 bg-red-50/10' : 'border-steel-mid/20 focus:border-arctic-blue'
              }`}
              placeholder="name@domain.com"
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1 font-body">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-display uppercase tracking-wide font-semibold text-slate-deep mb-1">
              Phone Number <span className="text-gray-400">(Optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2.5 bg-ice-white/50 border rounded text-sm text-slate-deep placeholder-gray-400 focus:outline-none transition-colors duration-150 ${
                errors.phone ? 'border-red-500 bg-red-50/10' : 'border-steel-mid/20 focus:border-arctic-blue'
              }`}
              placeholder="(214) 555-0100"
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-1 font-body">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Selected Service Selection */}
        <div>
          <label htmlFor="service" className="block text-xs font-display uppercase tracking-wide font-semibold text-slate-deep mb-1">
            Service Required
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 bg-ice-white/50 border border-steel-mid/20 rounded text-sm text-slate-deep focus:outline-none focus:border-arctic-blue appearance-none cursor-pointer"
            >
              {servicesOption.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-deep">
              <span className="text-xs">▼</span>
            </div>
          </div>
        </div>

        {/* Message and Character Count */}
        <div>
          <div className="flex justify-between items-end mb-1">
            <label htmlFor="message" className="block text-xs font-display uppercase tracking-wide font-semibold text-slate-deep">
              Tell us about your cooling/heating issue <span className="text-arctic-blue">*</span>
            </label>
            <span className={`text-[10px] font-body ${form.message.length > 950 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
              {form.message.length} / 1000
            </span>
          </div>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleInputChange}
            rows={4}
            maxLength={1000}
            className={`w-full px-4 py-2.5 bg-ice-white/50 border rounded text-sm text-slate-deep placeholder-gray-400 focus:outline-none transition-colors duration-150 resize-y ${
              errors.message ? 'border-red-500 bg-red-50/10' : 'border-steel-mid/20 focus:border-arctic-blue'
            }`}
            placeholder="Tell us a bit about what needs repairing/installing, how long you've had the issue, and when satisfies for scheduling..."
          />
          {errors.message && (
            <p className="text-red-600 text-xs mt-1 font-body">{errors.message}</p>
          )}
        </div>

        {/* Form CTA Submission Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4.5 bg-arctic-blue hover:bg-sky-600 text-white font-display text-base uppercase font-extrabold tracking-wide text-center transition-colors duration-150 disabled:opacity-50 select-none cursor-pointer flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Transmitting Request...</span>
            </>
          ) : (
            <span>Submit Dispatch Request</span>
          )}
        </button>
      </form>
    </div>
  );
}
