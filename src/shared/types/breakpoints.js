// @flow
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';

export type Breakpoints = {|
  xs: boolean,
  sm: boolean,
  md: boolean,
  lg: boolean
|};

export type BreakpointsState = {
  +breakpoints: Breakpoints
};

export type BreakpointsAction = { type: 'breakpoints/CHANGE', breakpoint: Breakpoint, matches: boolean };
