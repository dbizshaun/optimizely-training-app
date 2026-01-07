import type { Meta, StoryObj } from '@storybook/react';
import { LiveAldarAppCard, LiveAldarAppCardProps } from '.';
import bg from './images/bg.png';

const meta: Meta<typeof LiveAldarAppCard> = {
  component: LiveAldarAppCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LiveAldarAppCard>;

export const Default: Story = {
  args: {
    title: {
      mobile: 'Unlock the next level of your property journey.',
      desktop: 'Unlock the next level of your property journey with the Live Aldar app.',
    },
    bgImage: {
      url: bg,
      alt: 'Live Aldar App background',
    },
    androidAppLink: 'https://play.google.com/store/apps/details?id=com.aldar.properties',
    iosAppLink: 'https://apps.apple.com/ae/app/live-aldar/id1493074493',
  } as LiveAldarAppCardProps,
};
