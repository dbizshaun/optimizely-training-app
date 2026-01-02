import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  component: Tag,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  args: {
    sx: {
      background: '#FFF',
      color: '#252525',
      border: '1px solid #CBC6C0',
    },
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    sx: {
      background: '#E3E1DC',
      color: '#7A756E',
    },
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Error: Story = {
  args: {
    sx: {
      backgroundColor: '#E30555',
    },
    variant: 'error',
    children: 'Error',
  },
};

export const Warning: Story = {
  args: {
    sx: {
      backgroundColor: '#CEDC00',
      color: '#252525',
    },
    variant: 'warning',
    children: 'Warning',
  },
};
