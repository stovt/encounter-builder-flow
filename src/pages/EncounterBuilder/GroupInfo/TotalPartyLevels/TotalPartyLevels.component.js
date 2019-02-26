// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import type { PartyLevels } from 'shared/types/encounterBuilder';
import { numberWithCommas } from 'shared/helpers';
import { getTotalPartyExpLevels } from '../GroupInfo.helpers';
import { PARTY_LEVEL_TYPES } from './TotalPartyLevels.constants';
import StyledTotalPartyLevelItem from './TotalPartyLevelItem';
import StyledTotalPartyLevels from './TotalPartyLevels.styled';

const TotalPartyLevels = ({ partyLevels }: { partyLevels: PartyLevels }) => {
  const totalPartyExpLevels = getTotalPartyExpLevels(partyLevels);
  return (
    <StyledTotalPartyLevels>
      {PARTY_LEVEL_TYPES.map(type => (
        <StyledTotalPartyLevelItem key={type}>
          <FormattedMessage
            id={`group-info.party-levels.${type}`}
            values={{ exp: numberWithCommas(totalPartyExpLevels[type]) }}
          />
        </StyledTotalPartyLevelItem>
      ))}
    </StyledTotalPartyLevels>
  );
};

export default TotalPartyLevels;
