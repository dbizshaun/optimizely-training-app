import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { blue } from '@mui/material/colors';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    variant: {
      control: 'select',
      options: ['contained', 'outlined'],
      defaultValue: 'contained'
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const VariantContained: Story = {
  args: {
    children: 'Default',
    color: 'primary',
  },
};

export const VariantOutlined: Story = {
  args: {
    children: 'Outlined',
    color: 'primary',
    variant: 'outlined',
  },
};

export const CustomColorWithVariantContained: Story = {
  args: {
    children: 'Custom Color',
    color: 'secondary',
    sx: {
      color: 'white',
      backgroundColor: blue[900],
    }
  },
};
export const CustomColorWithVariantOutline: Story = {
  args: {
    children: 'Custom Color',
    color: 'secondary',
    variant: 'outlined',
    sx: {
      color: blue[900],
      borderColor: blue[900],
    }
  },
};
