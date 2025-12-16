import type { MetadataRoute } from 'next';
import { RouteResolver } from '@remkoj/optimizely-graph-client';
import { resolveHomePath } from '@/utils/CMSPitfallCompensations';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain =
    process.env.NEXT_PUBLIC_SITE_DOMAIN ??
    process.env.SITE_DOMAIN ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    'localhost';
  const scheme =
    domain && (domain.startsWith('localhost') || domain.endsWith('.local')) ? 'http' : 'https';
  const host = domain ? new URL(`${scheme}://${domain}`) : undefined;
  //to resolve only current project routes
  const filterDomain = process.env.SITE_PRIMARY
    ? process.env.SITE_PRIMARY.startsWith('http')
      ? process.env.SITE_PRIMARY
      : `https://${process.env.SITE_PRIMARY}`
    : undefined;
  const resolver = new RouteResolver();
  const routes = await resolver.getRoutes(filterDomain, true);
  return routes.map(r => {
    const pathname = resolveHomePath(r.url.pathname);
    return {
      url: new URL(pathname, host ?? r.url).href,
      lastModified: r.changed ?? new Date(),
      changeFrequency: 'daily',
      priority: 1,
    };
  });
}

export const revalidate = 21600; // Revalidate at a minimum every 6 hours
