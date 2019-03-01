// @flow
import { connect } from 'react-redux';
import type { State, Dispatch } from 'shared/types';
import { getTurn } from '../EncounterBattle.selectors';
import { setMonsterHP } from '../EncounterBattle.actions';
import BattleTable from './BattleTable.component';

const mapStateToProps = (state: State) => ({
  turn: getTurn(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMonsterHP: (rowID: string, hp: number) => dispatch(setMonsterHP(rowID, hp))
});


export default connect(mapStateToProps, mapDispatchToProps)(BattleTable);
