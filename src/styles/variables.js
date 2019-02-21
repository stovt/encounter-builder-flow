// @flow
import { type CSSConstructor } from 'styled-components';
import breakpoints from './breakpoints';

type ObjMap<N = string> = {
  [string]: N
}
export type Theme = {
  [string]: ObjMap<> | ObjMap<number>,
  flexboxgrid: {
    gridSize: number,
    gutterWidth: number,
    outerMargin: number,
    mediaQuery: string,
    container: ObjMap<number>,
    breakpoints: ObjMap<number>
  },
  breakpoints: {
    [string]: CSSConstructor
  }
};

const theme: Theme = {};

theme.fonts = {};
theme.fonts.main = 'Open Sans';

theme.fontSize = {};
theme.fontSize.bodyValue = 16;
theme.fontSize.titleValue = 24;
theme.fontSize.body = `${theme.fontSize.bodyValue}px`;
theme.fontSize.title = `${theme.fontSize.titleValue}px`;

theme.colors = {};
theme.colors.body = '#f5f8fb';
theme.colors.prime = '#00448b';
theme.colors.error = '#d0021b';
theme.colors.black = '#000';
theme.colors.white = '#fff';
theme.colors.inputBG = '#e5eaef';
theme.colors.optionBG = '#f2f2f2';
theme.colors.membershipBG = '#dce6f0';
theme.colors.inactive = 'rgba(0, 0, 0, 0.5)';
theme.colors.hr = '#e0e0e0';

theme.margins = {};
theme.margins.small = '16px';
theme.margins.medium = '24px';
theme.margins.large = '40px';

theme.paddings = {};
theme.paddings.small = '16px';
theme.paddings.medium = '24px';
theme.paddings.large = '40px';
theme.paddings.btn = '16px';
theme.paddings.smallBtn = '12px';
theme.paddings.input = '22px 10px 6px';

theme.flexboxgrid = {
  gridSize: 12,
  gutterWidth: 3.2, // rem
  outerMargin: 1.6, // rem
  mediaQuery: 'only screen',
  container: {
    sm: 46, // rem
    md: 61, // rem
    lg: 76 // rem
  },
  breakpoints: {
    xs: 0, // em
    sm: 48, // em, ~768px
    md: 64, // em, ~1024px
    lg: 82.5 // em, ~1320px
  }
};

theme.breakpoints = breakpoints(theme.flexboxgrid.breakpoints, 'em');

export default theme;
