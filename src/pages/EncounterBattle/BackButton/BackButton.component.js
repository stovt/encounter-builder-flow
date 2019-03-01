// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledBackButton from './BackButton.styled';

const BackButton = () => (
  <StyledBackButton to="/">
    <FormattedMessage id="encounter-battle.back" />
  </StyledBackButton>
);

export default BackButton;
