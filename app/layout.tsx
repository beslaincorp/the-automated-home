import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Automated Home — Smart Home Guides That Actually Work',
    template: '%s | The Automated Home',
  },
  description:
    'Real smart home guides from a production system. Home Assistant, ELK M1, UPB lighting, Piper TTS, and more. No fluff — tested configurations and working code.',
  keywords: [
    'home assistant',
    'smart home',
    'elk m1',
    'home automation',
    'piper tts',
    'upb lighting',
    'home assistant automation',
  ],
  authors: [{ name: 'The Automated Home' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'The Automated Home',
    title: 'The Automated Home — Smart Home Guides That Actually Work',
    description:
      'Real smart home guides from a production system. Tested configurations and working code.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Automated Home',
    description:
      'Real smart home guides from a production system. Tested configurations and working code.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
