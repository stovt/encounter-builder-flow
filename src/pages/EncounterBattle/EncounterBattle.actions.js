// @flow
import type { EncounterBattleAction } from 'shared/types/encounterBattle';

export const SET_MONSTER_HP = 'encounterBattle/SET_MONSTER_HP';
export const NEXT_TURN = 'encounterBattle/NEXT_TURN';

export const setMonsterHP = (rowID: string, hp: number): EncounterBattleAction => ({
  type: SET_MONSTER_HP, rowID, hp
});

export const nextTurn = (): EncounterBattleAction => ({
  type: NEXT_TURN
});
