// @flow
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import type { Dispatch } from 'shared/types';
import type { Breakpoint } from 'shared/types/breakpoints';
import { breakpointChange } from './BreakpointListener.actions';
import BreakpointListener from './BreakpointListener.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  breakpointChange: (
    breakpoint: Breakpoint, matches: boolean
  ) => dispatch(breakpointChange(breakpoint, matches))
});

export default withRouter(connect(null, mapDispatchToProps)(BreakpointListener));
