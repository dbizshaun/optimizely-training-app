import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedCommunitiesCarousel, FeaturedCommunitiesCarouselProps } from '.';
import leReemanBg from '../../molecule/FeaturedCommunitySlide/images/leReeman/bg.png';
import leReemanLogo from '../../molecule/FeaturedCommunitySlide/images/leReeman/logo.png';
import gardeniaBg from '../../molecule/FeaturedCommunitySlide/images/gardeniaBay/bg.jpg';
import gardeniaLogo from '../../molecule/FeaturedCommunitySlide/images/gardeniaBay/logo.png';
import educationBg from '../../molecule/FeaturedCommunitySlide/images/education/bg.jpg';
import educationLogo from '../../molecule/FeaturedCommunitySlide/images/education/logo.png';


const meta: Meta<typeof FeaturedCommunitiesCarousel> = {
  component: FeaturedCommunitiesCarousel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FeaturedCommunitiesCarousel>;

export const Default: Story = {
  args: {
    communities: [
      {
        bgImg: {
          url: educationBg,
          alt: 'Le Reeman Shot',
        },
        logoImg: {
          url: educationLogo,
          alt: 'Le Reeman Logo',
        },
        name: 'Le Reeman',
        caption: 'A space designed for living.',
        link: 'https://www.le-reeman.com/',
      },
      {
        bgImg: {
          url: leReemanBg,
          alt: 'Le Reeman Shot',
        },
        logoImg: {
          url: leReemanLogo,
          alt: 'Le Reeman Logo',
        },
        name: 'Le Reeman',
        caption: 'A space designed for living.',
        link: 'https://www.le-reeman.com/',
      },
      {
        bgImg: {
          url: gardeniaBg,
          alt: 'Le Reeman Shot',
        },
        logoImg: {
          url: gardeniaLogo,
          alt: 'Le Reeman Logo',
        },
        name: 'Le Reeman',
        caption: 'A space designed for living.',
        link: 'https://www.le-reeman.com/',
      },
    ],
  } as FeaturedCommunitiesCarouselProps,
};
