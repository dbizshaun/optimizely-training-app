import ReactSlickCarousel, { Settings } from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlickCarousel: React.FC<Settings> = (props) => {
  return <ReactSlickCarousel {...props} />;
};
