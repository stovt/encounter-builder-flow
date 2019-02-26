// @flow
import React from 'react';
import { IconWrapper, PlusIcon } from 'shared/components/Icons';
import { StyledButton } from 'shared/components/forms';

class AddMonsterButton extends React.PureComponent<{ monsterId: string }> {
  handleOnClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    alert(`clicked on add btn: ${this.props.monsterId}`);
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
