import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type ListingVariation_1Styles from "./ListingVariation_1.opti-style.json"
import type ListingVariation_3Styles from "./ListingVariation_3.opti-style.json"
import type ListingVariation_4Styles from "./ListingVariation_4.opti-style.json"
import type ListingVariation_2Styles from "./ListingVariation_2.opti-style.json"

export type ListingVariation_1Props = LayoutProps<typeof ListingVariation_1Styles>
export type ListingVariation_1ComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: ListingVariation_1Props | undefined
} & JSX.IntrinsicElements['div']
export type ListingVariation_1Component<DT extends Record<string, any> = Record<string, any>> = (props: ListingVariation_1ComponentProps<DT>) => ReactNode

export type ListingVariation_3Props = LayoutProps<typeof ListingVariation_3Styles>
export type ListingVariation_3ComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: ListingVariation_3Props | undefined
} & JSX.IntrinsicElements['div']
export type ListingVariation_3Component<DT extends Record<string, any> = Record<string, any>> = (props: ListingVariation_3ComponentProps<DT>) => ReactNode

export type ListingVariation_4Props = LayoutProps<typeof ListingVariation_4Styles>
export type ListingVariation_4ComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: ListingVariation_4Props | undefined
} & JSX.IntrinsicElements['div']
export type ListingVariation_4Component<DT extends Record<string, any> = Record<string, any>> = (props: ListingVariation_4ComponentProps<DT>) => ReactNode

export type ListingVariation_2Props = LayoutProps<typeof ListingVariation_2Styles>
export type ListingVariation_2ComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: ListingVariation_2Props | undefined
} & JSX.IntrinsicElements['div']
export type ListingVariation_2Component<DT extends Record<string, any> = Record<string, any>> = (props: ListingVariation_2ComponentProps<DT>) => ReactNode


export type GraphqlListingLayoutProps = ListingVariation_1Props | ListingVariation_3Props | ListingVariation_4Props | ListingVariation_2Props
export type GraphqlListingComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends GraphqlListingLayoutProps = GraphqlListingLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type GraphqlListingComponent<DT extends Record<string, any> = Record<string, any>, LP extends GraphqlListingLayoutProps = GraphqlListingLayoutProps> = (props: GraphqlListingComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: GraphqlListingLayoutProps | null) : props is ListingVariation_1Props
{
    return props?.template == "ListingVariation_1"
}

export function isListingVariation_1Props(props?: GraphqlListingLayoutProps | null) : props is ListingVariation_1Props
{
    return props?.template == "ListingVariation_1"
}

export function isListingVariation_3Props(props?: GraphqlListingLayoutProps | null) : props is ListingVariation_3Props
{
    return props?.template == "ListingVariation_3"
}

export function isListingVariation_4Props(props?: GraphqlListingLayoutProps | null) : props is ListingVariation_4Props
{
    return props?.template == "ListingVariation_4"
}

export function isListingVariation_2Props(props?: GraphqlListingLayoutProps | null) : props is ListingVariation_2Props
{
    return props?.template == "ListingVariation_2"
}