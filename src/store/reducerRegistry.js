// @flow
import type { Reducer } from 'redux';

export type NameReducerMap<S, A> = { [name: string]: Reducer<S, A> };

export class ReducerRegistry {
  _reducers: NameReducerMap<*, *>

  _emitChange: ?(reducers: NameReducerMap<*, *>) => void

  constructor() {
    this._emitChange = null;
    this._reducers = {};
  }

  getReducers(): NameReducerMap<*, *> {
    return { ...this._reducers };
  }

  register(name: string, reducer: Reducer<*, *>): void {
    this._reducers = { ...this._reducers, [name]: reducer };
    const { _emitChange } = this;
    if (_emitChange) {
      _emitChange(this.getReducers());
    }
  }

  setChangeListener(listener: (reducers: NameReducerMap<*, *>) => void): void {
    this._emitChange = listener;
  }
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
