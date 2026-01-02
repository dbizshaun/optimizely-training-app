import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import {
  GradientBoxHorizontal,
  GradientBoxVertical,
  Heading,
  Wrapper,
} from './styledComponents';

import bgImage from './images/image.png';

export type Props = {
  headingText: string;
};
export function HomeBanner(props: Props) {
  return (
    <Wrapper
      sx={{
        backgroundImage: `url(${bgImage.src})`,
      }}
    >
      <GradientBoxVertical />
      <GradientBoxHorizontal />
      <Container>
        <Heading variant="h2">
          <span dangerouslySetInnerHTML={{ __html: props.headingText }} />
        </Heading>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '24px',
            padding: '24px',
          }}
        >
          Search comes here
        </Box>
      </Container>
    </Wrapper>
  );
}
