// @flow
import React from 'react';
import type { EncounterBattleAction } from 'shared/types/encounterBattle';
import { StyledInput } from 'shared/components/forms';

type Value = string | number;

type Props = {
  value: Value,
  rowID: string,
  setMonsterHP: (rowID: string, hp: number) => EncounterBattleAction
};

type State = {
  value: Value
}

class HPInput extends React.PureComponent<Props, State> {
  state = {
    value: this.props.value
  };

  handleOnChange = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>): void => {
    if (/^[\s\d()+\-*/.]*$/.test(value)) {
      this.setState({ value });
    }
  }

  handleOnBlur = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>): void => {
    const { value: oldValue } = this.props;
    try {
      this.setMonsterHP(this.eval(value));
    } catch {
      this.setMonsterHP(oldValue);
    }
  }

  setMonsterHP = (hp: string | number): void => {
    const { setMonsterHP, rowID } = this.props;
    setMonsterHP(rowID, Number(hp));
  }

  // eslint-disable-next-line no-new-func
  eval = (value: Value): number => Number(new Function(`return ${value}`)())

  render() {
    return (
      <StyledInput
        onChange={this.handleOnChange}
        onBlur={this.handleOnBlur}
        value={this.state.value}
      />
    );
  }
}

export default HPInput;
