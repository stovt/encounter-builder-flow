// @flow
import * as React from 'react';
import type { BreakpointsAction, Breakpoint } from 'shared/types/breakpoints';
import { fromBreakpoints, getMediaQueryList } from './BreakpointListener.helpers';

type Props = {
  breakpointChange: (breakpoint: Breakpoint, matches: boolean) => BreakpointsAction,
  children: React.Node
}

class BreakpointListener extends React.PureComponent<Props> {
  listeners: { [breakpoint: Breakpoint]: any }

  componentDidMount() {
    const { breakpointChange } = this.props;
    this.listeners = fromBreakpoints((breakpoint) => {
      const mql = getMediaQueryList(breakpoint);
      breakpointChange(breakpoint, mql.matches);
      const listener = ({ matches }) => {
        breakpointChange(breakpoint, matches);
      };
      mql.addListener(listener);
      return {
        mql,
        listener
      };
    });
  }

  componentWillUnmount() {
    Object.keys(this.listeners).forEach((breakpoint: Breakpoint) => {
      const { mql, listener } = this.listeners[breakpoint];
      mql.removeListener(listener);
    });
  }

  render() {
    return this.props.children;
  }
}

export default BreakpointListener;
