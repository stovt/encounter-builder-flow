// @flow
import React, { Suspense, lazy } from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Switch } from 'react-router-dom';
import Route from 'shared/components/Route';
import LoadingComponent from 'shared/components/LoadingComponent';

const EncounterBuilder = lazy(() => import(/* webpackChunkName: 'encounterBuilder' */'./pages/EncounterBuilder'));

const App = () => (
  <Grid fluid>
    <Row>
      <Col xs={12}>
        <Suspense fallback={<LoadingComponent />}>
          <Switch>
            <Route exact path="/" component={EncounterBuilder} />
          </Switch>
        </Suspense>
      </Col>
    </Row>
  </Grid>
);

export default App;
