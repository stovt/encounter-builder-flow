// @flow
import { compose } from 'redux';
import { connect } from 'react-redux';
import type { State, Dispatch } from 'shared/types';
import withBreakpoints from 'shared/HOC/withBreakpoints';
import withSaga from 'shared/HOC/withSaga';
import sagas from './EncounterBuilder.sagas';
import { fetchAllMonsters } from './EncounterBuilder.actions';
import {
  getMonsters, isLoading, getError, getGroups, getPartyLevels
} from './EncounterBuilder.selectors';
import EncounterBuilder from './EncounterBuilder.component';

const mapStateToProps = (state: State) => ({
  monsters: getMonsters(state),
  loading: isLoading(state),
  error: getError(state),
  groups: getGroups(state),
  partyLevels: getPartyLevels(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAllMonsters: () => dispatch(fetchAllMonsters())
});

export default compose(
  withBreakpoints,
  withSaga(sagas),
  connect(mapStateToProps, mapDispatchToProps)
)(EncounterBuilder);
