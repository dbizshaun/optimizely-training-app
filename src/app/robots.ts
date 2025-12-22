import env from '@/config/environment';
import { MetadataRoute } from 'next';

export default async function robots(): Promise<MetadataRoute.Robots> {
  // If this is a website under aldar.com you'll need to write logic for the read domain
  const domain = env.site.public.siteDomain || env.optimizely.cms.siteDomain || 'localhost';

  const scheme =
    domain && (domain.startsWith('localhost') || domain.endsWith('.local')) ? 'http' : 'https';

  const baseUrl = `${scheme}://${domain}`;
  const fullHost = baseUrl;
  const sitemap = `${fullHost}/sitemap.xml`;

  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap,
    host: baseUrl,
  };
}
