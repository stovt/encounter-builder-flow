// @flow
import reducerRegistry from 'store/reducerRegistry';
import reducer from './EncounterBattle.reducer';

reducerRegistry.register('encounterBattle', reducer);

export { default } from './EncounterBattle.container';
