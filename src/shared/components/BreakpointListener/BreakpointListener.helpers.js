// @flow
import type { Breakpoint } from 'shared/types/breakpoints';
import theme from 'styles/variables';
import { MOBILE_BREAKPOINT_NAME } from './BreakpointListener.constants';

declare class MediaQueryListEvent {
  matches: boolean;
  media: string;
}
declare type MediaQueryListListener = MediaQueryListEvent => void;
declare class MediaQueryList extends EventTarget {
  matches: boolean;
  media: string;
  addListener: MediaQueryListListener => void;
  removeListener: MediaQueryListListener => void;
  onchange: MediaQueryListListener;
}
declare var matchMedia: string => MediaQueryList;
declare var window: { matchMedia: string => MediaQueryList };

type FromBreakpointsResp = {
  [breakpoint: Breakpoint]: { mql: MediaQueryList, listener: MediaQueryListEvent => void } | boolean
};

export const fromBreakpoints = (
  callback: (breakpoint: Breakpoint) => any, excludeMobileBreakpoint: boolean = true
): FromBreakpointsResp => {
  let keys: Array<Breakpoint> = Object.keys(theme.flexboxgrid.breakpoints);
  if (excludeMobileBreakpoint) {
    keys = keys.filter(breakpoint => breakpoint !== MOBILE_BREAKPOINT_NAME);
  }

  return keys.reduce((acc, breakpoint) => ({
    ...acc,
    [breakpoint]: callback(breakpoint)
  }), {});
};


export const getMediaQueryList = (breakpoint: Breakpoint): MediaQueryList => (
  window.matchMedia(`${theme.flexboxgrid.mediaQuery} and (min-width: ${theme.flexboxgrid.breakpoints[breakpoint]}em)`)
);
