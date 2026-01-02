import type { Meta, StoryObj } from '@storybook/react';
import { WorldOfAldarCard, WorldOfAldarCardProps } from '.';
import bg from './images/bg.png';

const meta: Meta<typeof WorldOfAldarCard> = {
  component: WorldOfAldarCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof WorldOfAldarCard>;

export const Default: Story = {
  args: {
    title: 'Explore the World of Aldar with our 3D immersive experience.',
    bgImage: {
      url: bg,
      alt: 'World of aldar',
    },
    virtualTourLink: 'https://www.aldar.com/',
  } as WorldOfAldarCardProps,
};
