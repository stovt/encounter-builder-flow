// @flow
import type { StylesConfig } from 'react-select/src/styles';
import { theme } from 'styles';

export const customStyles: StylesConfig = {
  container: styles => ({
    ...styles,
    width: '100%'
  }),
  control: (styles, { selectProps: { menuIsOpen }, isFocused }) => console.log(styles) || ({
    ...styles,
    borderRadius: menuIsOpen ? '4px 4px 0 0' : 4,
    borderColor: isFocused ? theme.colors.input.focusBorder : theme.colors.input.border,
    boxShadow: isFocused ? '0 4px 16px 0 '.concat(theme.colors.input.focusShadow) : null,
    backgroundColor: theme.colors.white,
    '&:hover': {
      borderColor: isFocused ? theme.colors.input.focusBorder : theme.colors.input.border,
      boxShadow: isFocused ? '0 4px 16px 0 '.concat(theme.colors.input.focusShadow) : null
    }
  }),
  dropdownIndicator: (styles, { selectProps: { menuIsOpen } }) => console.log(styles) || ({
    ...styles,
    transition: 'all .2s ease',
    transform: menuIsOpen ? 'rotate(180deg)' : null
  }),
  menu: styles => ({
    ...styles,
    margin: 0,
    borderRadius: '0 0 4px 4px'
  }),
  menuList: styles => ({
    ...styles,
    padding: 0
  })
};
