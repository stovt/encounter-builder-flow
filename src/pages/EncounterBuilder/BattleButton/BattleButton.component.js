// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledWrapper from './Wrapper';
import StyledBattleButton from './BattleButton.styled';

const BattleButton = () => (
  <StyledWrapper>
    <StyledBattleButton to="/encounter-battle">
      <FormattedMessage id="encounter-info.battle-btn" />
    </StyledBattleButton>
  </StyledWrapper>
);

export default BattleButton;
