import React, { Component } from 'react';
import sagaMiddleware from 'store/middleware/sagaMiddleware';

const withSaga = sagas => WrappedComponent => class extends Component {
  componentWillMount() {
    this.sagas = sagaMiddleware.run(sagas);
  }

  componentWillUnmount() {
    this.sagas.cancel();
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};

export default withSaga;
