import { styled } from '@mui/material/styles';
import { SlickCarousel } from '../../atom/SlickCarousel';

const StyledSlickSlider = styled(SlickCarousel)(({ theme }) => ({
  '.slick-slide': {
    opacity: '0.4',
  },
  '.slick-slide.slick-active': {
    opacity: 1,
  },
  '.slick-dots li': {
    width: '10px',
    height: '10px',
  },
  '.slick-dots li button': {
    width: '8px',
    height: '8px',
    borderRadius: '100%',
    backgroundColor: '#D9D9D9',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  '.slick-dots li.slick-active button': {
    backgroundColor: '#A3A3A3',
  },
  '.slick-dots li button::before': {
    display: 'none',
  },
}));

export { StyledSlickSlider };
