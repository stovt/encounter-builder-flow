import styled, { css } from 'styled-components';

export const bigBtnStyles = css`
  font-size: 20px;
  padding: 10px;
`;

export default styled.button`
  display: block;
  font-size: 1em;
  transition: all 0.1s ease;
  cursor: pointer;
  outline: none;
  padding: ${props => props.theme.paddings.small};
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 4px 8px 0 ${props => props.theme.colors.btn.shadow};
  background: ${props => `linear-gradient(79deg, ${props.theme.colors.btn.prime1}, ${props.theme.colors.btn.prime2})`};
  color: ${props => props.theme.colors.white};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
    cursor: text;
  }
`;
