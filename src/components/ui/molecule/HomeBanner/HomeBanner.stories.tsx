import { Meta, StoryObj } from '@storybook/react';
import { HomeBanner } from '.';
import { Header } from '@/components/molecule/Header';

const meta: Meta<typeof HomeBanner> = {
  component: HomeBanner,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof HomeBanner>;

export const Default: Story = {
  args: {
    headingText: `Find <i>your</i> community.`,
  },
};

export const WithHeader: Story = {
  args: {
    headingText: `Find <i>your</i> community.`,
  },
};
WithHeader.decorators = [
  (Story) => (
    <div>
      <Header
        registerText="Contact us"
        onRegister={() => {}}
        navItems={[
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
        ]}
      />
      <Story />
    </div>
  ),
];
