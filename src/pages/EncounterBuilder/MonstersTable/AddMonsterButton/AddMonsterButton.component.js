// @flow
import React from 'react';
import type { EncounterBuilderAction, Monster } from 'shared/types/encounterBuilder';
import { IconWrapper, PlusIcon } from 'shared/components/Icons';
import { StyledButton } from 'shared/components/forms';

type Props = {
  monster: ?Monster,
  addMonsterToGroup: (monster: Monster) => EncounterBuilderAction
}

class AddMonsterButton extends React.PureComponent<Props> {
  handleOnClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const { addMonsterToGroup, monster } = this.props;
    if (monster) addMonsterToGroup(monster);
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
