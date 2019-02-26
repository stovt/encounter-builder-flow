// @flow
import React from 'react';
import type { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import { IconWrapper, RemoveIcon } from 'shared/components/Icons';
import StyledRemovePartyLevelButton from './RemovePartyLevelButton.styled';

type Props = {
  removePartyLevel: (id: string) => EncounterBuilderAction,
  id: string
}

class RemovePartyLevelButton extends React.PureComponent<Props> {
  handleOnClick = (): void => {
    const { removePartyLevel, id } = this.props;
    removePartyLevel(id);
  }

  render() {
    return (
      <StyledRemovePartyLevelButton type="button" onClick={this.handleOnClick}>
        <IconWrapper><RemoveIcon /></IconWrapper>
      </StyledRemovePartyLevelButton>
    );
  }
}

export default RemovePartyLevelButton;
