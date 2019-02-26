// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import { TYPES } from '../MonstersTable.constants';

type Props = {
  onChange: (value: any) => void,
  value: string,
  intl: IntlShape
}

class TypeFilter extends React.PureComponent<Props> {
  handleChange = ({ target: { value } }: SyntheticInputEvent<HTMLInputElement>): void => {
    this.props.onChange(value);
  }

  render() {
    const { value, intl: { formatMessage } } = this.props;

    const sortedTypes = TYPES.sort((type1, type2) => {
      const translatedType1 = formatMessage({ id: `monster.types.${type1}` });
      const translatedType2 = formatMessage({ id: `monster.types.${type2}` });
      if (translatedType1 < translatedType2) return -1;
      if (translatedType1 > translatedType2) return 1;
      return 0;
    });

    return (
      <select
        onChange={this.handleChange}
        value={value}
      >
        <option value="">{formatMessage({ id: 'table-labels.Any' })}</option>
        {sortedTypes.map(type => (
          <option value={type} key={type}>{formatMessage({ id: `monster.types.${type}` })}</option>
        ))}
      </select>
    );
  }
}

export default injectIntl(TypeFilter);
