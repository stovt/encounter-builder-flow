// @flow
import type { State } from 'shared/types';
import type { BattleMonsterRows } from 'shared/types/monsters';

export const getMonsters = (state: State): BattleMonsterRows => (
  state.encounterBattle ? state.encounterBattle.monsters : []
);
export const getTurn = (state: State): number => (
  state.encounterBattle.turn
);
