import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type BannerSlideCommunitiesIframeStylesStyles from "./BannerSlideCommunitiesIframeStyles.opti-style.json"
import type BannerSlideIframeStylesStyles from "./BannerSlideIframeStyles.opti-style.json"
import type BannerSlideDestinationsIframesStyles from "./BannerSlideDestinationsIframes.opti-style.json"

export type BannerSlideCommunitiesIframeStylesProps = LayoutProps<typeof BannerSlideCommunitiesIframeStylesStyles>
export type BannerSlideCommunitiesIframeStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: BannerSlideCommunitiesIframeStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type BannerSlideCommunitiesIframeStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: BannerSlideCommunitiesIframeStylesComponentProps<DT>) => ReactNode

export type BannerSlideIframeStylesProps = LayoutProps<typeof BannerSlideIframeStylesStyles>
export type BannerSlideIframeStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: BannerSlideIframeStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type BannerSlideIframeStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: BannerSlideIframeStylesComponentProps<DT>) => ReactNode

export type BannerSlideDestinationsIframesProps = LayoutProps<typeof BannerSlideDestinationsIframesStyles>
export type BannerSlideDestinationsIframesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: BannerSlideDestinationsIframesProps | undefined
} & JSX.IntrinsicElements['div']
export type BannerSlideDestinationsIframesComponent<DT extends Record<string, any> = Record<string, any>> = (props: BannerSlideDestinationsIframesComponentProps<DT>) => ReactNode


export type BannerSlideLayoutProps = BannerSlideCommunitiesIframeStylesProps | BannerSlideIframeStylesProps | BannerSlideDestinationsIframesProps
export type BannerSlideComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends BannerSlideLayoutProps = BannerSlideLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type BannerSlideComponent<DT extends Record<string, any> = Record<string, any>, LP extends BannerSlideLayoutProps = BannerSlideLayoutProps> = (props: BannerSlideComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: BannerSlideLayoutProps | null) : props is BannerSlideIframeStylesProps
{
    return props?.template == "BannerSlideIframeStyles"
}

export function isBannerSlideCommunitiesIframeStylesProps(props?: BannerSlideLayoutProps | null) : props is BannerSlideCommunitiesIframeStylesProps
{
    return props?.template == "BannerSlideCommunitiesIframeStyles"
}

export function isBannerSlideIframeStylesProps(props?: BannerSlideLayoutProps | null) : props is BannerSlideIframeStylesProps
{
    return props?.template == "BannerSlideIframeStyles"
}

export function isBannerSlideDestinationsIframesProps(props?: BannerSlideLayoutProps | null) : props is BannerSlideDestinationsIframesProps
{
    return props?.template == "BannerSlideDestinationsIframes"
}