// @flow
import * as React from 'react';
import { Route } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';

type Props = {
  component: React.ComponentType<*>
};

class RouteComponent extends React.PureComponent<Props> {
  renderRoute = (router: ContextRouter) => {
    const { component: Component } = this.props;
    return <Component {...router} />;
  }

  render() {
    const { component: OmitComponent, ...props } = this.props;
    return (
      <Route
        {...props}
        render={this.renderRoute}
      />
    );
  }
}

export default RouteComponent;
