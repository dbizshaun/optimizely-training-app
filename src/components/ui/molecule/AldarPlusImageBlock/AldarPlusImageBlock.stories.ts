import type { Meta, StoryObj } from '@storybook/react';
import { AldarPlusImageBlock, AldarPlusImageBlockProps } from '.';
import blockOneImage from './images/blockOne.png';
import blockTwoImage from './images/blockTwo.png';
import blockThreeImage from './images/blockThree.png';
import blockFourImage from './images/blockFour.png';

const meta: Meta<typeof AldarPlusImageBlock> = {
  component: AldarPlusImageBlock,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AldarPlusImageBlock>;

export const Default: Story = {
  args: {
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
  } as AldarPlusImageBlockProps,
};
