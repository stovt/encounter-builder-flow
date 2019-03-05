// @flow
import v4 from 'uuid/v4';
import type { Monster } from 'shared/types/encounterBuilder';
import type { EncounterBattle, BattleMonster, BattleMonsters } from 'shared/types/encounterBattle';
import type { Action } from 'shared/types';
import { ADD_MONSTER_TO_GROUP, SET_MONSTER_QTY } from 'pages/EncounterBuilder/EncounterBuilder.actions';
import { getInitiative } from './EncounterBattle.helpers';
import { SET_MONSTER_HP, SET_MONSTER_STATE, NEXT_TURN } from './EncounterBattle.actions';

const modifyMonsterData = (monster: Monster): { id: string, monster: BattleMonster } => ({
  id: v4(),
  monster: {
    id: monster._id,
    name: monster.displayName,
    size: monster.data.size,
    type: monster.data.type,
    cr: monster.data.cr,
    exp: Number(monster.data.exp),
    hp: Number(monster.data.hp),
    armor: monster.data.armor,
    ac: Number(monster.data.ac),
    speed: monster.data.speed,
    dex: Number(monster.data.dex),
    actions: monster.data.actions,
    initiative: getInitiative(Number(monster.data.dex)),
    state: []
  }
});

const initialState: EncounterBattle = {
  monsters: [],
  turn: 0,
  battleStarted: false
};

const encounterBattleReducer = (
  state: EncounterBattle = initialState, action: Action
): EncounterBattle => {
  switch (action.type) {
    case ADD_MONSTER_TO_GROUP: {
      const newMonstersState: BattleMonsters = [
        ...state.monsters,
        modifyMonsterData(action.monster)
      ].sort((a, b) => b.monster.initiative - a.monster.initiative);

      if (!state.monsters.length || !state.battleStarted) {
        return {
          ...state,
          monsters: newMonstersState
        };
      }

      const newTurn = newMonstersState.findIndex(d => d.id === state.monsters[state.turn].id);
      return {
        ...state,
        monsters: newMonstersState,
        turn: newTurn
      };
    }
    case SET_MONSTER_QTY: {
      if (!state.monsters.length) return state;

      const { monster, qty } = action;

      const monsters = state.monsters.filter(data => data.monster.id === monster._id);
      if (!monsters.length) return state;

      let newMonstersState: BattleMonsters;
      if (qty > monsters.length) {
        newMonstersState = [
          ...state.monsters,
          modifyMonsterData(monster)
        ].sort((a, b) => b.monster.initiative - a.monster.initiative);
      } else {
        newMonstersState = [
          ...state.monsters.slice(
            0, state.monsters.findIndex(data => data.monster.id === monster._id)
          ),
          ...state.monsters.slice(
            state.monsters.findIndex(data => data.monster.id === monster._id) + 1
          )
        ].sort((a, b) => b.monster.initiative - a.monster.initiative);
      }

      if (!state.battleStarted) {
        return {
          ...state,
          monsters: newMonstersState
        };
      }

      const newTurn = newMonstersState.findIndex(d => d.id === state.monsters[state.turn].id);
      return {
        ...state,
        monsters: newMonstersState,
        turn: newTurn !== -1 ? newTurn : state.turn
      };
    }
    case SET_MONSTER_HP: {
      const { rowID, hp } = action;

      const monsterData = state.monsters.find(data => data.id === rowID);

      if (monsterData) {
        return {
          ...state,
          monsters: [
            ...state.monsters.slice(0, state.monsters.findIndex(m => m.id === rowID)),
            {
              id: rowID,
              monster: {
                ...monsterData.monster,
                hp
              }
            },
            ...state.monsters.slice(state.monsters.findIndex(m => m.id === rowID) + 1)
          ]
        };
      }
      return state;
    }
    case SET_MONSTER_STATE: {
      const { rowID, state: monsterState } = action;

      const monsterData = state.monsters.find(data => data.id === rowID);

      if (monsterData) {
        return {
          ...state,
          monsters: [
            ...state.monsters.slice(0, state.monsters.findIndex(m => m.id === rowID)),
            {
              id: rowID,
              monster: {
                ...monsterData.monster,
                state: monsterState
              }
            },
            ...state.monsters.slice(state.monsters.findIndex(m => m.id === rowID) + 1)
          ]
        };
      }
      return state;
    }
    case NEXT_TURN:
      return {
        ...state,
        turn: state.turn === state.monsters.length - 1 ? 0 : state.turn + 1,
        battleStarted: true
      };
    default:
      return state;
  }
};

export default encounterBattleReducer;
