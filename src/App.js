// @flow
import React, { Suspense, lazy } from 'react';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { Switch } from 'react-router-dom';
import Route from 'shared/components/Route';
import LoadingComponent from 'shared/components/LoadingComponent';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.component'));

const App = () => (
  <Grid>
    <Row center="xs">
      <Col xs={12} sm={8} md={6} lg={5}>
        <Suspense fallback={<LoadingComponent />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </Col>
    </Row>
  </Grid>
);

export default App;
