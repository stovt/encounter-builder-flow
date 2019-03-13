// @flow
import React from 'react';
import type { EncounterBuilderAction, Group } from 'shared/types/encounterBuilder';
import type { Monster } from 'shared/types/monsters';
import { CR_INFO } from 'shared/constants';
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
      <StyledMonsterName>{monster.name}</StyledMonsterName>
      <StyledMonsterDescription
        cr={monster.challenge_rating}
        xp={CR_INFO[monster.challenge_rating].exp}
      />
    </div>
    <div>
      <Input
        monsterID={monster.id}
        setMonsterQTY={setMonsterQTY}
        qty={qty}
      />
    </div>
  </StyledGroupInfo>
);

export default GroupInfo;
