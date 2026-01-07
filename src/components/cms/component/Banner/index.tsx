import { type CmsComponent } from '@remkoj/optimizely-cms-react';
import { BannerDataFragmentDoc, type BannerDataFragment } from '@/gql/graphql';
import { ExtractPropsFn } from '@/types/CmsTypes';
import CmsDebugFallback from '@/components/cms/CmsDebugFallback';
import { HomeBanner } from '@/components/ui/molecule/HomeBanner';
import type { Props as HomeBannerProps } from '@/components/ui/molecule/HomeBanner';
import { resolveImageData } from '@/utils/CommonDataResolutions';

/**
 * Banner
 * Banner
 */
const META = {
  componentName: 'Banner',
  componentInfo: 'Banner',
};

const extractProps: ExtractPropsFn<BannerDataFragment, HomeBannerProps> = data => {
  const DEFAULT_HEADING = 'Welcome';

  const headingText = data.title ?? DEFAULT_HEADING;
  const backgroundImage = resolveImageData(data.media);

  return {
    headingText,
    backgroundImage,
  };
};

export const BannerComponent: CmsComponent<BannerDataFragment> = ({ data, children }) => {
  const props = extractProps(data);

  if (props) return <HomeBanner {...props} />;

  return (
    <CmsDebugFallback
      componentName={META.componentName}
      componentInfo={META.componentInfo}
      data={data}
    >
      {children}
    </CmsDebugFallback>
  );
};
BannerComponent.displayName = 'Banner (Component/Banner)';
BannerComponent.getDataFragment = () => ['BannerData', BannerDataFragmentDoc];

export default BannerComponent;
