// @flow
import type { State, ErrorType } from 'shared/types';
import type { Monsters, PartyLevels } from 'shared/types/encounterBuilder';

export const getMonsters = (state: State): Monsters => (
  state.encounterBuilder.monsters
);
export const isLoading = (state: State): boolean => (
  state.encounterBuilder.loading
);
export const getError = (state: State): ?ErrorType => (
  state.encounterBuilder.error
);
export const getPartyLevels = (state: State): PartyLevels => (
  state.encounterBuilder.partyLevels
);
