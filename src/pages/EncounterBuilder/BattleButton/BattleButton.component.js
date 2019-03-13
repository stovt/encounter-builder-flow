// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import LoadingComponent from 'shared/components/LoadingComponent';
import StyledWrapper from './Wrapper';
import StyledBattleButton from './BattleButton.styled';

type Props = {
  monsterLoading: boolean
}

const BattleButton = ({ monsterLoading }: Props) => {
  if (monsterLoading) return <LoadingComponent />;
  return (
    <StyledWrapper disabled>
      <StyledBattleButton to="/encounter-battle">
        <FormattedMessage id="encounter-info.battle-btn" />
      </StyledBattleButton>
    </StyledWrapper>
  );
};

export default BattleButton;
