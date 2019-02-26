// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import StyledTitle from 'shared/components/Title';

const EncounterInfo = () => (
  <div>
    <StyledTitle><FormattedMessage id="encounter-info.title" /></StyledTitle>
  </div>
);

export default EncounterInfo;
