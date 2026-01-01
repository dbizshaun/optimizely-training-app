import { GenericContext } from '@remkoj/optimizely-cms-react';

export type CMSComponentProps = {
  ctx?: GenericContext;
};

/**
 * Generic type for CMS component prop extraction functions.
 * @template TData - The CMS data fragment type
 * @template TProps - The UI component props type
 */
export type ExtractPropsFn<TData, TProps> = (
  data: TData,
  options?: CMSComponentProps
) => TProps | null;
