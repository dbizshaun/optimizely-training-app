import React from 'react';

import {
  Wrapper,
  AldarPlusWrapper,
  AldarPlusInnerWrapper,
  ContentWrapper,
  Title,
  AldarPlusLabel,
  Description,
} from './styledComponents';
import { WorldOfAldarCard, WorldOfAldarCardProps } from '../../molecule/WorldOfAldarCard';
import {
  AldarPlusImageBlock,
  AldarPlusImageBlockProps,
} from '@/components/molecule/AldarPlusImageBlock';
import ReactHtmlParser from 'react-html-parser';

export interface AldarPlusBlockProps {
  worldOfAldarCardProps: WorldOfAldarCardProps;
  imageBlockProps: AldarPlusImageBlockProps;
  title: string;
  description: string;
}
export const AldarPlusBlock: React.FC<AldarPlusBlockProps> = React.memo(
  function AldarPlusBlock(props: AldarPlusBlockProps) {
    return (
      <Wrapper>
        <WorldOfAldarCard {...props.worldOfAldarCardProps} />
        <AldarPlusWrapper>
          <AldarPlusInnerWrapper>
            <ContentWrapper>
              <Title>{ReactHtmlParser(props.title)}</Title>
              <Description>{ReactHtmlParser(props.description)}</Description>
            </ContentWrapper>
            <AldarPlusImageBlock {...props.imageBlockProps} />
          </AldarPlusInnerWrapper>
        </AldarPlusWrapper>
      </Wrapper>
    );
  }
);
