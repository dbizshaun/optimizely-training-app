import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { ImgObject } from '@/types/ImgObject';

export type ImageBlock = {
  title: string;
  bgImage: ImgObject;
  buttonLabel: string;
  buttonLink: string;
  hide?: boolean;
};

const FirstImageBlock: React.FC<ImageBlock> = props => {
  const theme = useTheme();
  if (props.hide) return null;
  return (
    <Box
      sx={{
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '16px',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          flex: 1,
          height: '584px',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            opacity: 0.8,
            background: 'linear-gradient(90deg, #6C828E 50%, rgba(226, 194, 174, 0.00) 100%)',
            mixBlendMode: 'multiply',
          }}
        />
        <Image src={props.bgImage.src} layout="fill" objectFit="cover" alt={props.bgImage.alt} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px',
          [theme.breakpoints.up('md')]: {
            padding: '40px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            [theme.breakpoints.up('md')]: {
              maxWidth: '90%',
            },
            '& h2': {
              fontWeight: 400,
              color: '#fff',
              margin: '0',
              lineHeight: '100%',
              fontSize: '40px',
              marginBottom: '32px',
              [theme.breakpoints.up('md')]: {
                fontSize: '56px',
                marginBottom: '40px',
              },
            },
          }}
        >
          <Typography variant="h2">{props.title}</Typography>
        </Box>
        <Link
          href={props.buttonLink}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '240px',
            textDecoration: 'none',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#fff',
              textDecoration: 'none',
              [theme.breakpoints.up('md')]: {
                fontSize: '16px',
              },
            }}
          >
            {props.buttonLabel}
          </Typography>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.172 11.4999H17.3791L16.5256 10.6464L11.5151 5.63592L12.222 4.92903L19.2929 11.9999L12.222 19.0708L11.5151 18.3639L16.5256 13.3535L17.3791 12.4999H16.172H4.5V11.4999H16.172Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </Link>
      </Box>
    </Box>
  );
};

const SecondImageBlock: React.FC<ImageBlock> = props => {
  const theme = useTheme();
  if (props.hide) return null;
  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'hidden',
        position: 'relative',
        height: '200px',
        borderRadius: '16px',
        [theme.breakpoints.up('md')]: {
          height: '280px',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            borderRadius: '16px',
            opacity: 0.6,
            background: 'linear-gradient(90deg, #7C6B60 50%, rgba(226, 194, 174, 0.00) 100%)',
            mixBlendMode: 'multiply',
          }}
        />
        <Image src={props.bgImage.src} layout="fill" objectFit="cover" alt={props.bgImage.alt} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px',
          [theme.breakpoints.up('md')]: {
            padding: '16px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            [theme.breakpoints.up('md')]: {
              maxWidth: '90%',
            },
            '& h2': {
              fontWeight: 400,
              color: '#fff',
              margin: '0',
              lineHeight: '100%',
              fontSize: '24px',
              marginBottom: '16px',
              [theme.breakpoints.up('md')]: {
                fontSize: '24px',
                marginBottom: '24px',
              },
            },
          }}
        >
          <Typography variant="h2">{props.title}</Typography>
        </Box>
        <Link
          href={props.buttonLink}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '240px',
            textDecoration: 'none',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#fff',
              textDecoration: 'none',
              [theme.breakpoints.up('md')]: {
                fontSize: '16px',
              },
            }}
          >
            {props.buttonLabel}
          </Typography>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.172 11.4999H17.3791L16.5256 10.6464L11.5151 5.63592L12.222 4.92903L19.2929 11.9999L12.222 19.0708L11.5151 18.3639L16.5256 13.3535L17.3791 12.4999H16.172H4.5V11.4999H16.172Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </Link>
      </Box>
    </Box>
  );
};
const ThirdImageBlock: React.FC<ImageBlock> = props => {
  const theme = useTheme();
  if (props.hide) return null;
  return (
    <Box
      sx={{
        flex: 1,
        overflow: 'hidden',
        position: 'relative',
        height: '200px',
        borderRadius: '16px',
        [theme.breakpoints.up('md')]: {
          height: '280px',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            borderRadius: '16px',
            opacity: 0.6,
            background: 'linear-gradient(90deg, #6C828E 50%, rgba(226, 194, 174, 0.00) 100%)',
            mixBlendMode: 'multiply',
          }}
        />
        <Image src={props.bgImage.src} layout="fill" objectFit="cover" alt={props.bgImage.alt} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px',
          [theme.breakpoints.up('md')]: {
            padding: '16px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            [theme.breakpoints.up('md')]: {
              maxWidth: '90%',
            },
            '& h2': {
              fontWeight: 400,
              color: '#fff',
              margin: '0',
              lineHeight: '100%',
              fontSize: '24px',
              marginBottom: '16px',
              [theme.breakpoints.up('md')]: {
                fontSize: '24px',
                marginBottom: '24px',
              },
            },
          }}
        >
          <Typography variant="h2">{props.title}</Typography>
        </Box>
        <Link
          href={props.buttonLink}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '240px',
            textDecoration: 'none',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#fff',
              textDecoration: 'none',
              [theme.breakpoints.up('md')]: {
                fontSize: '16px',
              },
            }}
          >
            {props.buttonLabel}
          </Typography>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.172 11.4999H17.3791L16.5256 10.6464L11.5151 5.63592L12.222 4.92903L19.2929 11.9999L12.222 19.0708L11.5151 18.3639L16.5256 13.3535L17.3791 12.4999H16.172H4.5V11.4999H16.172Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </Link>
      </Box>
    </Box>
  );
};
const FourthImageBlock: React.FC<ImageBlock> = props => {
  const theme = useTheme();
  if (props.hide) return null;
  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
        height: '200px',
        borderRadius: '16px',
        [theme.breakpoints.up('md')]: {
          flex: 1,
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            borderRadius: '16px',
            background: 'rgba(87, 52, 46, 0.40)',
            mixBlendMode: 'multiply',
          }}
        />
        <Image src={props.bgImage.src} layout="fill" objectFit="cover" alt={props.bgImage.alt} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '24px',
          [theme.breakpoints.up('md')]: {
            padding: '16px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            [theme.breakpoints.up('md')]: {
              maxWidth: '90%',
            },
            '& h2': {
              fontWeight: 400,
              color: '#fff',
              margin: '0',
              lineHeight: '100%',
              fontSize: '32px',
              marginBottom: '16px',
              [theme.breakpoints.up('md')]: {
                fontSize: '32px',
                marginBottom: '24px',
              },
            },
          }}
        >
          <Typography variant="h2">{props.title}</Typography>
        </Box>
        <Link
          href={props.buttonLink}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '240px',
            textDecoration: 'none',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#fff',
              textDecoration: 'none',
              [theme.breakpoints.up('md')]: {
                fontSize: '16px',
              },
            }}
          >
            {props.buttonLabel}
          </Typography>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.172 11.4999H17.3791L16.5256 10.6464L11.5151 5.63592L12.222 4.92903L19.2929 11.9999L12.222 19.0708L11.5151 18.3639L16.5256 13.3535L17.3791 12.4999H16.172H4.5V11.4999H16.172Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </Link>
      </Box>
    </Box>
  );
};

export interface AldarPlusImageBlockProps {
  imageBlocks: {
    first: ImageBlock;
    second: ImageBlock;
    third: ImageBlock;
    fourth: ImageBlock;
  };
}
export const AldarPlusImageBlock: React.FC<AldarPlusImageBlockProps> = React.memo(
  function AldarPlusImageBlock(props: AldarPlusImageBlockProps) {
    const theme = useTheme();
    return (
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
          zIndex: 0,
          [theme.breakpoints.up('md')]: {
            gap: '24px',
            flexDirection: 'row',
          },
        }}
      >
        <FirstImageBlock {...props.imageBlocks.first} />
        <Box
          sx={{
            height: '400px',
            flex: 1,
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            [theme.breakpoints.up('md')]: {
              height: '584px',
              gap: '24px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              [theme.breakpoints.up('md')]: {
                gap: '24px',
              },
            }}
          >
            <SecondImageBlock {...props.imageBlocks.second} />
            <ThirdImageBlock {...props.imageBlocks.third} />
          </Box>
          <FourthImageBlock {...props.imageBlocks.fourth} />
        </Box>
      </Box>
    );
  }
);
