import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { TrendingCommunities } from './index';

import BackgroundImg from './images/background.png';
import Img from '@/components/molecule/TrendingHighlights/images/YasMall.jpeg';
import Img2 from '@/components/molecule/AldarPlusImageBlock/images/blockOne.png';
import Img3 from '@/components/molecule/AldarPlusImageBlock/images/blockTwo.png';

const meta: Meta<typeof TrendingCommunities> = {
  component: TrendingCommunities,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TrendingCommunities>;

export const Default: Story = {
  args: {
    title: 'World-class entertainment fuels thriving property value.',
    buttonLabel: 'EXPERIENCE YAS ISLAND',
    buttonLink: 'https://aldar.com',
    backgroundImg: BackgroundImg.src,
    highlights: [
      {
        tagLine:
          "Yas Mall is a <b><i>shopper's paradise</i></b> with over 390 international brands from all over the world.",
        description:
          'Answer the call of the sea and the city, from the new heart of the capital. Reem Island offers a fulfilling cosmopolitan lifestyle, with a bounty of dining outlets, cafés, malls, beaches, schools and more.',
        buttonLabel: 'VIEW HIGHLIGHTS',
        buttonLink: 'https://aldar.com',
        image: {
          url: Img.src,
          alt: '',
        },
      },
      {
        tagLine:
          "Yas Mall is a <b><i>shopper's paradise</i></b> with over 390 international brands from all over the world.",
        description:
          'Answer the call of the sea and the city, from the new heart of the capital. Reem Island offers a fulfilling cosmopolitan lifestyle, with a bounty of dining outlets, cafés, malls, beaches, schools and more.',
        buttonLabel: 'VIEW HIGHLIGHTS',
        buttonLink: 'https://aldar.com',
        image: {
          url: Img2.src,
          alt: '',
        },
      },
      {
        tagLine:
          "Yas Mall is a <b><i>shopper's paradise</i></b> with over 390 international brands from all over the world.",
        description:
          'Answer the call of the sea and the city, from the new heart of the capital. Reem Island offers a fulfilling cosmopolitan lifestyle, with a bounty of dining outlets, cafés, malls, beaches, schools and more.',
        buttonLabel: 'VIEW HIGHLIGHTS',
        buttonLink: 'https://aldar.com',
        image: {
          url: Img.src,
          alt: '',
        },
      },
      {
        tagLine:
          "Yas Mall is a <b><i>shopper's paradise</i></b> with over 390 international brands from all over the world.",
        description:
          'Answer the call of the sea and the city, from the new heart of the capital. Reem Island offers a fulfilling cosmopolitan lifestyle, with a bounty of dining outlets, cafés, malls, beaches, schools and more.',
        buttonLabel: 'VIEW HIGHLIGHTS',
        buttonLink: 'https://aldar.com',
        image: {
          url: Img3.src,
          alt: '',
        },
      },
    ],
  },
};
