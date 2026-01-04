import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  type
  base
  default
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PublicImageAssetDataFragmentDoc = gql`
    fragment PublicImageAssetData on cmp_PublicImageAsset {
  __typename
  url: Url
  alt: AltText
}
    `;
export const PublicImageReferenceDataFragmentDoc = gql`
    fragment PublicImageReferenceData on ContentReference {
  ...ReferenceData
  item {
    ...PublicImageAssetData
  }
}
    `;
export const DictionaryItemPropertyDataFragmentDoc = gql`
    fragment DictionaryItemPropertyData on DictionaryItemProperty {
  DictionaryKey
  DictionaryValue
  DictionaryIcon {
    ...PublicImageReferenceData
  }
}
    `;
export const DictionaryBlockPropertyDataFragmentDoc = gql`
    fragment DictionaryBlockPropertyData on DictionaryBlockProperty {
  DictionaryName
  DictionaryItem {
    ...DictionaryItemPropertyData
  }
}
    `;
export const EgateTermsPropertyDataFragmentDoc = gql`
    fragment EgateTermsPropertyData on EgateTermsProperty {
  termsBody {
    json
  }
  termsTitle
  termsAcceptButton
  termsDeclineButton
}
    `;
export const SearchPropertyDataFragmentDoc = gql`
    fragment SearchPropertyData on SearchProperty {
  SearchIcon {
    ...PublicImageReferenceData
  }
  SearchDarkIcon {
    ...PublicImageReferenceData
  }
  SearchButtonText
  SearchBoxPlaceholderText
}
    `;
export const OpenGraphPropertyDataFragmentDoc = gql`
    fragment OpenGraphPropertyData on OpenGraphProperty {
  OGTitle
  OGDescription
  OGImage {
    ...PublicImageReferenceData
  }
  OGType
  OGSiteName
  OGAdmin
}
    `;
export const TwitterPropertyDataFragmentDoc = gql`
    fragment TwitterPropertyData on TwitterProperty {
  TwitterText
  TwitterSite
  TwitterDescription
  TwitterImage {
    ...PublicImageReferenceData
  }
}
    `;
export const MetadataPropertyDataFragmentDoc = gql`
    fragment MetadataPropertyData on MetadataProperty {
  MetaDataTitle
  MetaDataDescription
  MetaDataKeyWords
  MetaDataTags
  OpenGraph {
    ...OpenGraphPropertyData
  }
  Twitter {
    ...TwitterPropertyData
  }
}
    `;
export const CompositionNodeDataFragmentDoc = gql`
    fragment CompositionNodeData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const AppPromoDataFragmentDoc = gql`
    fragment AppPromoData on AppPromo {
  Title
}
    `;
export const BannerDataFragmentDoc = gql`
    fragment BannerData on Banner {
  title: BannerTitle
  media: BannerMedia {
    ...PublicImageReferenceData
  }
}
    `;
export const BannerSlideDataFragmentDoc = gql`
    fragment BannerSlideData on BannerSlide {
  Title
}
    `;
export const CardsDataFragmentDoc = gql`
    fragment CardsData on Cards {
  Title
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const BannerListItemDataFragmentDoc = gql`
    fragment BannerListItemData on Banner {
  title: BannerTitle
  media: BannerMedia {
    ...PublicImageReferenceData
  }
  buttonLabel: BannerLinkLabel
  buttonLink: BannerLink {
    ...LinkData
  }
  icon: BannerIcon {
    ...PublicImageReferenceData
  }
}
    `;
export const CarouselDataFragmentDoc = gql`
    fragment CarouselData on Carousel {
  bannerList: Carousel {
    ...IContentListItem
    ...BannerListItemData
  }
}
    `;
export const FooterDataFragmentDoc = gql`
    fragment FooterData on Footer {
  FooterSocialMediaTitle
}
    `;
export const GraphqlListingDataFragmentDoc = gql`
    fragment GraphqlListingData on GraphqlListing {
  ID
  Title
  Category
  SubCategory
  Status
}
    `;
export const NavListMenuItemDataFragmentDoc = gql`
    fragment NavListMenuItemData on MenuItem {
  label: MenuItemLabel
  link: MenuLink {
    ...LinkData
  }
}
    `;
export const MenuItemDataFragmentDoc = gql`
    fragment MenuItemData on MenuItem {
  label: MenuItemLabel
  link: MenuLink {
    ...LinkData
  }
  icon: MenuIcon {
    ...PublicImageReferenceData
  }
}
    `;
export const HeaderDataFragmentDoc = gql`
    fragment HeaderData on Header {
  logo: HeaderLogo {
    ...PublicImageReferenceData
  }
  navMenuList: NavigationMenu {
    ...IContentListItem
    ...NavListMenuItemData
  }
  logoUrl: LogoURL {
    ...LinkData
  }
  buttonsList: UtilityMenu {
    ...IContentListItem
    ...MenuItemData
  }
}
    `;
export const CompositionComponentNodeDataFragmentDoc = gql`
    fragment CompositionComponentNodeData on ICompositionComponentNode {
  component {
    ...BlockData
    ...ElementData
    ...AppPromoData
    ...BannerData
    ...BannerSlideData
    ...CardsData
    ...CarouselData
    ...FooterData
    ...GraphqlListingData
    ...HeaderData
    ...MenuItemData
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionNodeData
    nodes {
      ...CompositionNodeData
      ... on ICompositionStructureNode {
        nodes {
          ...CompositionNodeData
          ... on ICompositionStructureNode {
            nodes {
              ...CompositionNodeData
              ... on ICompositionStructureNode {
                nodes {
                  ...CompositionNodeData
                  ...CompositionComponentNodeData
                  ... on ICompositionStructureNode {
                    nodes {
                      ...CompositionNodeData
                      ...CompositionComponentNodeData
                    }
                  }
                }
              }
            }
          }
        }
      }
      ...CompositionComponentNodeData
    }
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  MetaData {
    ...MetadataPropertyData
  }
  ...ExperienceData
}
    `;
export const PublicVideoAssetDataFragmentDoc = gql`
    fragment PublicVideoAssetData on cmp_PublicVideoAsset {
  __typename
  url: Url
}
    `;
export const PublicVideoReferenceDataFragmentDoc = gql`
    fragment PublicVideoReferenceData on ContentReference {
  ...ReferenceData
  item {
    ...PublicVideoAssetData
  }
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const LinkItemDataFragmentDoc = gql`
    fragment LinkItemData on Link {
  title
  text
  target
  url {
    ...LinkData
  }
}
    `;
export const getBlankExperienceMetadataDocument = gql`
    query getBlankExperienceMetadata($key: String!, $version: String, $locale: [Locales!]) {
  page: BlankExperience(
    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}
    locale: $locale
  ) {
    item {
      MetaData {
        title: MetaDataTitle
        description: MetaDataDescription
        OpenGraph {
          ogTitle: OGTitle
          ogDescription: OGDescription
          ogSiteName: OGSiteName
          ogType: OGType
          ogImage: OGImage {
            ...PublicImageReferenceData
          }
        }
      }
      site: _metadata {
        url {
          base
          default
        }
      }
    }
  }
}
    ${PublicImageReferenceDataFragmentDoc}
${ReferenceDataFragmentDoc}
${LinkDataFragmentDoc}
${PublicImageAssetDataFragmentDoc}`;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String, $changeset: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}], _metadata: {changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...BlockData
      ...PageData
      ...AppPromoData
      ...BannerData
      ...BannerSlideData
      ...CardsData
      ...CarouselData
      ...FooterData
      ...GraphqlListingData
      ...HeaderData
      ...MenuItemData
      ...BlankExperienceData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${BlockDataFragmentDoc}
${PageDataFragmentDoc}
${AppPromoDataFragmentDoc}
${BannerDataFragmentDoc}
${PublicImageReferenceDataFragmentDoc}
${ReferenceDataFragmentDoc}
${PublicImageAssetDataFragmentDoc}
${BannerSlideDataFragmentDoc}
${CardsDataFragmentDoc}
${CarouselDataFragmentDoc}
${IContentListItemFragmentDoc}
${BannerListItemDataFragmentDoc}
${FooterDataFragmentDoc}
${GraphqlListingDataFragmentDoc}
${HeaderDataFragmentDoc}
${NavListMenuItemDataFragmentDoc}
${MenuItemDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${MetadataPropertyDataFragmentDoc}
${OpenGraphPropertyDataFragmentDoc}
${TwitterPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String, $changeset: String = null) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}, changeset: {eq: $changeset}}}
    locale: $locale
  ) {
    total
    items: item {
      ...IContentData
      ...PageData
      ...BlankExperienceData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${MetadataPropertyDataFragmentDoc}
${OpenGraphPropertyDataFragmentDoc}
${PublicImageReferenceDataFragmentDoc}
${ReferenceDataFragmentDoc}
${PublicImageAssetDataFragmentDoc}
${TwitterPropertyDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionNodeDataFragmentDoc}
${CompositionComponentNodeDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${AppPromoDataFragmentDoc}
${BannerDataFragmentDoc}
${BannerSlideDataFragmentDoc}
${CardsDataFragmentDoc}
${CarouselDataFragmentDoc}
${IContentListItemFragmentDoc}
${BannerListItemDataFragmentDoc}
${FooterDataFragmentDoc}
${GraphqlListingDataFragmentDoc}
${HeaderDataFragmentDoc}
${NavListMenuItemDataFragmentDoc}
${MenuItemDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String = "-", $domain: String) {
  content: _Content(
    variation: {include: ALL}
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items: item {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getBlankExperienceMetadata(variables: Schema.getBlankExperienceMetadataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getBlankExperienceMetadataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getBlankExperienceMetadataQuery>({ document: getBlankExperienceMetadataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBlankExperienceMetadata', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>({ document: getContentByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>({ document: getContentByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>({ document: getContentTypeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;