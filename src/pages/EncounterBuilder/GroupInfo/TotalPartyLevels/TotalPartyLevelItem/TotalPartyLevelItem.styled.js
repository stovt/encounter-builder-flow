import styled from 'styled-components';

export default styled.li`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};

  &:last-child {
    margin-top: ${props => props.theme.margins.medium};
  }
`;
