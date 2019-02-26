// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { numberWithCommas } from 'shared/helpers';
import StyledMonsterDescription from './MonsterDescription.styled';

type Props = {
  cr: string,
  xp: string
}

const MonsterDescription = ({ cr, xp }: Props) => (
  <StyledMonsterDescription>
    <div><FormattedMessage id="encounter-info.cr" values={{ cr }} /></div>
    <div><FormattedMessage id="encounter-info.xp" values={{ xp: numberWithCommas(Number(xp)) }} /></div>
  </StyledMonsterDescription>
);

export default MonsterDescription;
