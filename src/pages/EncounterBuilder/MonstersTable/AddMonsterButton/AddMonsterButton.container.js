// @flow
import { connect } from 'react-redux';
import type { State, Dispatch } from 'shared/types';
import type { Monster } from 'shared/types/encounterBuilder';
import { addMonsterToGroup } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { getMonsterByID } from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import AddMonsterButton from './AddMonsterButton.component';

const mapStateToProps = (state: State, ownProps: { monsterID: string }) => ({
  monster: getMonsterByID(state, ownProps.monsterID)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMonsterToGroup: (monster: Monster) => dispatch(addMonsterToGroup(monster))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMonsterButton);
