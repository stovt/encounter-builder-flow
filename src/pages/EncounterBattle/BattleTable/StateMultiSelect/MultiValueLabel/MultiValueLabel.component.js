// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import { StatefulToolTip } from 'react-portal-tooltip';
import { components } from 'react-select';
import type { MultiValueProps } from 'react-select/src/components/MultiValue';

type Props = {
  intl: IntlShape
} & MultiValueProps;

const MultiValueLabel = (props: Props) => {
  const { intl: { formatMessage }, data: { value } } = props;
  const descriptionItemsCount: number = Number(formatMessage({ id: `monster.states.${value}-description-texts-count` }));
  const arraySequence: number[] = Array.from(
    new Array(descriptionItemsCount), (val: number, index) => index + 1
  );

  const { intl: omitIntl, ...rest } = props;
  const component = <components.MultiValueLabel {...rest} />;

  return (
    <StatefulToolTip parent={component} position="bottom" arrow="center">
      <ul>
        {arraySequence.map(number => (
          <li key={number}>{formatMessage({ id: `monster.states.${value}-description-text-${number}` })}</li>
        ))}
      </ul>
    </StatefulToolTip>
  );
};

export default injectIntl(MultiValueLabel);
