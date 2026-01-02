import type { Meta, StoryObj } from '@storybook/react';

import { AldarPlusBlock, AldarPlusBlockProps } from '.';
import blockOneImage from '../../molecule/AldarPlusImageBlock/images/blockOne.png';
import blockTwoImage from '../../molecule/AldarPlusImageBlock/images/blockTwo.png';
import blockThreeImage from '../../molecule/AldarPlusImageBlock/images/blockThree.png';
import blockFourImage from '../../molecule/AldarPlusImageBlock/images/blockFour.png';
import bg from '../../molecule/WorldOfAldarCard/images/bg.png';

const meta: Meta<typeof AldarPlusBlock> = {
  component: AldarPlusBlock,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AldarPlusBlock>;

export const Default: Story = {
  args: {
    title: 'Elevate your experience with <b><i>Aldar+</i></b>',
    description:
      'Beyond your dream home or investment, <b><i>Aldar+</i></b> offers premium services to elevate your community experience, providing convenience, security, and personalisation within your space.',
    worldOfAldarCardProps: {
      title: 'Explore the World of Aldar with our 3D immersive experience.',
      bgImage: {
        url: bg,
        alt: 'World of aldar',
      },
      virtualTourLink: 'https://www.aldar.com/',
    },
    imageBlockProps: {
      imageBlocks: {
        first: {
          bgImage: {
            url: blockOneImage,
            alt: 'Block one image',
          },
          title: 'Let Aldar take care of your home.',
          buttonLink: 'https://www.aldar.com/',
          buttonLabel: 'Learn More',
          hide: false,
        },
        second: {
          bgImage: {
            url: blockTwoImage,
            alt: 'Block two image',
          },
          title: 'Welcome to Smart Living.',
          buttonLink: 'https://www.aldar.com/',
          buttonLabel: 'Learn More',
          hide: false,
        },
        third: {
          bgImage: {
            url: blockThreeImage,
            alt: 'Block three image',
          },
          title: 'Sell your off-plan property with Aldar today.',
          buttonLink: 'https://www.aldar.com/',
          buttonLabel: 'Learn More',
          hide: false,
        },
        fourth: {
          bgImage: {
            url: blockFourImage,
            alt: 'Block four image',
          },
          title: 'Limited edition, premium parking solutions.',
          buttonLink: 'https://www.aldar.com/',
          buttonLabel: 'Learn More',
          hide: false,
        },
      },
    },
  } as AldarPlusBlockProps,
};
