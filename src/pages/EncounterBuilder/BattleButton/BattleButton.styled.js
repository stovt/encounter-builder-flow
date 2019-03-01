import styled from 'styled-components';
import { StyledButton } from 'shared/components/forms';
import { NavLink } from 'react-router-dom';

export default styled(StyledButton.withComponent(NavLink))`
  font-size: 20px;
  padding: 10px;
`;
