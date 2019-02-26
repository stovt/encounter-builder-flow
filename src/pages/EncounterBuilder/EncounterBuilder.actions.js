// @flow
import type { ErrorType } from 'shared/types';
import type { EncounterBuilderAction, Monsters } from 'shared/types/encounterBuilder';

export const FETCH_ALL_MONSTERS = 'encounterBuilder/FETCH_ALL_MONSTERS';
export const FETCH_ALL_MONSTERS_SUCCESS = 'encounterBuilder/FETCH_ALL_MONSTERS_SUCCESS';
export const FETCH_ALL_MONSTERS_ERROR = 'encounterBuilder/FETCH_ALL_MONSTERS_ERROR';
export const ADD_PARTY_LEVEL = 'encounterBuilder/ADD_PARTY_LEVEL';
export const REMOVE_PARTY_LEVEL = 'encounterBuilder/REMOVE_PARTY_LEVEL';
export const SET_PARTY_LEVEL = 'encounterBuilder/SET_PARTY_LEVEL';
export const SET_PARTY_PLAYER_COUNT = 'encounterBuilder/SET_PARTY_PLAYER_COUNT';

export const fetchAllMonsters = (): EncounterBuilderAction => ({ type: FETCH_ALL_MONSTERS });
export const fetchAllMonstersSuccess = (monsters: Monsters): EncounterBuilderAction => ({
  type: FETCH_ALL_MONSTERS_SUCCESS, monsters
});
export const fetchAllMonstersError = (error: ErrorType): EncounterBuilderAction => ({
  type: FETCH_ALL_MONSTERS_ERROR, error
});
export const addPartyLevel = (): EncounterBuilderAction => ({
  type: ADD_PARTY_LEVEL
});
export const removePartyLevel = (id: string): EncounterBuilderAction => ({
  type: REMOVE_PARTY_LEVEL, id
});
export const setPartyLevel = (value: number, id: string): EncounterBuilderAction => ({
  type: SET_PARTY_LEVEL, value, id
});
export const setPartyPlayerCount = (value: number, id: string): EncounterBuilderAction => ({
  type: SET_PARTY_PLAYER_COUNT, value, id
});