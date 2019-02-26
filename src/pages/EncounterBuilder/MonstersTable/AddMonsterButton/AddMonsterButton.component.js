// @flow
import React from 'react';
import type { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import { IconWrapper, PlusIcon } from 'shared/components/Icons';
import { StyledButton } from 'shared/components/forms';

type Props = {
  monsterID: string,
  addMonsterToGroup: (monsterID: string) => EncounterBuilderAction,
}

class AddMonsterButton extends React.PureComponent<Props> {
  handleOnClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const { addMonsterToGroup, monsterID } = this.props;
    addMonsterToGroup(monsterID);
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
