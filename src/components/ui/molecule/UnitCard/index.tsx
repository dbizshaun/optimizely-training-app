import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import SvgIcon from '@mui/material/SvgIcon';
import {
  LocationLink,
  UnitName,
  UnitInfo,
  FacilityValue,
  FacilityGridItem,
  FacilityGrid,
  CardContent,
  TitleContainer,
  Price,
  UnitType,
  SaleType,
  TagBlock,
  LocationBlock,
  RegisterButton,
  RegisterBlock,
  IconButton,
  Card,
  CustomSlick,
  MultiMediaContainer,
  UnitsLeftTag,
} from './styledComponents';

import Compass from './svg/Compass';
import Bed from './svg/Bed';
import Bathtub from './svg/Bathtub';
import Location from './svg/Location';
import VirtualTour from './svg/VirtualTour';
import Share from './svg/Share';
import ArrowRight from './svg/ArrowRight';

import { SlickCarousel } from '@/components/ui/atom/SlickCarousel';

type carouselImageType = {
  key: string | number;
  src: string;
  alt: string;
};

export type UnitCardProps = {
  name: string;
  price: string;
  unitInfo: string;
  location: string;
  onLocation: () => void;
  previewImages: (carouselImageType | carouselImageType[])[]; // this type can either be an array of carouselImageType, there is a chance of one of the items to have another array nested within
  facilities: Record<'area' | 'beds' | 'baths', string>;
  unitType: string;
  saleType: string;
  registerText: string;
  onRegister: () => void;
  onVirtualTour: () => void;
  onShare: () => void;
  tag?: Record<'background' | 'color' | 'text', string>;
  href: string;
};

export function UnitCard(props: UnitCardProps) {
  const { text: tagLabel, ...tagStyle } = props.tag ?? {};
  return (
    <Card elevation={0}>
      <CardActionArea href={props.href} disableRipple>
        {tagLabel && (
          <UnitsLeftTag variant="error" sx={tagStyle}>
            {tagLabel}
          </UnitsLeftTag>
        )}
        <CustomSlick>
          <SlickCarousel dots dotsClass="slick-dots">
            {props.previewImages.map(imageOrImages => {
              if (typeof imageOrImages === 'object' && !Array.isArray(imageOrImages)) {
                const { src, alt, key } = imageOrImages;
                return <CardMedia key={key} component="img" height="200px" image={src} alt={alt} />;
              }
              return (
                <MultiMediaContainer key={imageOrImages[0].key}>
                  {imageOrImages.map(({ src, alt, key }, index) => (
                    <CardMedia
                      key={key}
                      component="img"
                      height="200px"
                      image={src}
                      alt={alt[index]}
                    />
                  ))}
                </MultiMediaContainer>
              );
            })}
          </SlickCarousel>
        </CustomSlick>
        <CardContent>
          <TitleContainer>
            <UnitName>{props.name}</UnitName>
            <Price>{props.price}</Price>
          </TitleContainer>
          <UnitInfo>{props.unitInfo}</UnitInfo>
          <LocationBlock>
            <span>
              <SvgIcon component={Location} />
            </span>
            <LocationLink
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                props.onLocation();
              }}
            >
              {props.location}
            </LocationLink>
          </LocationBlock>
          <FacilityGrid>
            <FacilityGridItem>
              <span>
                <SvgIcon component={Compass} />
              </span>
              <FacilityValue>{props.facilities.area}</FacilityValue>
            </FacilityGridItem>
            <FacilityGridItem>
              <span>
                <SvgIcon component={Bed} />
              </span>
              <FacilityValue>{props.facilities.beds}</FacilityValue>
            </FacilityGridItem>
            <FacilityGridItem>
              <span>
                <SvgIcon component={Bathtub} />
              </span>
              <FacilityValue>{props.facilities.baths}</FacilityValue>
            </FacilityGridItem>
          </FacilityGrid>
          <TagBlock>
            <UnitType>{props.unitType}</UnitType>
            <SaleType>{props.saleType}</SaleType>
          </TagBlock>
          <RegisterBlock>
            {/* <RegisterButton
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                props.onRegister();
              }}
              color="secondary"
              endIcon={<SvgIcon component={ArrowRight} />}
            >
              {props.registerText}
            </RegisterButton>
            <IconButton
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                props.onVirtualTour();
              }}
            >
              <SvgIcon component={VirtualTour} />
            </IconButton>
            <IconButton
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                props.onShare();
              }}
            >
              <SvgIcon component={Share} />
            </IconButton> */}
          </RegisterBlock>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
