'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: '/blog', label: 'Blog' },
    { href: '/tools', label: 'Free Tools' },
    { href: '/newsletter', label: 'Newsletter' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-navy-800 bg-navy-950/80 backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric-600">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-white">
              The Automated Home
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://beslain.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Products
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-navy-800 py-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-gray-400 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://beslain.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block btn-primary text-sm py-2 px-4 text-center"
            >
              Products
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
