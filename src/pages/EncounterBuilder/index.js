// @flow
import reducerRegistry from 'store/reducerRegistry';
import reducer from './EncounterBuilder.reducer';

reducerRegistry.register('encounterBuilder', reducer);

export { default } from './EncounterBuilder.container';
