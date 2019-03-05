// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { LocaleState, LocaleAction } from './locale';
import type { BreakpointsState, BreakpointsAction } from './breakpoints';
import type { ModalsState, ModalsAction } from './modals';
import type { EncounterBuilderState, EncounterBuilderAction } from './encounterBuilder';
import type { EncounterBattleState, EncounterBattleAction } from './encounterBattle';

export type ErrorType = string;

export type ReduxInitAction = { type: '@@INIT' };
export type State =
  LocaleState
  & BreakpointsState
  & ModalsState
  & EncounterBuilderState
  & EncounterBattleState;
export type Action =
  | ReduxInitAction
  | LocaleAction
  | BreakpointsAction
  | ModalsAction
  | EncounterBuilderAction
  | EncounterBattleAction;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
