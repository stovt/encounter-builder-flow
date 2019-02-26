// @flow
import { call, put, takeEvery } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import type { Monsters } from 'shared/types/encounterBuilder';
import {
  FETCH_ALL_MONSTERS, fetchAllMonstersSuccess, fetchAllMonstersError
} from './EncounterBuilder.actions';

const fetchAllMonsters = () => fetch('./data/monsters/monsters.json').then(res => res.json());

export function* getMonsters(): Saga<void> {
  try {
    const monsters: Monsters = yield call(fetchAllMonsters);
    yield put(fetchAllMonstersSuccess(monsters));
  } catch (error) {
    yield put(fetchAllMonstersError(error.message || error.response.statusText));
  }
}

export default function* (): Saga<void> {
  yield takeEvery(FETCH_ALL_MONSTERS, getMonsters);
}
