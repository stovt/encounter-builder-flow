// @flow
import type { State, ErrorType } from 'shared/types';
import type { PartyLevels, Groups } from 'shared/types/encounterBuilder';
import type { MonstersBase, Monster, Monsters } from 'shared/types/monsters';

export const getMonsters = (state: State): MonstersBase => (
  state.encounterBuilder.monsters
);
export const getLoadedMonsters = (state: State): Monsters => (
  state.encounterBuilder ? state.encounterBuilder.loadedMonsters : []
);
export const getMonsterByID = (state: State, monsterID: string): ?Monster => (
  state.encounterBuilder
    ? state.encounterBuilder.loadedMonsters.find(monster => monster.id === monsterID)
    : undefined
);
export const isMonsterLoading = (state: State): boolean => (
  state.encounterBuilder ? state.encounterBuilder.monsterLoading : false
);
export const getMonsterError = (state: State): ?ErrorType => (
  state.encounterBuilder ? state.encounterBuilder.monsterError : null
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
