/**
 * Centralized Environment Configuration
 *
 * This file consolidates all environment variables used throughout the application
 * and groups them by their functional context for better organization and maintainability.
 */

import packageJson from '../../package.json';

// =============================================================================
// OPTIMIZELY CMS & GRAPHQL CONFIGURATION
// =============================================================================
export const optimizely = {
    // GraphQL Configuration
    graphql: {
        secret: process.env.OPTIMIZELY_GRAPH_SECRET ?? '',
        appKey: process.env.OPTIMIZELY_GRAPH_APP_KEY ?? '',
        singleKey: process.env.OPTIMIZELY_GRAPH_SINGLE_KEY ?? '',
        gateway: process.env.OPTIMIZELY_GRAPH_GATEWAY ?? '',
        contentUrl: process.env.OPTIMIZELY_GRAPH_CONTENT_URL ?? '',
        updateDelay: process.env.OPTIMIZELY_GRAPH_UPDATE_DELAY ?? '',
        queryLog: process.env.OPTIMIZELY_GRAPH_QUERY_LOG ?? '',
    },
    // CMS Configuration
    cms: {
        url: process.env.OPTIMIZELY_CMS_URL ?? '',
        clientId: process.env.OPTIMIZELY_CMS_CLIENT_ID ?? '',
        clientSecret: process.env.OPTIMIZELY_CMS_CLIENT_SECRET ?? '',
        publishToken: process.env.OPTIMIZELY_PUBLISH_TOKEN ?? '',
        // Site configuration for CMS operations
        siteDomain: process.env.SITE_DOMAIN ?? '',
        sitePrimary: process.env.SITE_PRIMARY ?? '',
    },
} as const;

// =============================================================================
// SITE & DOMAIN CONFIGURATION (Public/Client-side)
// =============================================================================
export const site = {
    // Public site configuration (client-side accessible)
    public: {
        baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? '',
        siteDomain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? '',
        // cspHeaders: process.env.NEXT_PUBLIC_CSP_HEADERS ?? '',
    },
} as const;

// =============================================================================
// DATADOG MONITORING CONFIGURATION
// =============================================================================
export const datadog = {
    // Client-side Datadog configuration (browser/RUM)
    client: {
        applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID ?? '',
        clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN ?? '',
        service: process.env.NEXT_PUBLIC_DATADOG_SERVICE ?? '',
        env: process.env.NEXT_PUBLIC_DATADOG_ENV ?? '',
        site: process.env.NEXT_PUBLIC_DATADOG_SITE ?? '',
    },
} as const;

// =============================================================================
// GOOGLE ANALYTICS & TAG MANAGER CONFIGURATION
// =============================================================================
export const analytics = {
    google: {
        tagManagerId: process.env.NEXT_PUBLIC_GOOGLE_ID ?? '',
    },
} as const;

// =============================================================================
// SYSTEM & BUILD CONFIGURATION
// =============================================================================
export const system = {
    nodeEnv: process.env.NODE_ENV ?? 'development',
    version: packageJson.version,
} as const;


const env = {
    optimizely,
    site,
    datadog,
    analytics,
    system
}

export default env;