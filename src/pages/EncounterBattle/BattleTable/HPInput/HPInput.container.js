// @flow
import { connect } from 'react-redux';
import type { Dispatch } from 'shared/types';
import { setMonsterHP } from 'pages/EncounterBattle/EncounterBattle.actions';
import HPInput from './HPInput.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setMonsterHP: (rowID: string, hp: number) => dispatch(setMonsterHP(rowID, hp))
});


export default connect(null, mapDispatchToProps)(HPInput);
