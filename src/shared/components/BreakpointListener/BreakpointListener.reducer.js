// @flow
import type { Action } from 'shared/types';
import type { Breakpoints } from 'shared/types/breakpoints';
import { BREAKPOINT_CHANGE } from './BreakpointListener.actions';
import { MOBILE_BREAKPOINT_NAME } from './BreakpointListener.constants';
import { fromBreakpoints, getMediaQueryList } from './BreakpointListener.helpers';

const computeMobileBreakpointMatch = (state): Breakpoints => ({
  ...state,
  [MOBILE_BREAKPOINT_NAME]: Object.keys(state)
    .filter(breakpoint => breakpoint !== MOBILE_BREAKPOINT_NAME)
    .every(breakpoint => !state[breakpoint])
});

const initialState: Breakpoints = computeMobileBreakpointMatch(
  fromBreakpoints(breakpoint => getMediaQueryList(breakpoint).matches)
);

const breakpointsReducer = (state: Breakpoints = initialState, action: Action): Breakpoints => {
  switch (action.type) {
    case BREAKPOINT_CHANGE:
      return computeMobileBreakpointMatch({
        ...state,
        [action.breakpoint]: action.matches
      });
    default:
      return state;
  }
};

export default breakpointsReducer;
