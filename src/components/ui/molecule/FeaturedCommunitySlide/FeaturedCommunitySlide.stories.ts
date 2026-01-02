import type { Meta, StoryObj } from '@storybook/react';

import {
  FeaturedCommunitySlide,
  FeaturedCommunitySlideProps,
} from '.';
import bg from './images/leReeman/bg.png';
import logo from './images/leReeman/logo.png';

const meta: Meta<typeof FeaturedCommunitySlide> = {
  component: FeaturedCommunitySlide,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FeaturedCommunitySlide>;

export const Default: Story = {
  args: {
    bgImg: {
      url: bg,
      alt: 'Le Reeman Shot',
    },
    logoImg: {
      url: logo,
      alt: 'Le Reeman Logo',
    },
    name: 'Le Reeman',
    caption: 'A space designed for living.',
    link: 'https://www.le-reeman.com/',
  } as FeaturedCommunitySlideProps,
};
