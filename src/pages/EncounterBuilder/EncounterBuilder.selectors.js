// @flow
import type { State, ErrorType } from 'shared/types';
import type {
  Monster, Monsters, PartyLevels, Groups
} from 'shared/types/encounterBuilder';

export const getMonsters = (state: State): Monsters => (
  state.encounterBuilder.monsters
);
export const getMonsterByID = (state: State, monsterID: string): ?Monster => (
  state.encounterBuilder.monsters.find(monster => monster._id === monsterID)
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
export const getGroups = (state: State): Groups => (
  state.encounterBuilder.groups
);
