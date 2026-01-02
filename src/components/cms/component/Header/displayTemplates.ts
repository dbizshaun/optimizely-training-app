import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type HeaderVariantOneStylesStyles from "./HeaderVariantOneStyles.opti-style.json"
import type DarkStyles from "./Dark.opti-style.json"
import type LightStyles from "./Light.opti-style.json"

export type HeaderVariantOneStylesProps = LayoutProps<typeof HeaderVariantOneStylesStyles>
export type HeaderVariantOneStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: HeaderVariantOneStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type HeaderVariantOneStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: HeaderVariantOneStylesComponentProps<DT>) => ReactNode

export type DarkProps = LayoutProps<typeof DarkStyles>
export type DarkComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: DarkProps | undefined
} & JSX.IntrinsicElements['div']
export type DarkComponent<DT extends Record<string, any> = Record<string, any>> = (props: DarkComponentProps<DT>) => ReactNode

export type LightProps = LayoutProps<typeof LightStyles>
export type LightComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: LightProps | undefined
} & JSX.IntrinsicElements['div']
export type LightComponent<DT extends Record<string, any> = Record<string, any>> = (props: LightComponentProps<DT>) => ReactNode


export type HeaderLayoutProps = HeaderVariantOneStylesProps | DarkProps | LightProps
export type HeaderComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends HeaderLayoutProps = HeaderLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type HeaderComponent<DT extends Record<string, any> = Record<string, any>, LP extends HeaderLayoutProps = HeaderLayoutProps> = (props: HeaderComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: HeaderLayoutProps | null) : props is LightProps
{
    return props?.template == "Light"
}

export function isHeaderVariantOneStylesProps(props?: HeaderLayoutProps | null) : props is HeaderVariantOneStylesProps
{
    return props?.template == "HeaderVariantOneStyles"
}

export function isDarkProps(props?: HeaderLayoutProps | null) : props is DarkProps
{
    return props?.template == "Dark"
}

export function isLightProps(props?: HeaderLayoutProps | null) : props is LightProps
{
    return props?.template == "Light"
}