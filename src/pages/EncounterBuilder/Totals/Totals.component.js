// @flow
import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import type { IntlShape } from 'react-intl';
import type { Groups, PartyLevels } from 'shared/types/encounterBuilder';
import {
  getTotalExp, getAdjustedExp, getDifficulty, getTotalPlayerCount
} from 'pages/EncounterBuilder/EncounterBuilder.helpers';
import StyledTitle from './Title';
import StyledSubTitle from './SubTitle';
import StyledTotals from './Totals.styled';

type Props = {
  groups: Groups,
  partyLevels: PartyLevels,
  intl: IntlShape
}

const Totals = ({ groups, partyLevels, intl }: Props) => {
  const totalPlayerCount = getTotalPlayerCount(partyLevels);
  const totalExp = getTotalExp(groups);
  const totalExpPerPlayer = Math.round(totalExp / totalPlayerCount);
  const adjustedExp = getAdjustedExp(groups, partyLevels);
  const adjustedExpPerPlayer = Math.round(adjustedExp / totalPlayerCount);
  const difficulty = getDifficulty(groups, partyLevels) ? intl.formatMessage({ id: `group-info.party-levels.${getDifficulty(groups, partyLevels)}` }) : '';

  return (
    <StyledTotals>
      <StyledTitle>
        <FormattedMessage id="encounter-info.difficulty" values={{ difficulty }} />
      </StyledTitle>
      <div>
        <StyledTitle className="text-right">
          <FormattedMessage id="encounter-info.total-xp" values={{ exp: totalExp }} />
        </StyledTitle>
        <StyledSubTitle className="text-right">
          <FormattedMessage id="encounter-info.exp-per-player" values={{ exp: totalExpPerPlayer }} />
        </StyledSubTitle>
        <StyledTitle className="text-right">
          <FormattedMessage id="encounter-info.adjusted-xp" values={{ exp: adjustedExp }} />
        </StyledTitle>
        <StyledSubTitle className="text-right">
          <FormattedMessage id="encounter-info.exp-per-player" values={{ exp: adjustedExpPerPlayer }} />
        </StyledSubTitle>
      </div>
    </StyledTotals>
  );
};

export default injectIntl(Totals);
