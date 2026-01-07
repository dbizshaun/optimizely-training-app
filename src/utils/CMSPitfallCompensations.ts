const SIZE_CONSTANT = 1024; //this in pixels will be 100vh in preview mode
export const ResolveViewportSizeForPreview = (
  size: string,
  inEditMode?: boolean,
  sizeConstant?: number
) => {
  if (!inEditMode) return size;

  const match = size.match(/^(\d+)(.*)$/);
  if (!match) {
    throw new Error(`ResolveViewportSizeForPreview: Could not parse viewport size string: ${size}`);
  }
  const numberString = match[1];
  const number = parseInt(numberString, 10);
  if (isNaN(number)) {
    throw new Error(`ResolveViewportSizeForPreview: Could not parse viewport size string: ${size}`);
  }

  if (sizeConstant) return `${(number * sizeConstant) / 100}px`;
  return `${(number * SIZE_CONSTANT) / 100}px`;
};

/**
 * CMS always returns base home path as /en. We need this to negate the effect if we don't need localization on urls
 */
export function resolveHomePath(url: string) {
  if (url.includes('/en/')) {
    return url.replace('/en/', '/');
  }
  return url;
}

type Fragment<TType> = {
  __typename?: TType;
  _type?: unknown;
};

export function getTypename<T>(fragment: Fragment<T> | undefined | null): T | undefined | null {
  if (!fragment) return undefined;
  return fragment._type as T;
}
