import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import NewsletterSignup from '@/components/NewsletterSignup';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  // Render MDX content as HTML-safe prose
  // In production, you'd use next-mdx-remote or similar.
  // For now, we render the raw markdown content with basic formatting.
  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-gray-300 transition-colors">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-400">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
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
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-gray-400">{post.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-full bg-navy-800 px-3 py-1 text-xs text-gray-400"
            >
              {kw}
            </span>
          ))}
        </div>
      </header>

      {/* Content */}
      <div className="prose-custom">
        {/*
          MDX content rendering placeholder.
          To properly render MDX, install next-mdx-remote:
            npm install next-mdx-remote
          Then replace this with:
            import { MDXRemote } from 'next-mdx-remote/rsc';
            <MDXRemote source={post.content} />

          For now, content is split into paragraphs for basic display.
        */}
        {post.content.split('\n').map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return null;
          if (trimmed.startsWith('### '))
            return (
              <h3 key={i}>{trimmed.replace('### ', '')}</h3>
            );
          if (trimmed.startsWith('## '))
            return (
              <h2 key={i}>{trimmed.replace('## ', '')}</h2>
            );
          if (trimmed.startsWith('# '))
            return (
              <h1 key={i}>{trimmed.replace('# ', '')}</h1>
            );
          if (trimmed.startsWith('```'))
            return null; // Skip code fences in basic mode
          if (trimmed.startsWith('- '))
            return (
              <li key={i} className="list-disc ml-6">
                {trimmed.replace('- ', '')}
              </li>
            );
          if (trimmed.startsWith('> '))
            return (
              <blockquote key={i}>
                <p>{trimmed.replace('> ', '')}</p>
              </blockquote>
            );
          return <p key={i}>{trimmed}</p>;
        })}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-16">
        <NewsletterSignup
          heading="Enjoyed this guide?"
          subheading="Get more like it delivered weekly. Real configs, tested YAML, zero fluff."
        />
      </div>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-bold text-white mb-6">
            More guides you might like
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="card group"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-electric-400 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  {p.readingTime} min read
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
