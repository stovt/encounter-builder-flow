import React from 'react';
import { connect } from 'react-redux';
import { getBreakpoints } from 'shared/components/BreakpointListener/BreakpointListener.selectors';

const mapStateToProps = state => ({
  breakpoints: getBreakpoints(state)
});

export default (WrappedComponent) => {
  const wrappedComponent = props => <WrappedComponent {...props} />;
  return connect(mapStateToProps)(wrappedComponent);
};
