'use client';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useIsMobile } from '@/hooks/mediaQuery';
import Image from 'next/image';
import { ImgObject } from '@/types/ImgObject';

export type Props = {
  headingText: string;
  backgroundImage?: ImgObject;
};
export function HomeBanner(props: Props) {
  const isMobile = useIsMobile();
  const imageSrc = props.backgroundImage?.src || './images/image.png';

  return (
    <Box
      sx={{
        height: '476px',
        paddingTop: '184px',
        boxSizing: 'border-box',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        zIndex: 0,
      }}
    >
      {props.backgroundImage ? (
        <Image
          src={props.backgroundImage.src}
          alt={props.backgroundImage.alt}
          fill
          style={{
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        />
      ) : (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            backgroundImage: `url(${imageSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50%',
            backgroundSize: 'cover',
          }}
        />
      )}
      <Box
        sx={{
          position: 'absolute',
          height: '70%',
          width: '100%',
          top: 0,
          left: 0,
          background: 'linear-gradient(180deg, rgba(43, 2, 68, 0.4) 0%, rgba(88, 5, 170, 0) 100%)',
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          zIndex: -2,
          background: 'linear-gradient(90deg, rgba(43, 2, 68, 0.2) 0%, rgba(88, 5, 170, 0) 100%)',
        }}
      />
      <Container>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontSize: isMobile ? '48px' : '80px',
            fontWeight: 400,
            lineHeight: isMobile ? '52.8px' : '80px',
            marginBottom: isMobile ? '24px' : '48px',
          }}
        >
          <span dangerouslySetInnerHTML={{ __html: props.headingText }} />
        </Typography>
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
    </Box>
  );
}
