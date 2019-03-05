// @flow
import type { State } from 'shared/types';
import type { BattleMonsters } from 'shared/types/encounterBattle';

export const getMonsters = (state: State): BattleMonsters => (
  state.encounterBattle ? state.encounterBattle.monsters : []
);
export const getTurn = (state: State): number => (
  state.encounterBattle.turn
);
