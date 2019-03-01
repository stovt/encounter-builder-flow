// @flow
import type { State } from 'shared/types';
import type { BattleMonsters } from 'shared/types/encounterBattle';

export const getMonsters = (state: State): BattleMonsters => (
  state.encounterBattle.monsters.sort((a, b) => b.monster.initiative - a.monster.initiative)
);
export const getTurn = (state: State): number => (
  state.encounterBattle.turn
);
