// @flow
import React from 'react';
import type { EncounterBuilderAction } from 'shared/types/encounterBuilder';
import { StyledSelect } from 'shared/components/forms';

type Props = {
  onChange: (value: number, id: string) => EncounterBuilderAction,
  value: number,
  maxValue: number,
  id: string
}

class Select extends React.PureComponent<Props> {
  handleOnChange = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>) => {
    const { onChange, id } = this.props;
    onChange(Number(value), id);
  }

  render() {
    const { value, maxValue } = this.props;
    const arraySequence: number[] = Array.from(
      new Array(maxValue), (val: number, index) => index + 1
    );
    return (
      <StyledSelect onChange={this.handleOnChange} value={value}>
        {arraySequence.map(val => <option key={val} value={val}>{val}</option>)}
      </StyledSelect>
    );
  }
}

export default Select;
