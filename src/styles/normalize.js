// @flow
import { normalize } from 'polished';
import { createGlobalStyle, type CSSRules } from 'styled-components';

const normalizeStyles: CSSRules = normalize();

const GlobalNormalizeStyles = createGlobalStyle`
  ${normalizeStyles}
`;

export default GlobalNormalizeStyles;
