import Image from 'next/image';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { ImgObject } from '@/types/ImgObject';

export interface FeaturedCommunitySlideProps {
  bgImg: ImgObject;
  logoImg: ImgObject;
  name: string;
  caption: React.ReactNode;
  link: string;
}
export const FeaturedCommunitySlide: React.FC<FeaturedCommunitySlideProps> = React.memo(
  function FeaturedCommunitySlide(props: FeaturedCommunitySlideProps) {
    const theme = useTheme();
    return (
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          height: '460px',
          borderRadius: '16px',
          marginRight: '16px',
          [theme.breakpoints.up('sm')]: {
            height: '580px',
            marginRight: '24px',
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
          <Image src={props.bgImg.src} layout="fill" objectFit="cover" alt={props.bgImg.alt} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            background:
              'linear-gradient(0deg, rgba(68, 46, 2, 0.60) 0%, rgba(68, 46, 2, 0.00) 100%)',
            backgroundBlendMode: 'multiply',
            inset: 0,
            zIndex: 9,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '24px',
            [theme.breakpoints.up('sm')]: {
              padding: '40px',
            },
          }}
        >
          <Box
            sx={{
              marginBottom: '12px',
              [theme.breakpoints.up('sm')]: {
                marginBottom: '24px',
              },
            }}
          >
            <Box position="relative" height={92}>
              <Image src={props.logoImg.src} fill objectFit="contain" alt={props.logoImg.alt} />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              [theme.breakpoints.up('sm')]: {
                maxWidth: '90%',
              },
              '& h2': {
                fontWeight: 400,
                color: '#fff',
                fontSize: '40px',
                margin: '0',
                marginBottom: '32px',
                lineHeight: '120%',
                [theme.breakpoints.up('sm')]: {
                  fontSize: '72px',
                  marginBottom: '40px',
                  lineHeight: '100%',
                },
              },
            }}
          >
            <Typography variant="h2">{props.caption}</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {props.link.length ? (
              <Link
                href={props.link}
                target="_blank"
                style={{
                  borderRadius: '24px',
                  border: '1px solid #FFF',
                  padding: '16px 24px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '16px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: '#fff',
                }}
              >
                {`Explore ${props.name}`}
              </Link>
            ) : (
              <Button
                sx={{
                  height: '48px',
                  borderRadius: '24px',
                  border: '1px solid #FFF',
                  padding: '16px 24px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '16px',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}
              >
                Coming Soon
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    );
  }
);
