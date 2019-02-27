// @flow
import React from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import type { ErrorType } from 'shared/types';
import type { Breakpoints } from 'shared/types/breakpoints';
import type {
  EncounterBuilderAction, Monsters, Groups, PartyLevels
} from 'shared/types/encounterBuilder';
import LoadingComponent from 'shared/components/LoadingComponent';
import AlertBox from 'shared/components/AlertBox';
import Divider from 'shared/components/Divider';
import GroupInfo from './GroupInfo';
import EncounterInfo from './EncounterInfo';
import Totals from './Totals';
import Legend from './Legend';
import MonstersTable from './MonstersTable';

type Props = {
  monsters: Monsters,
  loading: boolean,
  error: ErrorType,
  groups: Groups,
  partyLevels: PartyLevels,
  breakpoints: Breakpoints,
  fetchAllMonsters: () => EncounterBuilderAction
}

class EncounterBuilder extends React.PureComponent<Props> {
  componentDidMount() {
    if (!this.props.monsters.length) this.props.fetchAllMonsters();
  }

  render() {
    const {
      monsters, loading, error, groups, partyLevels, breakpoints
    } = this.props;

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
          {!!groups.length && (
            <>
              <Divider />
              <Row>
                <Col xs={12}>
                  <Totals groups={groups} partyLevels={partyLevels} />
                </Col>
              </Row>
            </>
          )}
          {(breakpoints.xs || (breakpoints.sm && !breakpoints.md)) && <Divider />}
          {breakpoints.md && (
            <>
              <Divider />
              <Row>
                <Col xs={12}>
                  <Legend />
                </Col>
              </Row>
            </>
          )}
        </Col>
        <Col xs={12} sm={12} md={8}>
          <Row>
            <Col xs={12}>
              <MonstersTable
                monsters={
                  monsters.map(monster => ({
                    id: monster._id,
                    name: monster.displayName,
                    size: monster.data.size,
                    type: monster.data.type,
                    cr: monster.data.cr,
                    exp: monster.data.exp
                  }))
                }
                partyLevels={partyLevels}
              />
              {(breakpoints.xs || (breakpoints.sm && !breakpoints.md)) && (
                <>
                  <Divider />
                  <Row>
                    <Col xs={12}>
                      <Legend />
                    </Col>
                  </Row>
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default EncounterBuilder;
