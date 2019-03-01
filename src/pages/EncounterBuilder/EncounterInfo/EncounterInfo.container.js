// @flow
import { connect } from 'react-redux';
import type { State, Dispatch } from 'shared/types';
import type { Monster } from 'shared/types/encounterBuilder';
import { addMonsterToGroup, setMonsterQTY } from '../EncounterBuilder.actions';
import { getGroups } from '../EncounterBuilder.selectors';
import EncounterInfo from './EncounterInfo.component';

const mapStateToProps = (state: State) => ({
  groups: getGroups(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMonsterToGroup: (monster: Monster) => dispatch(addMonsterToGroup(monster)),
  setMonsterQTY: (monster: Monster, qty: number) => dispatch(setMonsterQTY(monster, qty))
});

export default connect(mapStateToProps, mapDispatchToProps)(EncounterInfo);
