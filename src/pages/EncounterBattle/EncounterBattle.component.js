// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Col, Row } from 'react-styled-flexboxgrid';
import type { BattleMonsters } from 'shared/types/encounterBattle';
import StyledTitle from 'shared/components/Title';
import BattleTable from './BattleTable';
import ButtonsWrapper from './ButtonsWrapper';
import BackButton from './BackButton';
import NextTurnButton from './NextTurnButton';

const EncounterBattle = ({ monsters }: { monsters: BattleMonsters }) => {
  if (!monsters.length) return null;

  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col xs={12}>
            <StyledTitle center><FormattedMessage id="encounter-battle.title" /></StyledTitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <BattleTable monsters={monsters} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ButtonsWrapper>
              <BackButton />
              <NextTurnButton />
            </ButtonsWrapper>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default EncounterBattle;
