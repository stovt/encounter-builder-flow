import styled from 'styled-components';

export default styled.div`
  display: flex;
  font-size: 16px;

  & div + div {
    margin-left: 10px;
  }
`;
