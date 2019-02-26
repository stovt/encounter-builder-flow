// @flow
import type { ErrorType } from './index';

export type MonsterSize = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
export type MonsterCR = '0' | '1/8' | '1/4' | '1/2' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26' | '27' | '28' | '29' | '30';
export type MonsterTableData = {
  id: string,
  name: string,
  size: MonsterSize,
  type: string,
  cr: MonsterCR
}
export type Monster = {
  _id: string,
  displayName: string,
  data: {
    size: MonsterSize,
    type: string,
    cr: MonsterCR,
    exp: string
  }
}
export type Monsters = Monster[]

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
  monster: Monster
}

export type Groups = Group[]

export type EncounterBuilder = {|
  +monsters: Monsters,
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
  | { type: 'encounterBuilder/FETCH_ALL_MONSTERS_SUCCESS', monsters: Monsters }
  | { type: 'encounterBuilder/FETCH_ALL_MONSTERS_ERROR', error: ErrorType }
  | { type: 'encounterBuilder/ADD_PARTY_LEVEL' }
  | { type: 'encounterBuilder/REMOVE_PARTY_LEVEL', id: string }
  | { type: 'encounterBuilder/SET_PARTY_LEVEL', value: number, id: string }
  | { type: 'encounterBuilder/SET_PARTY_PLAYER_COUNT', value: number, id: string }
  | { type: 'encounterBuilder/ADD_MONSTER_TO_GROUP', monsterID: string }
  | { type: 'encounterBuilder/SET_MONSTER_QTY', monsterID: string, qty: number };
