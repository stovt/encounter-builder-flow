// @flow
import type { EncounterBattleAction, MonsterState } from 'shared/types/encounterBattle';

export const SET_MONSTER_HP = 'encounterBattle/SET_MONSTER_HP';
export const SET_MONSTER_STATE = 'encounterBattle/SET_MONSTER_STATE';
export const NEXT_TURN = 'encounterBattle/NEXT_TURN';

export const setMonsterHP = (rowID: string, hp: number): EncounterBattleAction => ({
  type: SET_MONSTER_HP, rowID, hp
});

export const setMonsterState = (rowID: string, state: MonsterState): EncounterBattleAction => ({
  type: SET_MONSTER_STATE, rowID, state
});

export const nextTurn = (): EncounterBattleAction => ({
  type: NEXT_TURN
});
