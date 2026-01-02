import Image from 'next/image';
import React from 'react';

import { ImageObj } from '@/types/ImageObj.types';

import {
  CategoryAction,
  CategoryButton,
  CategoryContent,
  CategoryHeading,
  CategoryImage,
  CategoryItem,
  CategoryLink,
  CategoryLogo,
} from './styledComponents';

export interface FeaturedCommunitySlideProps {
  bgImg: ImageObj;
  logoImg: ImageObj;
  name: string;
  caption: React.ReactNode;
  link: string;
}
export const FeaturedCommunitySlide: React.FC<FeaturedCommunitySlideProps> =
  React.memo(function FeaturedCommunitySlide(
    props: FeaturedCommunitySlideProps
  ) {
    return (
      <CategoryItem>
        <CategoryImage>
          <Image
            src={props.bgImg.url}
            layout="fill"
            objectFit="cover"
            alt={props.bgImg.alt}
          />
        </CategoryImage>
        <CategoryContent>
          <CategoryLogo>
            <Image
              src={props.logoImg.url}
              height={92}
              objectFit="contain"
              alt={props.logoImg.alt}
            />
          </CategoryLogo>
          <CategoryHeading>
            <h2>{props.caption}</h2>
          </CategoryHeading>
          <CategoryAction>
            {props.link.length ? (
              <CategoryLink href={props.link} target="_blank">
                {`Explore ${props.name}`}
              </CategoryLink>
            ) : (
              <CategoryButton>Coming Soon</CategoryButton>
            )}
          </CategoryAction>
        </CategoryContent>
      </CategoryItem>
    );
  });
