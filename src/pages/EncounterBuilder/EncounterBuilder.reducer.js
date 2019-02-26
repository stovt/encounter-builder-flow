// @flow
import { v4 } from 'uuid';
import type { EncounterBuilder } from 'shared/types/encounterBuilder';
import type { Action } from 'shared/types';
import {
  FETCH_ALL_MONSTERS, FETCH_ALL_MONSTERS_SUCCESS, FETCH_ALL_MONSTERS_ERROR,
  ADD_PARTY_LEVEL, REMOVE_PARTY_LEVEL, SET_PARTY_LEVEL, SET_PARTY_PLAYER_COUNT
} from './EncounterBuilder.actions';
import { PLAYER_LEVELS, DEFAULT_PARTY_LEVELS, NEW_PARTY_LEVEL } from './EncounterBuilder.constants';

const initialState: EncounterBuilder = {
  monsters: [],
  loading: false,
  error: null,
  partyLevels: DEFAULT_PARTY_LEVELS
};

const encounterBuilderReducer = (
  state: EncounterBuilder = initialState, action: Action
): EncounterBuilder => {
  switch (action.type) {
    case FETCH_ALL_MONSTERS:
      return {
        ...state,
        monsters: [],
        loading: true,
        error: null
      };
    case FETCH_ALL_MONSTERS_SUCCESS:
      return {
        ...state,
        monsters: action.monsters,
        loading: false,
        error: null
      };
    case FETCH_ALL_MONSTERS_ERROR:
      return {
        ...state,
        monsters: [],
        loading: false,
        error: action.error
      };
    case ADD_PARTY_LEVEL:
      return {
        ...state,
        partyLevels: [
          ...state.partyLevels,
          {
            id: v4(),
            ...NEW_PARTY_LEVEL
          }
        ]
      };
    case REMOVE_PARTY_LEVEL: {
      const { id } = action;
      return {
        ...state,
        partyLevels: [
          ...state.partyLevels.slice(0, state.partyLevels.findIndex(p => p.id === id)),
          ...state.partyLevels.slice(state.partyLevels.findIndex(p => p.id === id) + 1)
        ]
      };
    }
    case SET_PARTY_LEVEL: {
      const { id, value } = action;
      return {
        ...state,
        partyLevels: [
          ...state.partyLevels.slice(0, state.partyLevels.findIndex(p => p.id === id)),
          {
            id,
            level: PLAYER_LEVELS[value],
            playerCount: state.partyLevels[
              state.partyLevels.findIndex(p => p.id === id)
            ].playerCount
          },
          ...state.partyLevels.slice(state.partyLevels.findIndex(p => p.id === id) + 1)
        ]
      };
    }
    case SET_PARTY_PLAYER_COUNT: {
      const { id, value } = action;
      return {
        ...state,
        partyLevels: [
          ...state.partyLevels.slice(0, state.partyLevels.findIndex(p => p.id === id)),
          {
            id,
            level: state.partyLevels[
              state.partyLevels.findIndex(p => p.id === id)
            ].level,
            playerCount: value
          },
          ...state.partyLevels.slice(state.partyLevels.findIndex(p => p.id === id) + 1)
        ]
      };
    }
    default:
      return state;
  }
};

export default encounterBuilderReducer;
