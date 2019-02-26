// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import { SIZES } from '../MonstersTable.constants';

type Props = {
  onChange: (value: any) => void,
  value: string,
  intl: IntlShape
}

class SizeFilter extends React.PureComponent<Props> {
  handleChange = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>): void => {
    this.props.onChange(value);
  }

  render() {
    const { value, intl: { formatMessage } } = this.props;

    return (
      <select
        onChange={this.handleChange}
        value={value}
      >
        <option value="">{formatMessage({ id: 'table-labels.Any' })}</option>
        {SIZES.map(size => (
          <option value={size} key={size}>{formatMessage({ id: `monster.sizes.${size}` })}</option>
        ))}
      </select>
    );
  }
}

export default injectIntl(SizeFilter);
