// @flow
import React from 'react';
import type { EncounterBuilderAction, Group, Monster } from 'shared/types/encounterBuilder';
import StyledMonsterName from './MonsterName';
import StyledMonsterDescription from './MonsterDescription';
import StyledGroupInfo from './GroupInfo.styled';
import Input from './Input';

type Props = {
  group: Group,
  setMonsterQTY: (monster: Monster, qty: number) => EncounterBuilderAction
}

const GroupInfo = ({ group: { monster, qty }, setMonsterQTY }: Props) => (
  <StyledGroupInfo>
    <div>
      <StyledMonsterName>{monster.displayName}</StyledMonsterName>
      <StyledMonsterDescription cr={monster.data.cr} xp={monster.data.exp} />
    </div>
    <div>
      <Input
        monster={monster}
        setMonsterQTY={setMonsterQTY}
        qty={qty}
      />
    </div>
  </StyledGroupInfo>
);

export default GroupInfo;
