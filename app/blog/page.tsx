import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Blog — Smart Home Guides & Tutorials',
  description:
    'In-depth Home Assistant guides covering ELK M1 integration, Piper TTS voice automation, UPB lighting, night light automations, and more.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white">Blog</h1>
      <p className="mt-3 text-gray-400 max-w-2xl">
        Technical deep dives from a production Home Assistant system.
        Every guide is tested on real hardware before publishing.
      </p>

      {posts.length === 0 ? (
        <div className="mt-12 card text-center">
          <p className="text-gray-400">
            Articles are coming soon. Subscribe to the newsletter to get
            notified.
          </p>
          <div className="mt-6">
            <NewsletterSignup variant="inline" />
          </div>
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card block group"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
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

              <h2 className="text-xl font-bold text-white group-hover:text-electric-400 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                {post.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
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
      )}

      {/* Bottom newsletter */}
      <div className="mt-16">
        <NewsletterSignup />
      </div>
    </div>
  );
}
