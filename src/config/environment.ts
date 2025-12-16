/**
 * Centralized Environment Configuration
 *
 * This file consolidates all environment variables used throughout the application
 * and groups them by their functional context for better organization and maintainability.
 */


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

const env = {
    optimizely
}

export default env;