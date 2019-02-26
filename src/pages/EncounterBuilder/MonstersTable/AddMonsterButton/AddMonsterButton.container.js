// @flow
import { connect } from 'react-redux';
import type { Dispatch } from 'shared/types';
import { addMonsterToGroup } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import AddMonsterButton from './AddMonsterButton.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addMonsterToGroup: (monsterID: string) => dispatch(addMonsterToGroup(monsterID))
});

export default connect(null, mapDispatchToProps)(AddMonsterButton);
