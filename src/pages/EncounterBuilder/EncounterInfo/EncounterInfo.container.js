// @flow
import { connect } from 'react-redux';
import type { State, Dispatch } from 'shared/types';
import { addMonsterToGroup, setMonsterQTY } from '../EncounterBuilder.actions';
import { getGroups } from '../EncounterBuilder.selectors';
import EncounterInfo from './EncounterInfo.component';

const mapStateToProps = (state: State) => ({
  groups: getGroups(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMonsterToGroup: (monsterID: string) => dispatch(addMonsterToGroup(monsterID)),
  setMonsterQTY: (monsterID: string, qty: number) => dispatch(setMonsterQTY(monsterID, qty))
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterInfo);
