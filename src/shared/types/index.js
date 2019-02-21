// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { LocaleState, LocaleAction } from './locale';

export type ErrorType = string;

export type ReduxInitAction = { type: '@@INIT' };
export type State = LocaleState; // & SomeState
export type Action =
  | ReduxInitAction
  | LocaleAction;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
