import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '@/components/ContactForm';

// Mock the analytics module
vi.mock('@/lib/analytics', () => ({
  trackEvent: vi.fn(),
  trackPageView: vi.fn()
}));

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv('NEXT_PUBLIC_FORMSPREE_ID', 'test_id');
  });

  // Test 1: Blocks submission when required fields are empty
  it('blocks submission when required fields are empty', async () => {
    render(<ContactForm />);
    
    // Click submit without entering values
    const submitBtn = screen.getByRole('button', { name: /Submit Dispatch Request/i });
    fireEvent.click(submitBtn);

    // Verify error messages for required fields appear
    expect(await screen.findByText(/Full name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email address is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Please include a brief message about your needs/i)).toBeInTheDocument();
  });

  // Test 2: Shows success state on successful Formspree response
  it('shows success state on successful Formspree response', async () => {
    // Mock global fetch for success
    const mockFetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ next: '/' })
      })
    );
    vi.stubGlobal('fetch', mockFetch);

    render(<ContactForm />);

    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/Tell us about your cooling\/heating issue/i), { target: { value: 'My heater turned off.' } });

    // Click submit
    const submitBtn = screen.getByRole('button', { name: /Submit Dispatch Request/i });
    fireEvent.click(submitBtn);

    // Assert success block appears in layout
    await waitFor(() => {
      expect(screen.getByText(/Request Received!/i)).toBeInTheDocument();
      expect(screen.getByText(/Thank you for choosing Arctic Breeze HVAC!/i)).toBeInTheDocument();
    });

    // Assert form itself has been hidden
    expect(screen.queryByLabelText(/Full Name/i)).not.toBeInTheDocument();
  });

  // Test 3: Shows error banner on Formspree failure
  it('shows error banner on Formspree failure', async () => {
    // Mock global fetch for breakdown error
    const mockFetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false,
        status: 500
      })
    );
    vi.stubGlobal('fetch', mockFetch);

    render(<ContactForm />);

    // Fill in required details
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Failed Sender' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'fail@sender.com' } });
    fireEvent.change(screen.getByLabelText(/Tell us about your cooling\/heating issue/i), { target: { value: 'System is broken' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Dispatch Request/i });
    fireEvent.click(submitBtn);

    // Assert error notice appears and inputs stay visible in DOM
    await waitFor(() => {
      expect(screen.getByText(/Submission failed:/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    });
  });

  // Test 4: Validates email format
  it('validates email format', async () => {
    render(<ContactForm />);

    // Enter invalid email syntax
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Test' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'notanemail' } });
    fireEvent.change(screen.getByLabelText(/Tell us about your cooling\/heating issue/i), { target: { value: 'Airflow is low' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Dispatch Request/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  // Test 5: Validates optional phone format when provided
  it('validates optional phone format when provided', async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Test' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'john@example.com' } });
    // Less than 10 digits
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '123' } });
    fireEvent.change(screen.getByLabelText(/Tell us about your cooling\/heating issue/i), { target: { value: 'Airflow is low' } });

    const submitBtn = screen.getByRole('button', { name: /Submit Dispatch Request/i });
    fireEvent.click(submitBtn);

    expect(await screen.findByText(/Phone number must be at least 10 digits/i)).toBeInTheDocument();
  });
});
