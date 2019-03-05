// @flow
import { connect } from 'react-redux';
import type { State, Dispatch } from 'shared/types';
import type { Monster } from 'shared/types/encounterBuilder';
import { getMonsterByID } from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import { showModal } from 'shared/components/Modal/Modal.actions';
import { getTurn } from '../EncounterBattle.selectors';
import { setMonsterHP } from '../EncounterBattle.actions';
import BattleTable from './BattleTable.component';

const mapStateToProps = (state: State) => ({
  turn: getTurn(state),
  getMonsterByID: (monsterID: string) => getMonsterByID(state, monsterID)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMonsterHP: (rowID: string, hp: number) => dispatch(setMonsterHP(rowID, hp)),
  showModal: (modalId: string, data: { monster: Monster }) => dispatch(showModal(modalId, data))
});


export default connect(mapStateToProps, mapDispatchToProps)(BattleTable);
