import { getFragmentData } from '@/gql';
import {
  LinkDataFragmentDoc,
  PublicImageAssetDataFragmentDoc,
  PublicImageReferenceDataFragmentDoc,
  PublicVideoAssetDataFragmentDoc,
  PublicVideoReferenceDataFragmentDoc,
  ReferenceDataFragmentDoc,
} from '@/gql/graphql';

import env from '@/config/environment';

import type { ImgObject } from '@/types/ImgObject';

export function resolveImageData(fragment: any, config?: { noBlurDataURL?: boolean }): ImgObject {
  try {
    // DAM item first (cmp_PublicImageAsset)
    let src = '';
    const { item: damImageFragment } = getFragmentData(
      PublicImageReferenceDataFragmentDoc,
      fragment
    );
    const damImage = getFragmentData(PublicImageAssetDataFragmentDoc, damImageFragment as any);
    if (damImage?.url) {
      src = damImage.url;
    }

    const alt = damImage?.alt ?? fragment?.key ?? 'fallback alt';
    const blurDataURL = (damImage as any)?.blurDataURL ?? undefined;

    if (src) {
      if (config?.noBlurDataURL) return { src, alt };
      return { src, alt, blurDataURL };
    }

    // Legacy fallback: ReferenceData-only fragments
    const image = getFragmentData(ReferenceDataFragmentDoc, fragment);
    const legacySrc = resolveLinkData(image?.url);
    const legacyAlt = alt ?? image?.key ?? 'fallback alt';
    return { src: legacySrc, alt: legacyAlt };
  } catch (error) {
    console.error(error);
    throw new Error('Custom Error: Failed to resolve image (resolveImageData function)');
  }
}

export function resolveVideoData(fragment: any): string {
  try {
    let src = '';
    const { item: damVideoFragment } = getFragmentData(
      PublicVideoReferenceDataFragmentDoc,
      fragment
    );
    const damVideo = getFragmentData(PublicVideoAssetDataFragmentDoc, damVideoFragment as any);
    src = damVideo?.url ?? '';

    if (src) return src;

    const video = getFragmentData(ReferenceDataFragmentDoc, fragment);
    const legacySrc = resolveLinkData(video?.url);
    return legacySrc;
  } catch (error) {
    console.error(error);
    throw new Error('Custom Error: Failed to resolve video (resolveVideoData function)');
  }
}

export function resolveLinkData(fragment: any) {
  try {
    const link = getFragmentData(LinkDataFragmentDoc, fragment);

    const linkHostname = link?.base ? new URL(link.base).hostname : '';
    let href = '';
    if (linkHostname === env.optimizely.cms.siteDomain) {
      href = link.default ?? '/';
    } else if (link?.default && link.base) {
      href = new URL(link.default, link.base).href;
    } else if (link?.default) {
      href = link.default;
    }

    return href;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to resolve link (resolveLinkData function)');
  }
}
