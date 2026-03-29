import type { Metadata } from 'next';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Newsletter — Weekly Smart Home Deep Dives',
  description:
    'Get weekly Home Assistant guides, automation YAML, and smart home tips from a production system. No fluff, no affiliate spam.',
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
        The Automated Home Newsletter
      </h1>
      <p className="mt-4 text-center text-gray-400 leading-relaxed">
        A weekly email with real smart home content. Deep dives on Home
        Assistant, ELK M1, UPB lighting, voice automation, camera AI, and
        more. Every tip comes from a production system.
      </p>

      {/* What you get */}
      <div className="mt-10 space-y-4">
        <h2 className="text-lg font-semibold text-white">
          What you get every week:
        </h2>
        <ul className="space-y-3">
          {[
            'One technical deep dive (1000-2000 words, tested YAML included)',
            'Quick tips and config snippets you can paste directly',
            'New product and tool announcements',
            'Behind-the-scenes from the 54-zone production system',
            'Answers to subscriber questions',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <svg
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Signup */}
      <div className="mt-10">
        <NewsletterSignup
          variant="hero"
          heading="Subscribe for free"
          subheading="No spam. Unsubscribe anytime. Your email stays private."
        />
      </div>

      {/* Recent issues preview */}
      <div className="mt-16">
        <h2 className="text-lg font-semibold text-white mb-4">
          Recent issues
        </h2>
        <div className="space-y-3">
          {[
            {
              title: '#1 — Why Your ELK M1 Drops TCP During Alarms (And How to Fix It)',
              date: 'March 31, 2026',
            },
            {
              title: '#2 — Building a Jarvis Voice for Home Assistant with Zero Cloud Costs',
              date: 'April 2, 2026',
            },
            {
              title: '#3 — The Night Light Automation That Actually Works at 3AM',
              date: 'April 4, 2026',
            },
            {
              title: '#4 — Camera AI Push Notifications Without Frigate',
              date: 'April 7, 2026',
            },
          ].map((issue, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg border border-navy-800 bg-navy-900/40 px-4 py-3"
            >
              <span className="text-sm text-gray-300">{issue.title}</span>
              <span className="text-xs text-gray-600 whitespace-nowrap ml-4">
                {issue.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
