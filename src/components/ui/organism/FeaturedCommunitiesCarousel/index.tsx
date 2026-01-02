import React from 'react';
import { Settings } from 'react-slick';

import { ImageObj } from '@/types/ImageObj.types';

import { FeaturedCommunitySlide } from '../../molecule/FeaturedCommunitySlide';
import { StyledSlickSlider } from './styledComponents';

const carouselSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 6000,
  centerMode: true,
  initialSlide: 1,
  centerPadding: '340px',
  slidesToScroll: 1,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 360,
      settings: {
        centerPadding: '40px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '40px',
      },
    },
    {
      breakpoint: 993,
      settings: {
        centerPadding: '120px',
      },
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '180px',
      },
    },
  ],
};

export interface FeaturedCommunitiesCarouselProps {
  communities: Array<{
    bgImg: ImageObj;
    logoImg: ImageObj;
    name: string;
    caption: string;
    link: string;
  }>;
}
export const FeaturedCommunitiesCarousel: React.FC<FeaturedCommunitiesCarouselProps> = (
  props
) => {
  return (
    <StyledSlickSlider {...carouselSettings}>
      {props.communities.map((image, index) => (
        <FeaturedCommunitySlide
          key={index}
          bgImg={image.bgImg}
          logoImg={image.logoImg}
          name={image.name}
          caption={image.caption}
          link={image.link}
        />
      ))}
    </StyledSlickSlider>
  );
};
