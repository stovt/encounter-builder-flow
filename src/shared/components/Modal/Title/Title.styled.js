import styled from 'styled-components';

export default styled.h5`
  margin-top: 0;
  margin-bottom: ${props => props.theme.margins.large};
  font-size: 24px;
  color: ${props => (props.error ? '#e20000' : props.theme.colors.black)};
  font-weight: 500;
  text-align: center;
`;
