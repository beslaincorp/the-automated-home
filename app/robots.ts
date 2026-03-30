import { MetadataRoute } from 'next';

const BASE_URL = process.env.SITE_URL || 'https://theautomatedhome.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
