import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Button } from '@/components/atom/Button/Button';

import {
  TrendingHighlights,
  Props as TrendingHighlightsProps,
} from '@/components/molecule/TrendingHighlights';

import Link from 'next/link';
import {
  ActionButton,
  BackgroundWrapper,
  ContentContainer,
  GradientBox,
  Title,
} from './styledComponents';

export type Props = {
  highlights: TrendingHighlightsProps['highlights'];
  buttonLabel: string;
  buttonLink: string;
  title: string;
  backgroundImg: string;
};
export function TrendingCommunities(props: Props) {
  return (
    <div>
      <BackgroundWrapper
        sx={{
          backgroundImage: `url(${props.backgroundImg})`,
        }}
      >
        <GradientBox />
        <ContentContainer>
          <Title>{props.title}</Title>
          <ActionButton
            variant="outlined"
            component={Link}
            href={props.buttonLink}
          >
            {props.buttonLabel}
          </ActionButton>
        </ContentContainer>
      </BackgroundWrapper>
      <TrendingHighlights highlights={props.highlights} />
    </div>
  );
}
