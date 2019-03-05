// @flow
import { connect } from 'react-redux';
import type { Dispatch, State } from 'shared/types';
import type { Monster } from 'shared/types/encounterBuilder';
import { getMonsterByID } from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import { showModal } from 'shared/components/Modal/Modal.actions';
import MonstersTable from './MonstersTable.component';

const mapStateToProps = (state: State) => ({
  getMonsterByID: (monsterID: string) => getMonsterByID(state, monsterID)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showModal: (modalId: string, data: { monster: Monster }) => dispatch(showModal(modalId, data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MonstersTable);
