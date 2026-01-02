import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type HeroBannerStylesStyles from "./HeroBannerStyles.opti-style.json"
import type PromoBannerStylesStyles from "./PromoBannerStyles.opti-style.json"
import type FullWidthBannerStylesStyles from "./FullWidthBannerStyles.opti-style.json"

export type HeroBannerStylesProps = LayoutProps<typeof HeroBannerStylesStyles>
export type HeroBannerStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: HeroBannerStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type HeroBannerStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: HeroBannerStylesComponentProps<DT>) => ReactNode

export type PromoBannerStylesProps = LayoutProps<typeof PromoBannerStylesStyles>
export type PromoBannerStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: PromoBannerStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type PromoBannerStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: PromoBannerStylesComponentProps<DT>) => ReactNode

export type FullWidthBannerStylesProps = LayoutProps<typeof FullWidthBannerStylesStyles>
export type FullWidthBannerStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: FullWidthBannerStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type FullWidthBannerStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: FullWidthBannerStylesComponentProps<DT>) => ReactNode


export type BannerLayoutProps = HeroBannerStylesProps | PromoBannerStylesProps | FullWidthBannerStylesProps
export type BannerComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends BannerLayoutProps = BannerLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type BannerComponent<DT extends Record<string, any> = Record<string, any>, LP extends BannerLayoutProps = BannerLayoutProps> = (props: BannerComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: BannerLayoutProps | null) : props is HeroBannerStylesProps
{
    return props?.template == "HeroBannerStyles"
}

export function isHeroBannerStylesProps(props?: BannerLayoutProps | null) : props is HeroBannerStylesProps
{
    return props?.template == "HeroBannerStyles"
}

export function isPromoBannerStylesProps(props?: BannerLayoutProps | null) : props is PromoBannerStylesProps
{
    return props?.template == "PromoBannerStyles"
}

export function isFullWidthBannerStylesProps(props?: BannerLayoutProps | null) : props is FullWidthBannerStylesProps
{
    return props?.template == "FullWidthBannerStyles"
}