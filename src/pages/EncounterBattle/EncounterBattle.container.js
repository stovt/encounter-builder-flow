// @flow
import { connect } from 'react-redux';
import type { State } from 'shared/types';
import { getMonsters } from './EncounterBattle.selectors';
import EncounterBattle from './EncounterBattle.component';

const mapStateToProps = (state: State) => ({
  monsters: getMonsters(state)
});


export default connect(mapStateToProps)(EncounterBattle);
