import Image from 'next/image';
import React from 'react';

import {
  ImageBlockWrapper,
  FirstBlock,
  ColumWrapper,
  RowWrapper,
  SecondBlock,
  ThirdBlock,
  FourthBlock,
  BlockImage,
  BlockContent,
  ColumnBlockContent,
  FirstBlockLabel,
  SecondBlockLabel,
  ThirdBlockLabel,
  FourthBlockLabel,
  BlockLink,
  BlockLinkLabel,
  FirstBlockImageOverlay,
  SecondBlockImageOverlay,
  ThirdBlockImageOverlay,
  FourthBlockImageOverlay,
} from './styledComponents';
import { ImageObj } from '@/types/ImageObj.types';

export type ImageBlock = {
  title: string;
  bgImage: ImageObj;
  buttonLabel: string;
  buttonLink: string;
  hide?: boolean;
};

const FirstImageBlock: React.FC<ImageBlock> = (props) => {
  if (props.hide) return null;
  return (
    <FirstBlock>
      <BlockImage>
        <FirstBlockImageOverlay />
        <Image
          src={props.bgImage.url}
          layout="fill"
          objectFit="cover"
          alt={props.bgImage.alt}
        />
      </BlockImage>
      <BlockContent>
        <FirstBlockLabel>
          <h2>{props.title}</h2>
        </FirstBlockLabel>
        <BlockLink href={props.buttonLink}>
          <BlockLinkLabel>{props.buttonLabel}</BlockLinkLabel>

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
        </BlockLink>
      </BlockContent>
    </FirstBlock>
  );
};

const SecondImageBlock: React.FC<ImageBlock> = (props) => {
  if (props.hide) return null;
  return (
    <SecondBlock>
      <BlockImage>
        <SecondBlockImageOverlay />
        <Image
          src={props.bgImage.url}
          layout="fill"
          objectFit="cover"
          alt={props.bgImage.alt}
        />
      </BlockImage>
      <ColumnBlockContent>
        <SecondBlockLabel>
          <h2>{props.title}</h2>
        </SecondBlockLabel>
        <BlockLink href={props.buttonLink}>
          <BlockLinkLabel>{props.buttonLabel}</BlockLinkLabel>

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
        </BlockLink>
      </ColumnBlockContent>
    </SecondBlock>
  );
};
const ThirdImageBlock: React.FC<ImageBlock> = (props) => {
  if (props.hide) return null;
  return (
    <ThirdBlock>
      <BlockImage>
        <ThirdBlockImageOverlay />
        <Image
          src={props.bgImage.url}
          layout="fill"
          objectFit="cover"
          alt={props.bgImage.alt}
        />
      </BlockImage>
      <ColumnBlockContent>
        <ThirdBlockLabel>
          <h2>{props.title}</h2>
        </ThirdBlockLabel>
        <BlockLink href={props.buttonLink}>
          <BlockLinkLabel>{props.buttonLabel}</BlockLinkLabel>

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
        </BlockLink>
      </ColumnBlockContent>
    </ThirdBlock>
  );
};
const FourthImageBlock: React.FC<ImageBlock> = (props) => {
  if (props.hide) return null;
  return (
    <FourthBlock>
      <BlockImage>
        <FourthBlockImageOverlay />
        <Image
          src={props.bgImage.url}
          layout="fill"
          objectFit="cover"
          alt={props.bgImage.alt}
        />
      </BlockImage>
      <ColumnBlockContent>
        <FourthBlockLabel>
          <h2>{props.title}</h2>
        </FourthBlockLabel>
        <BlockLink href={props.buttonLink}>
          <BlockLinkLabel>{props.buttonLabel}</BlockLinkLabel>

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
        </BlockLink>
      </ColumnBlockContent>
    </FourthBlock>
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
export const AldarPlusImageBlock: React.FC<AldarPlusImageBlockProps> =
  React.memo(function AldarPlusImageBlock(props: AldarPlusImageBlockProps) {
    return (
      <ImageBlockWrapper>
        <FirstImageBlock {...props.imageBlocks.first} />
        <ColumWrapper>
          <RowWrapper>
            <SecondImageBlock {...props.imageBlocks.second} />
            <ThirdImageBlock {...props.imageBlocks.third} />
          </RowWrapper>
          <FourthImageBlock {...props.imageBlocks.fourth} />
        </ColumWrapper>
      </ImageBlockWrapper>
    );
  });
