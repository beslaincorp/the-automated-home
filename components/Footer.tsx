import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="text-lg font-bold text-white">
              The Automated Home
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Real smart home guides from a production system. No fluff, no
              affiliate spam &mdash; just tested configurations and working code.
            </p>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Content
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Free Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/newsletter"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Products
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://beslain.gumroad.com/l/elk-m1-ha-security-blueprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  ELK M1 Blueprint
                </a>
              </li>
              <li>
                <a
                  href="https://beslain.gumroad.com/l/ha-jarvis-voice-pack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Jarvis Voice Pack
                </a>
              </li>
              <li>
                <a
                  href="https://beslain.gumroad.com/l/ha-night-lights-pack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Night Lights Pack
                </a>
              </li>
              <li>
                <a
                  href="https://beslain.gumroad.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-electric-400 hover:text-electric-300 transition-colors"
                >
                  All Products Bundle &mdash; $79
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Community
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://community.home-assistant.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  HA Forum
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} The Automated Home. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with Next.js. Deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
