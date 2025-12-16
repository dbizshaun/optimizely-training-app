import env from '@/config/environment';

export function getSiteUrl(): string {
    return env.optimizely.cms.sitePrimary
        ? env.optimizely.cms.sitePrimary.startsWith('http')
            ? env.optimizely.cms.sitePrimary
            : `https://${env.optimizely.cms.sitePrimary}`
        : 'https://localhost:3000';
}
