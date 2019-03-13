// @flow
import React from 'react';
import type { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import type { Monster } from 'shared/types/monsters';
import { IconWrapper, PlusIcon } from 'shared/components/Icons';
import { StyledButton } from 'shared/components/forms';

type Props = {
  monsterID: string,
  getMonsterById: (monsterID: string) => ?Monster,
  addMonsterToGroup: (monsterID: string, monster: ?Monster) => EncounterBuilderAction
}

class AddMonsterButton extends React.PureComponent<Props> {
  handleOnClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const { addMonsterToGroup, getMonsterById, monsterID } = this.props;
    addMonsterToGroup(monsterID, getMonsterById(monsterID));
  }

  render() {
    return (
      <StyledButton type="button" onClick={this.handleOnClick}>
        <IconWrapper><PlusIcon /></IconWrapper>
      </StyledButton>
    );
  }
}

export default AddMonsterButton;
