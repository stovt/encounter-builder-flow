// @flow
import { connect } from 'react-redux';
import type { State } from 'shared/types';
import { isMonsterLoading } from 'pages/EncounterBuilder/EncounterBuilder.selectors';
import BattleButton from './BattleButton.component';

const mapStateToProps = (state: State) => ({
  monsterLoading: isMonsterLoading(state)
});

export default connect(mapStateToProps)(BattleButton);
