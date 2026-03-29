'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'card' | 'hero';
  heading?: string;
  subheading?: string;
}

export default function NewsletterSignup({
  variant = 'card',
  heading = 'Get smart home guides that actually work',
  subheading = 'Weekly deep dives on Home Assistant, ELK M1, UPB lighting, and more. No fluff. Unsubscribe anytime.',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Beehiiv embed form submission
    // Replace PUBLICATION_ID with your actual Beehiiv publication ID
    try {
      const res = await fetch(
        'https://api.beehiiv.com/v2/publications/YOUR_PUBLICATION_ID/subscriptions',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            utm_source: 'website',
            utm_medium: variant,
          }),
        }
      );

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        // Fallback: open Beehiiv subscribe page
        window.open(
          `https://theautomatedhome.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`,
          '_blank'
        );
        setStatus('success');
        setEmail('');
      }
    } catch {
      // Fallback: redirect to Beehiiv
      window.open(
        `https://theautomatedhome.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`,
        '_blank'
      );
      setStatus('success');
      setEmail('');
    }
  };

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="flex-1 rounded-lg border border-navy-700 bg-navy-900 px-4 py-2.5
                     text-sm text-white placeholder-gray-500
                     focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary text-sm py-2.5 whitespace-nowrap"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    );
  }

  return (
    <div
      className={`rounded-xl border ${
        variant === 'hero'
          ? 'border-electric-600/30 bg-gradient-to-br from-navy-900 via-navy-900 to-electric-700/10'
          : 'border-navy-800 bg-navy-900/60'
      } p-6 md:p-8`}
    >
      <h3 className="text-xl font-bold text-white">{heading}</h3>
      <p className="mt-2 text-sm text-gray-400">{subheading}</p>

      {status === 'success' ? (
        <div className="mt-4 rounded-lg bg-green-900/30 border border-green-800/50 p-4">
          <p className="text-sm text-green-400 font-medium">
            You&apos;re in. Check your inbox for the welcome email.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="flex-1 rounded-lg border border-navy-700 bg-navy-800 px-4 py-3
                       text-sm text-white placeholder-gray-500
                       focus:border-electric-500 focus:outline-none focus:ring-1 focus:ring-electric-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary whitespace-nowrap"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </form>
      )}

      <p className="mt-3 text-xs text-gray-600">
        Join 0+ smart home builders. No spam, unsubscribe anytime.
      </p>
    </div>
  );
}
