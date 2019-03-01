// @flow
import type { MonsterTableData } from './encounterBuilder';

export type BattleMonster = MonsterTableData & {
  hp: number,
  armor: string,
  ac: number,
  speed: string,
  dex: number,
  actions: string[] | string,
  initiative: number
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
  | { type: 'encounterBattle/NEXT_TURN' };
