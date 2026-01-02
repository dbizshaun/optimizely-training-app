import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { TrendingHighlights } from './index';

import Img from './images/YasMall.jpeg';

const meta: Meta<typeof TrendingHighlights> = {
  component: TrendingHighlights,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TrendingHighlights>;

export const Default: Story = {
  args: {
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
          url: Img.src,
          alt: '',
        },
      },
    ],
  },
};
