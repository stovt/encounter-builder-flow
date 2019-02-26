// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { IconWrapper, PlusIcon } from 'shared/components/Icons';
import StyledAddPartyLevelButton from './AddPartyLevelButton.styled';

const AddPartyLevelButton = (props: {}) => (
  <StyledAddPartyLevelButton type="button" {...props}>
    <IconWrapper><PlusIcon size={12} /><FormattedMessage id="group-info.add-another-level" /></IconWrapper>
  </StyledAddPartyLevelButton>
);

export default AddPartyLevelButton;
