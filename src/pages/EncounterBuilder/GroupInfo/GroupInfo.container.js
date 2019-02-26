// @flow
import { connect } from 'react-redux';
import type { State, Dispatch } from 'shared/types';
import {
  addPartyLevel, removePartyLevel, setPartyLevel, setPartyPlayerCount
} from '../EncounterBuilder.actions';
import { getPartyLevels } from '../EncounterBuilder.selectors';
import GroupInfo from './GroupInfo.component';

const mapStateToProps = (state: State) => ({
  partyLevels: getPartyLevels(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addPartyLevel: () => dispatch(addPartyLevel()),
  removePartyLevel: (id: string) => dispatch(removePartyLevel(id)),
  setPartyLevel: (value: number, id: string) => dispatch(setPartyLevel(value, id)),
  setPartyPlayerCount: (value: number, id: string) => dispatch(setPartyPlayerCount(value, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupInfo);
