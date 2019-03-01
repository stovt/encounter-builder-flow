// @flow
import React from 'react';
import type { EncounterBuilderAction, Monster } from 'shared/types/encounterBuilder';
import { MinusIcon, PlusIcon } from 'shared/components/Icons';
import StyledWrapper from './Wrapper';
import StyledButton from './Button';
import StyledInput from './Input.styled';

type Props = {
  monster: Monster,
  qty: number,
  setMonsterQTY: (monster: Monster, qty: number) => EncounterBuilderAction
}

class Input extends React.PureComponent<Props> {
  handleOnClickMinus = () => {
    const { setMonsterQTY, monster, qty } = this.props;
    setMonsterQTY(monster, qty - 1);
  }

  handleOnClickPlus = () => {
    const { setMonsterQTY, monster, qty } = this.props;
    setMonsterQTY(monster, qty + 1);
  }

  render() {
    const { qty: value } = this.props;

    return (
      <StyledWrapper>
        <StyledButton left onClick={this.handleOnClickMinus}><MinusIcon size={12} /></StyledButton>
        <StyledInput type="text" value={value} readOnly />
        <StyledButton right onClick={this.handleOnClickPlus}><PlusIcon size={12} /></StyledButton>
      </StyledWrapper>
    );
  }
}

export default Input;
