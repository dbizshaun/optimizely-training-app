import { type CmsComponent } from '@remkoj/optimizely-cms-react';
import {
  CarouselDataFragmentDoc,
  BannerListItemDataFragmentDoc,
  type CarouselDataFragment,
} from '@/gql/graphql';
import { ExtractPropsFn } from '@/types/CmsTypes';
import CmsDebugFallback from '@/components/cms/CmsDebugFallback';
import { FeaturedCommunitiesCarousel } from '@/components/ui/organism/FeaturedCommunitiesCarousel';
import type { FeaturedCommunitiesCarouselProps } from '@/components/ui/organism/FeaturedCommunitiesCarousel';
import { getFragmentData } from '@/gql';
import { resolveImageData, resolveLinkData } from '@/utils/CommonDataResolutions';

/**
 * Carousel
 * Carousel
 */
const META = {
  componentName: 'Carousel',
  componentInfo: 'Carousel',
};

const extractProps: ExtractPropsFn<
  CarouselDataFragment,
  FeaturedCommunitiesCarouselProps
> = data => {
  const communities =
    data.bannerList
      ?.map(item => {
        const { title, buttonLabel, media, buttonLink, icon } = getFragmentData(
          BannerListItemDataFragmentDoc,
          item as any
        );

        const bgImage = resolveImageData(media);
        const logoImage = resolveImageData(icon);
        const link = resolveLinkData(buttonLink);

        // if (!bgImage || !logoImage) return null

        return {
          bgImg: bgImage,
          logoImg: logoImage,
          name: title || 'Community',
          caption: buttonLabel || 'Explore this community',
          link: link || '#',
        };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item)) ?? [];

  return {
    communities,
  };
};

export const CarouselComponent: CmsComponent<CarouselDataFragment> = ({ data, children }) => {
  const props = extractProps(data);

  if (props && props.communities.length > 0) return <FeaturedCommunitiesCarousel {...props} />;

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
CarouselComponent.displayName = 'Carousel (Component/Carousel)';
CarouselComponent.getDataFragment = () => ['CarouselData', CarouselDataFragmentDoc];

export default CarouselComponent;
