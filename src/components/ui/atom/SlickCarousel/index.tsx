'use client';

import ReactSlickCarousel, { Settings } from 'react-slick';

export const SlickCarousel: React.FC<Settings> = props => {
  const Carousel = ReactSlickCarousel as unknown as React.ElementType<Settings>;
  return <Carousel {...props} />;
};
