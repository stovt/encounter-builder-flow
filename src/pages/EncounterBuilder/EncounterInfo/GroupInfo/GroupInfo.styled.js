import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 20px;
  }

  & > div + div {
    margin-left: 10px;
  }
`;
