// @flow
import type { ErrorType } from './index';
import type {
  MonsterBase, MonstersBase, Monster, Monsters
} from './monsters';

export type PlayerLevel = {|
  level: number,
  budget: number,
  easy: number,
  medium: number,
  hard: number,
  deadly: number
|}
export type PlayerLevels = {
  [key: number]: PlayerLevel
}
export type PartyLevel = {
  id: string,
  level: PlayerLevel,
  playerCount: number
}
export type PartyLevels = PartyLevel[]

export type Group = {
  qty: number,
  monster: MonsterBase
}

export type Groups = Group[]

export type EncounterBuilder = {|
  +monsters: MonstersBase,
  +loadedMonsters: Monsters,
  +monsterLoading: boolean,
  +monsterError: ?ErrorType,
  +loading: boolean,
  +error: ?ErrorType,
  +partyLevels: PartyLevels,
  groups: Groups
|};

export type EncounterBuilderState = {
  +encounterBuilder: EncounterBuilder
};

export type EncounterBuilderAction =
  | { type: 'encounterBuilder/FETCH_ALL_MONSTERS' }
  | { type: 'encounterBuilder/FETCH_ALL_MONSTERS_SUCCESS', monsters: MonstersBase }
  | { type: 'encounterBuilder/FETCH_ALL_MONSTERS_ERROR', error: ErrorType }
  | { type: 'encounterBuilder/FETCH_MONSTER_BY_ID', monsterID: string }
  | { type: 'encounterBuilder/FETCH_MONSTER_BY_ID_SUCCESS', monster: Monster }
  | { type: 'encounterBuilder/FETCH_MONSTER_BY_ID_ERROR', error: ErrorType }
  | { type: 'encounterBuilder/ADD_PARTY_LEVEL' }
  | { type: 'encounterBuilder/REMOVE_PARTY_LEVEL', id: string }
  | { type: 'encounterBuilder/SET_PARTY_LEVEL', value: number, id: string }
  | { type: 'encounterBuilder/SET_PARTY_PLAYER_COUNT', value: number, id: string }
  | { type: 'encounterBuilder/ADD_MONSTER_TO_GROUP', monsterID: string, monster: ?Monster }
  | { type: 'encounterBuilder/ADD_MONSTER_TO_GROUP_SUCCESS', monsterID: string }
  | { type: 'encounterBuilder/SET_MONSTER_QTY', monster: Monster, qty: number };
