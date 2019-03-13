// @flow
import { connect } from 'react-redux';
import type { State, Dispatch } from 'shared/types';
import type { Monster } from 'shared/types/monsters';
import { addMonsterToGroup } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { getMonsterByID } from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import AddMonsterButton from './AddMonsterButton.component';

const mapStateToProps = (state: State) => ({
  getMonsterById: (monsterID: string) => getMonsterByID(state, monsterID)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMonsterToGroup: (
    monsterID: string, monster: ?Monster
  ) => dispatch(addMonsterToGroup(monsterID, monster))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMonsterButton);
