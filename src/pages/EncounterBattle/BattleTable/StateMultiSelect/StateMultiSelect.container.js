// @flow
import { connect } from 'react-redux';
import type { Dispatch } from 'shared/types';
import type { MonsterState } from 'shared/types/monsters';
import { setMonsterState } from 'pages/EncounterBattle/EncounterBattle.actions';
import StateMultiSelect from './StateMultiSelect.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMonsterState: (rowID: string, state: MonsterState) => dispatch(setMonsterState(rowID, state))
});

export default connect(null, mapDispatchToProps)(StateMultiSelect);
