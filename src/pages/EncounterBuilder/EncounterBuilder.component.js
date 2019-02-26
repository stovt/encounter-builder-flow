// @flow
import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import type { ErrorType } from 'shared/types';
import type { EncounterBuilderAction, Monster } from 'shared/types/encounterBuilder';
import LoadingComponent from 'shared/components/LoadingComponent';
import AlertBox from 'shared/components/AlertBox';
import Divider from 'shared/components/Divider';
import GroupInfo from './GroupInfo';
import EncounterInfo from './EncounterInfo';
import MonstersTable from './MonstersTable';

type Props = {
  monsters: Monster[],
  loading: boolean,
  error: ErrorType,
  fetchAllMonsters: () => EncounterBuilderAction
}

class EncounterBuilder extends React.PureComponent<Props> {
  componentDidMount() {
    if (!this.props.monsters.length) this.props.fetchAllMonsters();
  }

  render() {
    const { monsters, loading, error } = this.props;
    if (loading) return <LoadingComponent />;
    if (error) return <AlertBox>{error}</AlertBox>;
    return (
      <Row>
        <Col xs={12} sm={12} md={4}>
          <Row>
            <Col xs={12}>
              <GroupInfo />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col xs={12}>
              <EncounterInfo />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={8}>
          <MonstersTable
            monsters={
              monsters.map(monster => ({
                id: monster._id,
                name: monster.displayName,
                size: monster.data.size,
                type: monster.data.type,
                cr: monster.data.cr
              }))
            }
          />
        </Col>
      </Row>
    );
  }
}

export default EncounterBuilder;
