import type { Meta, StoryObj } from '@storybook/react';

import { FeaturedUnits } from '.';
import SampleImage from '@/components/molecule/HomeBanner/images/image.png';

const meta: Meta<typeof FeaturedUnits> = {
  component: FeaturedUnits,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FeaturedUnits>;

const unitMockData = {
  id: 'a2D8d000001Uyj5EAC',
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
  onLocation: () => {},
  onRegister: () => {},
  onVirtualTour: () => {},
  onShare: () => {},
};

export const Default: Story = {
  args: {
    title: 'Featured Units',
    moreUnitsLink: 'https://www.aldar.com/',
    moreUnitsLinkLabel: 'More Units',
    units: [unitMockData, unitMockData, unitMockData],
  },
};
