import { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  component: Menu,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    children: <div>Click me</div>,
    options: [
      { label: 'Item 1', href: 'www.aldar.com' },
      { label: 'Item 2', href: '/properties' },
    ],
  },
};
