import Link from 'next/link';
import NewsletterSignup from '@/components/NewsletterSignup';
import ProductCard from '@/components/ProductCard';
import { products, bundleUrl, bundlePrice } from '@/lib/products';
import { getAllPosts } from '@/lib/blog';

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-700/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Smart home guides that{' '}
              <span className="gradient-text">actually work</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              Deep technical guides from a production Home Assistant system with
              54 ELK M1 zones, UPB lighting, Piper TTS, and IP cameras. No
              affiliate fluff &mdash; just tested configs and working YAML.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="btn-primary text-base">
                Read the Guides
              </Link>
              <Link href="/tools" className="btn-secondary text-base">
                Free Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {posts.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Latest Guides
            </h2>
            <Link
              href="/blog"
              className="text-sm font-medium text-electric-400 hover:text-electric-300 transition-colors"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readingTime} min read</span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-electric-400 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full bg-navy-800 px-2.5 py-0.5 text-xs text-gray-400"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <NewsletterSignup
          variant="hero"
          heading="Join the newsletter"
          subheading="Weekly deep dives on Home Assistant, alarm systems, voice automation, and lighting. Real configs from a real house. No fluff."
        />
      </section>

      {/* Products */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Tested. Packaged. Ready to deploy.
          </h2>
          <p className="mt-3 text-gray-400 max-w-xl mx-auto">
            Skip the hours of trial and error. Each pack is built from a
            production system and includes everything you need to get running.
          </p>
          <p className="mt-2 text-sm text-electric-400">
            <a
              href={bundleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-electric-300 transition-colors"
            >
              Get all three for {bundlePrice} &rarr;
            </a>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust / About */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="card text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-white">
            Built from a real system, not a lab
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Everything on this site comes from a production smart home: 54 wired
            ELK M1 zones, 71 UPB lighting entities, 4 IP cameras with AI
            detection, Piper TTS with custom voice, and HomeKit integration. If
            it&apos;s here, it&apos;s been tested.
          </p>
        </div>
      </section>
    </div>
  );
}
