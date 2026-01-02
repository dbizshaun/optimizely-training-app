import { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';
import Box from '@mui/material/Box';

import bgImage from '@/components/molecule/HomeBanner/images/image.png';

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    navItems: [
      { label: 'Communities', href: '#' },
      {
        label: 'Desintation',
        children: [{ label: 'Yas Riva', href: '#' }],
      },
      { label: 'Why Aldar?', href: '#' },
      {
        label: 'Aldar +',
        children: [
          { label: 'Logistics enter', href: '#' },
          { label: 'Premium parking', href: '#' },
        ],
      },
    ],
    registerText: 'CONTACT US',
  },
  argTypes: {
    onRegister: { action: 'onRegister' },
  },
};
Default.decorators = [
  (Story) => (
    <Box
      sx={{
        background: `url(${bgImage.src})`,
        backgroundSize: 'contain',
        height: '350px',
        width: '100%',
      }}
    >
      <Story />
    </Box>
  ),
];
