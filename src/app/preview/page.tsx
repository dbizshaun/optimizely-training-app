import { createEditPageComponent as createEditPage } from '@remkoj/optimizely-cms-nextjs/preview';
import factory from '@/components/factory';
import { createClient } from '@remkoj/optimizely-graph-client';
import { getContentById } from '@/gql/functions';
import { GraphQLClient } from 'graphql-request';

import type { getContentByIdQueryVariables } from '@/gql/graphql';

const Page = createEditPage(factory, {
  loader: (client: GraphQLClient, variables: getContentByIdQueryVariables) => {
    // Set the maximum sub-request size
    (variables as any).maxSubRequestSize = 100;
    return getContentById(client, variables);
  },
  clientFactory: (token?: string) =>
    createClient(undefined, token, {
      cache: false,
      queryCache: false,
      nextJsFetchDirectives: true,
    }),
});

// Configure the Next.JS route handling for the pages
export const fetchCache = 'force-no-store'; // No caching of fetch results
export const dynamic = 'force-dynamic'; // Force SSR
export const dynamicParams = true; // Allow new pages to be resolved without rebuilding the site
export const revalidate = 0; // Set page cache validity to 0 miliseconds

// Export CMS Page, Preview mode
export default Page;
