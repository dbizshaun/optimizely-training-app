import { Meta, StoryObj } from '@storybook/react';
import { UnitCard } from '.';

import SampleImage from '../HomeBanner/images/image.png';

const meta: Meta<typeof UnitCard> = {
  component: UnitCard,
  tags: ['autodocs'],
  args: {
    name: 'Gardenia Bay',
    price: 'AED 1,200,000',
    unitInfo: 'Sea-view | Top level',
    location: 'Al Raha Gardens Gate 21, Villa 419, Khalifa City',
    facilities: {
      area: '1,200 sqft',
      beds: '2 beds',
      baths: '3 baths',
    },
    previewImages: [
      { key: '1', src: SampleImage.src, alt: '1' },
      { key: '2', src: SampleImage.src, alt: '2' },
      { key: '3', src: SampleImage.src, alt: '3' },
    ],
    unitType: 'Residential',
    saleType: 'Off-plan',
    registerText: "I'm interested",
    href: 'https://www.aldar.com/properties/en/units/a2D8d000001Uyj5EAC',
  },
  argTypes: {
    onLocation: { action: 'onLocation' },
    onRegister: { action: 'onRegister' },
    onVirtualTour: { action: 'onVirtualTour' },
    onShare: { action: 'onShare' },
  },
};
export default meta;

type Story = StoryObj<typeof UnitCard>;

export const Default: Story = {};

export const LimitedUnit: Story = {
  args: {
    tag: { background: '#E30555', color: 'white', text: 'Only 2 left' },
  },
};

export const FastSellingUnit: Story = {
  args: {
    tag: { background: '#CEDC00', color: '#252525', text: 'Selling Fast!' },
  },
};

export const MultilpeImageOnPreview: Story = {
  args: {
    previewImages: [
      [
        { key: '11', src: SampleImage.src, alt: '1' },
        { key: '12', src: SampleImage.src, alt: '1' },
      ],
      [
        { key: '21', src: SampleImage.src, alt: '2' },
        { key: '22', src: SampleImage.src, alt: '2' },
        { key: '23', src: SampleImage.src, alt: '2' },
      ],
      { key: '3', src: SampleImage.src, alt: '3' },
    ],
  },
};
