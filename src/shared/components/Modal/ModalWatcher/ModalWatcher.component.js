// @flow
import React from 'react';
import GlobalStyles from './ModalWatcher.styles';
import { attachModalStyles, detachModalStyles } from './ModalWatcher.helpers';

type Props = {
  anyModalVisible: boolean
};

class ModalWatcher extends React.PureComponent<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.anyModalVisible !== prevProps.anyModalVisible) {
      if (this.props.anyModalVisible) {
        attachModalStyles();
      } else {
        detachModalStyles();
      }
    }
  }

  render() {
    return <GlobalStyles />;
  }
}

export default ModalWatcher;
