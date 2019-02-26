// @flow

import type { PartyLevel, PartyLevels } from 'shared/types/encounterBuilder';

type PartyLevelsType = {|
  easy: number,
  medium: number,
  hard: number,
  deadly: number,
  budget: number,
|}
const getExpLevels = (partyLevel: PartyLevel): PartyLevelsType => ({
  easy: partyLevel.playerCount * partyLevel.level.easy,
  medium: partyLevel.playerCount * partyLevel.level.medium,
  hard: partyLevel.playerCount * partyLevel.level.hard,
  deadly: partyLevel.playerCount * partyLevel.level.deadly,
  budget: partyLevel.playerCount * partyLevel.level.budget
});

export const getTotalPartyExpLevels = (partyLevels: PartyLevels): PartyLevelsType => {
  const result = partyLevels.reduce((accum, curLevel) => {
    const curExpLevels = getExpLevels(curLevel);

    return {
      easy: accum.easy + curExpLevels.easy,
      medium: accum.medium + curExpLevels.medium,
      hard: accum.hard + curExpLevels.hard,
      deadly: accum.deadly + curExpLevels.deadly,
      budget: accum.budget + curExpLevels.budget
    };
  }, {
    easy: 0, medium: 0, hard: 0, deadly: 0, budget: 0
  });
  return result;
};
