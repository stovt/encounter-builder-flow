// @flow
import { call, put, takeEvery } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import type { MonstersRequestBase, MonsterRequest, Monster } from 'shared/types/monsters';
import { addMonsterToBattleTable } from 'pages/EncounterBattle/EncounterBattle.actions';
import {
  FETCH_ALL_MONSTERS, fetchAllMonstersSuccess, fetchAllMonstersError,
  FETCH_MONSTER_BY_ID, fetchMonsterByIDSuccess, fetchMonsterByIDError,
  ADD_MONSTER_TO_GROUP, addMonsterToGroupSuccess
} from './EncounterBuilder.actions';

const fetchAllMonsters = () => fetch('./data/monsters/monsters.json').then(res => res.json());

export function* getMonsters(): Saga<void> {
  try {
    const monsters: MonstersRequestBase = yield call(fetchAllMonsters);
    yield put(fetchAllMonstersSuccess(monsters.map(({ slug, ...monster }) => ({
      ...monster,
      id: slug,
      type: monster.type.startsWith('swarm') ? 'swarm' : monster.type
    }))));
  } catch (error) {
    yield put(fetchAllMonstersError(error.message || error.response.statusText));
  }
}

const fetchMonsterByID = (monsterID: string) => fetch(`./data/monsters/${monsterID}.json`).then(res => res.json());
export function* getMonsterByID({ monsterID }: { monsterID: string }): Saga<void> {
  try {
    const reqMonster: MonsterRequest = yield call(fetchMonsterByID, monsterID);
    const monster: Monster = {
      ...reqMonster,
      id: monsterID,
      type: reqMonster.type.startsWith('swarm') ? 'swarm' : reqMonster.type
    };
    yield put(fetchMonsterByIDSuccess(monster));
  } catch (error) {
    yield put(fetchMonsterByIDError(error.message || error.response.statusText));
  }
}

export function* handleAddMonsterToGroup(
  { monsterID, monster }: { monsterID: string, monster: ?Monster }
): Saga<void> {
  try {
    if (monster) {
      yield put(addMonsterToGroupSuccess(monsterID));
      yield put(addMonsterToBattleTable(monster));
    } else {
      const reqMonster: MonsterRequest = yield call(fetchMonsterByID, monsterID);
      const newMonster: Monster = {
        ...reqMonster,
        id: monsterID,
        type: reqMonster.type.startsWith('swarm') ? 'swarm' : reqMonster.type
      };
      yield put(fetchMonsterByIDSuccess(newMonster));
      yield put(addMonsterToGroupSuccess(monsterID));
      yield put(addMonsterToBattleTable(newMonster));
    }
  } catch (error) {
    yield put(fetchMonsterByIDError(error.message || error.response.statusText));
  }
}

export default function* (): Saga<void> {
  yield takeEvery(FETCH_ALL_MONSTERS, getMonsters);
  yield takeEvery(FETCH_MONSTER_BY_ID, getMonsterByID);
  yield takeEvery(ADD_MONSTER_TO_GROUP, handleAddMonsterToGroup);
}
