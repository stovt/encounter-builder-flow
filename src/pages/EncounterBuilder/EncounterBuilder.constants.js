// @flow
import v4 from 'uuid/v4';
import type { PartyLevel, PartyLevels } from 'shared/types/encounterBuilder';
import { PLAYER_LEVELS } from 'shared/constants';

export const DEFAULT_PARTY_LEVELS: PartyLevels = [{
  id: v4(),
  level: PLAYER_LEVELS[1],
  playerCount: 4
}];

export const NEW_PARTY_LEVEL: { level: $PropertyType<PartyLevel, 'level'>, playerCount: $PropertyType<PartyLevel, 'playerCount'>} = {
  level: PLAYER_LEVELS[1],
  playerCount: 1
};
