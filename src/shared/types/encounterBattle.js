// @flow
import type { MonsterTableData } from './encounterBuilder';

export type MonsterState = Array<{
  label: string,
  value: string
}>

export type BattleMonster = MonsterTableData & {
  hp: number,
  armor: string,
  ac: number,
  speed: string,
  dex: number,
  actions: string[] | string,
  initiative: number,
  state: MonsterState
}

export type BattleMonsters = Array<{
  id: string,
  monster: BattleMonster
}>

export type EncounterBattle = {|
  +monsters: BattleMonsters,
  +turn: number
|};

export type EncounterBattleState = {
  +encounterBattle: EncounterBattle
};

export type EncounterBattleAction =
  | { type: 'encounterBattle/SET_MONSTER_HP', rowID: string, hp: number }
  | { type: 'encounterBattle/SET_MONSTER_STATE', rowID: string, state: MonsterState}
  | { type: 'encounterBattle/NEXT_TURN' };
