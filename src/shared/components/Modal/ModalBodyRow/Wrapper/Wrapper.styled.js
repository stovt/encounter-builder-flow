import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-right: -${props => props.scrollbarWidth}px;
`;
