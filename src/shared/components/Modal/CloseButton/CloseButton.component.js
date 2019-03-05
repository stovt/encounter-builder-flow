// @flow
import React from 'react';
import { CloseIcon } from 'shared/components/Icons';
import StyledCloseButton from './CloseButton.styled';

export default (props: {}) => (
  <StyledCloseButton size={16} {...props}>
    <CloseIcon width={10} height={10} />
  </StyledCloseButton>
);
