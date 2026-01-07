import { type OptimizelyNextPage as CmsComponent } from '@remkoj/optimizely-cms-nextjs';
import { getFragmentData } from '@/gql/fragment-masking';
import {
  ExperienceDataFragmentDoc,
  BlankExperienceDataFragmentDoc,
  type BlankExperienceDataFragment,
  CompositionNodeDataFragmentDoc,
  Locales,
} from '@/gql/graphql';
import { OptimizelyComposition, isNode, CmsEditable } from '@remkoj/optimizely-cms-react/rsc';
import { getSdk } from '@/gql';
import { resolveImageData, resolveLinkData } from '@/utils/CommonDataResolutions';
import { getSiteUrl } from '@/utils/APIResolvers';

/**
 * Blank Experience
 * An experience without a predefined layout.
 */
export const BlankExperienceExperience: CmsComponent<BlankExperienceDataFragment> = ({
  data,
  ctx,
}) => {
  const composition = getFragmentData(
    CompositionNodeDataFragmentDoc,
    getFragmentData(ExperienceDataFragmentDoc, data)?.composition
  );
  return (
    <CmsEditable as="div" cmsFieldName="unstructuredData" ctx={ctx}>
      {composition && isNode(composition) && <OptimizelyComposition node={composition} ctx={ctx} />}
    </CmsEditable>
  );
};
BlankExperienceExperience.displayName = 'Blank Experience (Experience/BlankExperience)';
BlankExperienceExperience.getDataFragment = () => [
  'BlankExperienceData',
  BlankExperienceDataFragmentDoc,
];
BlankExperienceExperience.getMetaData = async (contentLink, locale, client) => {
  const sdk = getSdk(client);
  const data = await sdk.getBlankExperienceMetadata({
    key: contentLink.key,
    locale: locale as Locales,
    version: contentLink.version,
  });

  const meta = data.page?.item?.MetaData;
  const og = meta?.OpenGraph;
  const ogImage = resolveImageData(og?.ogImage);

  const siteUrl = resolveLinkData(data.page?.item?.site?.url);
  const appUrl = getSiteUrl();
  const canonical = `${appUrl}/${siteUrl}`;

  return {
    title: meta?.title,
    description: meta?.description,
    openGraph: {
      title: og?.ogTitle ?? meta?.title ?? undefined,
      description: og?.ogDescription ?? meta?.description ?? undefined,
      siteName: og?.ogSiteName ?? undefined,
      type: (og?.ogType as 'website' | 'article') || 'website',
      images: [{ url: ogImage.src }],
    },
    alternates: {
      canonical,
    },
  };
};

export default BlankExperienceExperience;
