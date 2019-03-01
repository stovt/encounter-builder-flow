import styled, { css } from 'styled-components';

const centerStyles = css`
  text-align: center;
`;

export default styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSize.title};
  font-weight: normal;
  line-height: 1;
  ${props => (props.center && centerStyles)}
`;
