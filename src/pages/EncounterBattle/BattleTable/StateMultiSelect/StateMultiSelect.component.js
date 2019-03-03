// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import Select from 'react-select';
import type { EncounterBattleAction, BattleMonster } from 'shared/types/encounterBattle';
import { SELECT_OPTIONS } from './StateMultiSelect.constants';
import { customStyles } from './StateMultiSelect.styled';

declare var document: any;

type Props = {
  value: BattleMonster,
  rowID: string,
  setMonsterState: (rowID: string, state: BattleMonster) => EncounterBattleAction,
  intl: IntlShape
}

class StateMultiSelect extends React.PureComponent<Props> {
  handleOnChange = (value: BattleMonster) => {
    const { setMonsterState, rowID } = this.props;
    setMonsterState(rowID, value);
  };

  render() {
    const { value, intl: { formatMessage } } = this.props;

    return (
      <Select
        defaultValue={[SELECT_OPTIONS[2], SELECT_OPTIONS[3]]}
        isMulti
        name="colors"
        options={SELECT_OPTIONS}
        // $FlowFixMe
        onChange={this.handleOnChange}
        value={value}
        styles={customStyles}
        menuPortalTarget={document.body}
        placeholder={`${formatMessage({ id: 'monster.state' })}...`}
      />
    );
  }
}

export default injectIntl(StateMultiSelect);
