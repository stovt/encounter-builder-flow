// @flow
import React from 'react';
import { injectIntl } from 'react-intl';
import type { IntlShape } from 'react-intl';
import Select from 'react-select';
import type { EncounterBattleAction } from 'shared/types/encounterBattle';
import type { MonsterState } from 'shared/types/monsters';
import { MONSTER_STATES } from './StateMultiSelect.constants';
import { customStyles } from './StateMultiSelect.styled';
import MultiValueLabel from './MultiValueLabel';

declare var document: any;

type Props = {
  value: MonsterState,
  rowID: string,
  setMonsterState: (rowID: string, state: MonsterState) => EncounterBattleAction,
  intl: IntlShape
}

class StateMultiSelect extends React.PureComponent<Props> {
  handleOnChange = (value: MonsterState) => {
    const { setMonsterState, rowID } = this.props;
    setMonsterState(rowID, value);
  };

  render() {
    const { value, intl: { formatMessage } } = this.props;

    const options = MONSTER_STATES.map(state => ({
      label: formatMessage({ id: `monster.states.${state}` }),
      value: state
    }));

    return (
      <Select
        isMulti
        name="colors"
        options={options}
        components={{ MultiValueLabel }}
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
