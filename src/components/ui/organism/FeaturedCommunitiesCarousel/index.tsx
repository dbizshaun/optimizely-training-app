'use client';

import React from 'react';
import { Settings } from 'react-slick';
import Box from '@mui/material/Box';

import { ImgObject } from '@/types/ImgObject';

import { FeaturedCommunitySlide } from '../../molecule/FeaturedCommunitySlide';
import { SlickCarousel } from '../../atom/SlickCarousel';

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
    bgImg: ImgObject;
    logoImg: ImgObject;
    name: string;
    caption: string;
    link: string;
  }>;
}
export const FeaturedCommunitiesCarousel: React.FC<FeaturedCommunitiesCarouselProps> = props => {
  return (
    <Box
      sx={{
        '& .slick-slide': {
          opacity: '0.4',
        },
        '& .slick-slide.slick-active': {
          opacity: 1,
        },
        '& .slick-dots li': {
          width: '10px',
          height: '10px',
        },
        '& .slick-dots li button': {
          width: '8px',
          height: '8px',
          borderRadius: '100%',
          backgroundColor: '#D9D9D9',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        },
        '& .slick-dots li.slick-active button': {
          backgroundColor: '#A3A3A3',
        },
        '& .slick-dots li button::before': {
          display: 'none',
        },
        marginBlock: 6,
      }}
    >
      <SlickCarousel {...carouselSettings}>
        {props.communities.map((community, index) => (
          <FeaturedCommunitySlide
            key={index}
            bgImg={community.bgImg}
            logoImg={community.logoImg}
            name={community.name}
            caption={community.caption}
            link={community.link}
          />
        ))}
      </SlickCarousel>
    </Box>
  );
};
