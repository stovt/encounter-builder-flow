// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import type { EncounterBuilderAction, PartyLevels, Groups } from 'shared/types/encounterBuilder';
import StyledTitle from 'shared/components/Title';
import Party from './Party';
import TotalPartyLevels from './TotalPartyLevels';
import StyledGroupInfo from './GroupInfo.styled';

type Props = {
  partyLevels: PartyLevels,
  groups: Groups,
  addPartyLevel: () => EncounterBuilderAction,
  removePartyLevel: (id: string) => EncounterBuilderAction,
  setPartyLevel: (value: number, id: string) => EncounterBuilderAction,
  setPartyPlayerCount: (value: number, id: string) => EncounterBuilderAction
}

class GroupInfo extends React.PureComponent<Props> {
  render() {
    const {
      partyLevels, groups, addPartyLevel,
      removePartyLevel, setPartyLevel, setPartyPlayerCount
    } = this.props;

    return (
      <StyledGroupInfo>
        <div>
          <StyledTitle><FormattedMessage id="group-info.title" /></StyledTitle>
          <Party
            partyLevels={partyLevels}
            addPartyLevel={addPartyLevel}
            removePartyLevel={removePartyLevel}
            setPartyLevel={setPartyLevel}
            setPartyPlayerCount={setPartyPlayerCount}
          />
        </div>
        <TotalPartyLevels partyLevels={partyLevels} groups={groups} />
      </StyledGroupInfo>
    );
  }
}

export default GroupInfo;
