// @flow
import { css, type Interpolation, type CSSConstructor } from 'styled-components';

export type Breakpoints = {|
  xs: number,
  sm: number,
  md: number,
  lg: number
|};

const breakpoints = (obj: Breakpoints, unit: string): { [string]: CSSConstructor } => {
  const keys: string[] = Object.keys(obj);
  return keys.reduce((l, a, i) => ({
    ...l,
    [a]: i > 0
      ? (strings: string[], ...interpolations: Interpolation[]) => css`
        @media only screen and (min-width: ${obj[a]}${unit}) {
          ${css(strings, ...interpolations)}
        }
      `
      : (strings: string[], ...interpolations: Interpolation[]) => css`
        @media only screen and (max-width: ${obj[keys[1]]}${unit}) {
          ${css(strings, ...interpolations)}
        }
      `
  }), {});
};

export default breakpoints;
