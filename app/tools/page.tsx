import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Free Smart Home Tools',
  description:
    'Free tools for Home Assistant users: zone mapping templates, automation generators, and configuration validators.',
};

const tools = [
  {
    title: 'ELK M1 Zone Mapping Template',
    description:
      'Spreadsheet template to map all your ELK M1 zones to Home Assistant entities. Tracks board position, wire type, zone type, and sensor status.',
    status: 'available' as const,
    href: '#zone-template',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 0v1.5c0 .621-.504 1.125-1.125 1.125" />
      </svg>
    ),
  },
  {
    title: 'Night Light Automation Generator',
    description:
      'Answer a few questions about your sensors and lights, and get ready-to-paste YAML for motion-activated night lights with time-based brightness.',
    status: 'coming-soon' as const,
    href: '#',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'HA Package Validator',
    description:
      'Paste your Home Assistant package YAML and check for common errors: missing entities, bad triggers, incorrect service calls, and indentation issues.',
    status: 'coming-soon' as const,
    href: '#',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'TTS Voice Tester',
    description:
      'Preview different Piper TTS voices for Home Assistant. Compare speeds, accents, and quality settings before committing to a model.',
    status: 'coming-soon' as const,
    href: '#',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Free Tools</h1>
      <p className="mt-3 text-gray-400 max-w-2xl">
        Utilities to speed up your Home Assistant setup. All free, no signup
        required.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {tools.map((tool) => (
          <div key={tool.title} className="card relative">
            {tool.status === 'coming-soon' && (
              <span className="absolute top-4 right-4 rounded-full bg-navy-800 px-2.5 py-0.5 text-xs text-gray-500 border border-navy-700">
                Coming Soon
              </span>
            )}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-600/10 text-electric-400 mb-4">
              {tool.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {tool.description}
            </p>
            {tool.status === 'available' && (
              <Link
                href={tool.href}
                className="mt-4 inline-block text-sm font-medium text-electric-400 hover:text-electric-300 transition-colors"
              >
                Use this tool &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 card text-center">
        <h2 className="text-xl font-bold text-white">Want the full package?</h2>
        <p className="mt-2 text-sm text-gray-400">
          Our product packs include production-tested automations, templates, and
          guides that go way beyond what free tools can cover.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <a
            href="https://beslain.gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Browse Products
          </a>
        </div>
      </div>

      <div className="mt-16">
        <NewsletterSignup
          heading="Get notified when new tools drop"
          subheading="Subscribe and be the first to know when we release new free tools and guides."
        />
      </div>
    </div>
  );
}
