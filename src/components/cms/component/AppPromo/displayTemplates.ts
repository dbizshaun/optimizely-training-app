import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type AppPromoStylesStyles from "./AppPromoStyles.opti-style.json"
import type AppPromoStylesThreeStyles from "./AppPromoStylesThree.opti-style.json"
import type AppPromoStylesOneStyles from "./AppPromoStylesOne.opti-style.json"
import type AppPromoStylesFourStyles from "./AppPromoStylesFour.opti-style.json"
import type AppPromoStylesTwoStyles from "./AppPromoStylesTwo.opti-style.json"

export type AppPromoStylesProps = LayoutProps<typeof AppPromoStylesStyles>
export type AppPromoStylesComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: AppPromoStylesProps | undefined
} & JSX.IntrinsicElements['div']
export type AppPromoStylesComponent<DT extends Record<string, any> = Record<string, any>> = (props: AppPromoStylesComponentProps<DT>) => ReactNode

export type AppPromoStylesThreeProps = LayoutProps<typeof AppPromoStylesThreeStyles>
export type AppPromoStylesThreeComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: AppPromoStylesThreeProps | undefined
} & JSX.IntrinsicElements['div']
export type AppPromoStylesThreeComponent<DT extends Record<string, any> = Record<string, any>> = (props: AppPromoStylesThreeComponentProps<DT>) => ReactNode

export type AppPromoStylesOneProps = LayoutProps<typeof AppPromoStylesOneStyles>
export type AppPromoStylesOneComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: AppPromoStylesOneProps | undefined
} & JSX.IntrinsicElements['div']
export type AppPromoStylesOneComponent<DT extends Record<string, any> = Record<string, any>> = (props: AppPromoStylesOneComponentProps<DT>) => ReactNode

export type AppPromoStylesFourProps = LayoutProps<typeof AppPromoStylesFourStyles>
export type AppPromoStylesFourComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: AppPromoStylesFourProps | undefined
} & JSX.IntrinsicElements['div']
export type AppPromoStylesFourComponent<DT extends Record<string, any> = Record<string, any>> = (props: AppPromoStylesFourComponentProps<DT>) => ReactNode

export type AppPromoStylesTwoProps = LayoutProps<typeof AppPromoStylesTwoStyles>
export type AppPromoStylesTwoComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: AppPromoStylesTwoProps | undefined
} & JSX.IntrinsicElements['div']
export type AppPromoStylesTwoComponent<DT extends Record<string, any> = Record<string, any>> = (props: AppPromoStylesTwoComponentProps<DT>) => ReactNode


export type AppPromoLayoutProps = AppPromoStylesProps | AppPromoStylesThreeProps | AppPromoStylesOneProps | AppPromoStylesFourProps | AppPromoStylesTwoProps
export type AppPromoComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends AppPromoLayoutProps = AppPromoLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type AppPromoComponent<DT extends Record<string, any> = Record<string, any>, LP extends AppPromoLayoutProps = AppPromoLayoutProps> = (props: AppPromoComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: AppPromoLayoutProps | null) : props is AppPromoStylesProps
{
    return props?.template == "AppPromoStyles"
}

export function isAppPromoStylesProps(props?: AppPromoLayoutProps | null) : props is AppPromoStylesProps
{
    return props?.template == "AppPromoStyles"
}

export function isAppPromoStylesThreeProps(props?: AppPromoLayoutProps | null) : props is AppPromoStylesThreeProps
{
    return props?.template == "AppPromoStylesThree"
}

export function isAppPromoStylesOneProps(props?: AppPromoLayoutProps | null) : props is AppPromoStylesOneProps
{
    return props?.template == "AppPromoStylesOne"
}

export function isAppPromoStylesFourProps(props?: AppPromoLayoutProps | null) : props is AppPromoStylesFourProps
{
    return props?.template == "AppPromoStylesFour"
}

export function isAppPromoStylesTwoProps(props?: AppPromoLayoutProps | null) : props is AppPromoStylesTwoProps
{
    return props?.template == "AppPromoStylesTwo"
}