import { type CmsComponent } from '@remkoj/optimizely-cms-react';
import {
  HeaderDataFragmentDoc,
  MenuItemDataFragmentDoc,
  NavListMenuItemDataFragmentDoc,
  type HeaderDataFragment,
} from '@/gql/graphql';
import { ExtractPropsFn } from '@/types/CmsTypes';
import CmsDebugFallback from '@/components/cms/CmsDebugFallback';
import Header from '@/components/ui/molecule/Header';
import type { Props as HeaderProps } from '@/components/ui/molecule/Header';
import { getFragmentData } from '@/gql';
import { resolveLinkData } from '@/utils/CommonDataResolutions';

/**
 * Header
 * Header
 */
const META = {
  componentName: 'Header',
  componentInfo: 'Header',
};

const extractProps: ExtractPropsFn<HeaderDataFragment, HeaderProps> = data => {
  const DEFAULT_BUTTON_TEXT = 'Register';
  const navItems =
    data.navMenuList
      ?.map(item => {
        const { label, link } = getFragmentData(NavListMenuItemDataFragmentDoc, item as any);
        const href = resolveLinkData(link);
        if (!label) return null;
        return {
          label,
          href,
        };
      })
      .filter((item): item is NonNullable<typeof item> => Boolean(item)) ?? [];

  const button = data.buttonsList?.[0];

  const { label, link } = getFragmentData(MenuItemDataFragmentDoc, button as any);
  const href = resolveLinkData(link);

  return {
    navItems,
    registerText: label ?? DEFAULT_BUTTON_TEXT,
    registerLink: href,
  };
};

export const HeaderComponent: CmsComponent<HeaderDataFragment> = ({ data, children }) => {
  const props = extractProps(data);

  if (props) return <Header {...props} />;

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
HeaderComponent.displayName = 'Header (Component/Header)';
HeaderComponent.getDataFragment = () => ['HeaderData', HeaderDataFragmentDoc];

export default HeaderComponent;
