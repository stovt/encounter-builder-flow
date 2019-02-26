// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import { CR_VALUES_STR, CR_VALUES_NUMB } from '../MonstersTable.constants';

type Props = {
  onChange: (value: any) => void,
  intl: IntlShape
}
type State = {
  minCR: string,
  maxCR: string
}

class CRFilter extends React.PureComponent<Props, State> {
  state = {
    minCR: '',
    maxCR: ''
  }

  handleChangeMin = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>): void => {
    this.setState({ minCR: value });
    this.props.onChange({
      minCR: value,
      maxCR: this.state.maxCR
    });
  }

  handleChangeMax = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>): void => {
    this.setState({ maxCR: value });
    this.props.onChange({
      minCR: this.state.minCR,
      maxCR: value
    });
  }

  render() {
    const { intl: { formatMessage } } = this.props;

    return (
      <div>
        <select
          onChange={this.handleChangeMin}
          value={this.state.minCR}
          style={{ width: '50%' }}
        >
          <option value="">{formatMessage({ id: 'table-labels.min' })}</option>
          {CR_VALUES_NUMB.map((cr, index) => (
            <option value={cr} key={cr}>{CR_VALUES_STR[index]}</option>
          ))}
        </select>
        <select
          onChange={this.handleChangeMax}
          value={this.state.maxCR}
          style={{ width: '50%' }}
        >
          <option value="">{formatMessage({ id: 'table-labels.max' })}</option>
          {CR_VALUES_NUMB.map((cr, index) => (
            <option value={cr} key={cr}>{CR_VALUES_STR[index]}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default injectIntl(CRFilter);
