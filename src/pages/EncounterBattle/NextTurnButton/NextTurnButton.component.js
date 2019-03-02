// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import type { EncounterBattleAction } from 'shared/types/encounterBattle';
import StyledNextTurnButton from './NextTurnButton.styled';

type Props = {
  nextTurn: () => EncounterBattleAction
}

const NextTurnButton = ({ nextTurn }: Props) => (
  <StyledNextTurnButton onClick={nextTurn}>
    <FormattedMessage id="encounter-battle.next-turn" />
  </StyledNextTurnButton>
);

export default NextTurnButton;
