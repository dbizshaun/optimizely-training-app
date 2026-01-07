import Image from 'next/image';
import Container from '@mui/material/Container';

import { ImgObject } from '@/types/ImgObject';

// import ReactHtmlParser from 'react-html-parser';

import {
  BackgroundWrapper,
  ContentWrapper,
  CustomCarousel,
  Description,
  HighlightButton,
  HighlightItem,
  ImageContainer,
  TagLine,
} from './styledComponents';

type HighlightProps = {
  tagLine: string;
  description: string;
  buttonLink: string;
  buttonLabel: string;
  image: ImgObject;
};
export type Props = {
  highlights: HighlightProps[];
};

export function TrendingHighlights(props: Props) {
  if (props.highlights.length === 1) return <Highlight {...props.highlights[0]} />;

  return (
    <CustomCarousel dots dotsClass="slick-dots" autoplay autoplaySpeed={4000}>
      {props.highlights.map((data: HighlightProps) => (
        <Highlight key={data.tagLine} {...data} />
      ))}
    </CustomCarousel>
  );
}

function Highlight(props: HighlightProps) {
  return (
    <BackgroundWrapper>
      <Container>
        <HighlightItem>
          <ContentWrapper>
            {/* <TagLine>{ReactHtmlParser(props.tagLine)}</TagLine>
            <Description>{ReactHtmlParser(props.description)}</Description> */}
            <HighlightButton variant="outlined" href={props.buttonLink}>
              {props.buttonLabel}
            </HighlightButton>
          </ContentWrapper>
          <ImageContainer>
            <Image layout="fill" objectFit="cover" src={props.image.src} alt={props.image.alt} />
          </ImageContainer>
        </HighlightItem>
      </Container>
    </BackgroundWrapper>
  );
}
