import React from 'react';

import {
  Wrapper,
  Title,
  UnitListWrapper,
  UnitWrapper,
  MoreUnitsLink,
  MoreUnitsLinkLabel,
} from './styledComponents';
import { UnitCard, UnitCardProps } from '@/components/molecule/UnitCard';

export interface FeaturedUnitsProps {
  title: string;
  moreUnitsLink: string;
  moreUnitsLinkLabel: string;
  units: Array<UnitCardProps & { id: string }>;
}
export const FeaturedUnits: React.FC<FeaturedUnitsProps> = React.memo(function FeaturedUnits(
  props: FeaturedUnitsProps
) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <UnitListWrapper container spacing={2} justifyContent={'space-between'}>
        {props.units.slice(0, 4).map(({ id, ...unitData }) => (
          <UnitWrapper size={{ xs: 12, sm: 6, md: 4 }} key={id}>
            <UnitCard {...unitData} />
          </UnitWrapper>
        ))}
      </UnitListWrapper>
      <MoreUnitsLink href={props.moreUnitsLink}>
        <MoreUnitsLinkLabel>{props.moreUnitsLinkLabel}</MoreUnitsLinkLabel>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.172 11.5H17.3791L16.5256 10.6464L11.5151 5.636L12.222 4.92911L19.2929 12L12.222 19.0709L11.5151 18.364L16.5256 13.3536L17.3791 12.5H16.172H4.5V11.5H16.172Z"
            fill="#A39E97"
            stroke="#A39E97"
          />
        </svg>
      </MoreUnitsLink>
    </Wrapper>
  );
});
