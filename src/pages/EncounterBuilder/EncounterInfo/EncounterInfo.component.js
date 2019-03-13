// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import type { EncounterBuilderAction, Groups } from 'shared/types/encounterBuilder';
import type { Monster } from 'shared/types/monsters';
import StyledTitle from 'shared/components/Title';
import GroupInfo from './GroupInfo';

type Props = {
  groups: Groups,
  setMonsterQTY: (monster: Monster, qty: number) => EncounterBuilderAction
}

const EncounterInfo = ({ groups, setMonsterQTY }: Props) => (
  <div>
    <StyledTitle><FormattedMessage id="encounter-info.title" /></StyledTitle>
    {!groups.length ? <div><FormattedMessage id="encounter-info.empty-groups-message" /></div>
      : groups.map(group => (
        <GroupInfo
          key={group.monster.id}
          group={group}
          setMonsterQTY={setMonsterQTY}
        />
      ))
    }
  </div>
);

export default EncounterInfo;
