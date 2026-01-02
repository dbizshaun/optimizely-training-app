import type { LayoutProps } from "@remkoj/optimizely-cms-react"
import type { ReactNode } from "react"
import type CarouselArrayImageStyleStyles from "./CarouselArrayImageStyle.opti-style.json"
import type CarouselMainImageStyles from "./CarouselMainImage.opti-style.json"
import type CarouselScaledActiveSlideStyleStyles from "./CarouselScaledActiveSlideStyle.opti-style.json"
import type CarouselArrayImageFiveStyles from "./CarouselArrayImageFive.opti-style.json"
import type CarouselArrayImageSixStyles from "./CarouselArrayImageSix.opti-style.json"
import type CarouselArrayImageTwoStyles from "./CarouselArrayImageTwo.opti-style.json"
import type CarouselArrayOfCardsWithArrowControlStyleStyles from "./CarouselArrayOfCardsWithArrowControlStyle.opti-style.json"
import type CarouselArrayOfFullwidthCardsStyleStyles from "./CarouselArrayOfFullwidthCardsStyle.opti-style.json"
import type CarouselFlippedImageStyleStyles from "./CarouselFlippedImageStyle.opti-style.json"
import type CarouselImageBGStyleStyles from "./CarouselImageBGStyle.opti-style.json"
import type CarouselArrayImageThreeStyles from "./CarouselArrayImageThree.opti-style.json"
import type CarouselBackgroundImageWithIconStyleStyles from "./CarouselBackgroundImageWithIconStyle.opti-style.json"
import type CarouselArrayImageFourStyles from "./CarouselArrayImageFour.opti-style.json"

export type CarouselArrayImageStyleProps = LayoutProps<typeof CarouselArrayImageStyleStyles>
export type CarouselArrayImageStyleComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselArrayImageStyleProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselArrayImageStyleComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselArrayImageStyleComponentProps<DT>) => ReactNode

export type CarouselMainImageProps = LayoutProps<typeof CarouselMainImageStyles>
export type CarouselMainImageComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselMainImageProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselMainImageComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselMainImageComponentProps<DT>) => ReactNode

export type CarouselScaledActiveSlideStyleProps = LayoutProps<typeof CarouselScaledActiveSlideStyleStyles>
export type CarouselScaledActiveSlideStyleComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselScaledActiveSlideStyleProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselScaledActiveSlideStyleComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselScaledActiveSlideStyleComponentProps<DT>) => ReactNode

export type CarouselArrayImageFiveProps = LayoutProps<typeof CarouselArrayImageFiveStyles>
export type CarouselArrayImageFiveComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselArrayImageFiveProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselArrayImageFiveComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselArrayImageFiveComponentProps<DT>) => ReactNode

export type CarouselArrayImageSixProps = LayoutProps<typeof CarouselArrayImageSixStyles>
export type CarouselArrayImageSixComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselArrayImageSixProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselArrayImageSixComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselArrayImageSixComponentProps<DT>) => ReactNode

export type CarouselArrayImageTwoProps = LayoutProps<typeof CarouselArrayImageTwoStyles>
export type CarouselArrayImageTwoComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselArrayImageTwoProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselArrayImageTwoComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselArrayImageTwoComponentProps<DT>) => ReactNode

export type CarouselArrayOfCardsWithArrowControlStyleProps = LayoutProps<typeof CarouselArrayOfCardsWithArrowControlStyleStyles>
export type CarouselArrayOfCardsWithArrowControlStyleComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselArrayOfCardsWithArrowControlStyleProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselArrayOfCardsWithArrowControlStyleComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselArrayOfCardsWithArrowControlStyleComponentProps<DT>) => ReactNode

export type CarouselArrayOfFullwidthCardsStyleProps = LayoutProps<typeof CarouselArrayOfFullwidthCardsStyleStyles>
export type CarouselArrayOfFullwidthCardsStyleComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselArrayOfFullwidthCardsStyleProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselArrayOfFullwidthCardsStyleComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselArrayOfFullwidthCardsStyleComponentProps<DT>) => ReactNode

export type CarouselFlippedImageStyleProps = LayoutProps<typeof CarouselFlippedImageStyleStyles>
export type CarouselFlippedImageStyleComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselFlippedImageStyleProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselFlippedImageStyleComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselFlippedImageStyleComponentProps<DT>) => ReactNode

export type CarouselImageBGStyleProps = LayoutProps<typeof CarouselImageBGStyleStyles>
export type CarouselImageBGStyleComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselImageBGStyleProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselImageBGStyleComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselImageBGStyleComponentProps<DT>) => ReactNode

export type CarouselArrayImageThreeProps = LayoutProps<typeof CarouselArrayImageThreeStyles>
export type CarouselArrayImageThreeComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselArrayImageThreeProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselArrayImageThreeComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselArrayImageThreeComponentProps<DT>) => ReactNode

export type CarouselBackgroundImageWithIconStyleProps = LayoutProps<typeof CarouselBackgroundImageWithIconStyleStyles>
export type CarouselBackgroundImageWithIconStyleComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselBackgroundImageWithIconStyleProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselBackgroundImageWithIconStyleComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselBackgroundImageWithIconStyleComponentProps<DT>) => ReactNode

export type CarouselArrayImageFourProps = LayoutProps<typeof CarouselArrayImageFourStyles>
export type CarouselArrayImageFourComponentProps<DT extends Record<string, any> = Record<string, any>> = {
    data: DT
    layoutProps: CarouselArrayImageFourProps | undefined
} & JSX.IntrinsicElements['div']
export type CarouselArrayImageFourComponent<DT extends Record<string, any> = Record<string, any>> = (props: CarouselArrayImageFourComponentProps<DT>) => ReactNode


export type CarouselLayoutProps = CarouselArrayImageStyleProps | CarouselMainImageProps | CarouselScaledActiveSlideStyleProps | CarouselArrayImageFiveProps | CarouselArrayImageSixProps | CarouselArrayImageTwoProps | CarouselArrayOfCardsWithArrowControlStyleProps | CarouselArrayOfFullwidthCardsStyleProps | CarouselFlippedImageStyleProps | CarouselImageBGStyleProps | CarouselArrayImageThreeProps | CarouselBackgroundImageWithIconStyleProps | CarouselArrayImageFourProps
export type CarouselComponentProps<DT extends Record<string, any> = Record<string, any>, LP extends CarouselLayoutProps = CarouselLayoutProps> = {
    data: DT
    layoutProps: LP | undefined
} & JSX.IntrinsicElements['div']

export type CarouselComponent<DT extends Record<string, any> = Record<string, any>, LP extends CarouselLayoutProps = CarouselLayoutProps> = (props: CarouselComponentProps<DT,LP>) => ReactNode

export function isDefaultProps(props?: CarouselLayoutProps | null) : props is CarouselFlippedImageStyleProps
{
    return props?.template == "CarouselFlippedImageStyle"
}

export function isCarouselArrayImageStyleProps(props?: CarouselLayoutProps | null) : props is CarouselArrayImageStyleProps
{
    return props?.template == "CarouselArrayImageStyle"
}

export function isCarouselMainImageProps(props?: CarouselLayoutProps | null) : props is CarouselMainImageProps
{
    return props?.template == "CarouselMainImage"
}

export function isCarouselScaledActiveSlideStyleProps(props?: CarouselLayoutProps | null) : props is CarouselScaledActiveSlideStyleProps
{
    return props?.template == "CarouselScaledActiveSlideStyle"
}

export function isCarouselArrayImageFiveProps(props?: CarouselLayoutProps | null) : props is CarouselArrayImageFiveProps
{
    return props?.template == "CarouselArrayImageFive"
}

export function isCarouselArrayImageSixProps(props?: CarouselLayoutProps | null) : props is CarouselArrayImageSixProps
{
    return props?.template == "CarouselArrayImageSix"
}

export function isCarouselArrayImageTwoProps(props?: CarouselLayoutProps | null) : props is CarouselArrayImageTwoProps
{
    return props?.template == "CarouselArrayImageTwo"
}

export function isCarouselArrayOfCardsWithArrowControlStyleProps(props?: CarouselLayoutProps | null) : props is CarouselArrayOfCardsWithArrowControlStyleProps
{
    return props?.template == "CarouselArrayOfCardsWithArrowControlStyle"
}

export function isCarouselArrayOfFullwidthCardsStyleProps(props?: CarouselLayoutProps | null) : props is CarouselArrayOfFullwidthCardsStyleProps
{
    return props?.template == "CarouselArrayOfFullwidthCardsStyle"
}

export function isCarouselFlippedImageStyleProps(props?: CarouselLayoutProps | null) : props is CarouselFlippedImageStyleProps
{
    return props?.template == "CarouselFlippedImageStyle"
}

export function isCarouselImageBGStyleProps(props?: CarouselLayoutProps | null) : props is CarouselImageBGStyleProps
{
    return props?.template == "CarouselImageBGStyle"
}

export function isCarouselArrayImageThreeProps(props?: CarouselLayoutProps | null) : props is CarouselArrayImageThreeProps
{
    return props?.template == "CarouselArrayImageThree"
}

export function isCarouselBackgroundImageWithIconStyleProps(props?: CarouselLayoutProps | null) : props is CarouselBackgroundImageWithIconStyleProps
{
    return props?.template == "CarouselBackgroundImageWithIconStyle"
}

export function isCarouselArrayImageFourProps(props?: CarouselLayoutProps | null) : props is CarouselArrayImageFourProps
{
    return props?.template == "CarouselArrayImageFour"
}