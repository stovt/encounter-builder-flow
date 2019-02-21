// @flow
import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalUtilsStyles = createGlobalStyle`
  .relative {
    position: relative;
  }

  .flex-center {
    display: flex !important;
    align-items: center !important;
  }

  .space-m-s {
    margin: ${variables.margins.small} !important;
  }

  .space-m-t-s {
    margin-top: ${variables.margins.small} !important;
  }

  .space-m-r-s {
    margin-right: ${variables.margins.small} !important;
  }

  .space-m-b-s {
    margin-bottom: ${variables.margins.small} !important;
  }

  .space-m-l-s {
    margin-left: ${variables.margins.small} !important;
  }

  .space-m-m {
    margin: ${variables.margins.medium} !important;
  }

  .space-m-t-m {
    margin-top: ${variables.margins.medium} !important;
  }

  .space-m-r-m {
    margin-right: ${variables.margins.medium} !important;
  }

  .space-m-b-m {
    margin-bottom: ${variables.margins.medium} !important;
  }

  .space-m-l-m {
    margin-left: ${variables.margins.medium} !important;
  }

  .space-m-l {
    margin: ${variables.margins.large} !important;
  }

  .space-m-t-l {
    margin-top: ${variables.margins.large} !important;
  }

  .space-m-r-l {
    margin-right: ${variables.margins.large} !important;
  }

  .space-m-b-l {
    margin-bottom: ${variables.margins.large} !important;
  }

  .space-m-l-l {
    margin-left: ${variables.margins.large} !important;
  }

  .space-p-s {
    padding: ${variables.paddings.small} !important;
  }

  .space-p-t-s {
    padding-top: ${variables.paddings.small} !important;
  }

  .space-p-r-s {
    padding-right: ${variables.paddings.small} !important;
  }

  .space-p-b-s {
    padding-bottom: ${variables.paddings.small} !important;
  }

  .space-p-l-s {
    padding-left: ${variables.paddings.small} !important;
  }
`;

export default GlobalUtilsStyles;
