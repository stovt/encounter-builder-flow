// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import type { ModalsAction } from 'shared/types/modals';
import { noop } from 'shared/helpers';
import Overlay from './Overlay';
import StyledModal from './Modal.styled';
import CloseButton from './CloseButton';
import Title from './Title';

type Props = {
  registerModal: (modalId: string) => ModalsAction,
  unregisterModal: (modalId: string) => ModalsAction,
  hideModal: (modalId: string) => ModalsAction,
  visible?: boolean,
  modalId: string,
  children?: React.Node,
  onRequestClose?: () => void,
  showCloseBtn?: boolean,
  customCloseBtn?: React.ComponentType<*>,
  title?: React.Node | string,
  error?: boolean
};

type State = {
  hydrated: boolean
};

const modalsRoot = document.getElementById('modals');

class Modal extends React.PureComponent<Props, State> {
  static defaultProps = {
    title: null,
    visible: false,
    error: false,
    showCloseBtn: true,
    customCloseBtn: null,
    children: null,
    onRequestClose: noop
  }

  overlayRef: { current: null | HTMLDivElement } = React.createRef()

  state = {
    hydrated: false
  }

  componentDidMount() {
    /* SSR mismatch fix */
    this.setState({ // eslint-disable-line react/no-did-mount-set-state
      hydrated: true
    });
    this.props.registerModal(this.props.modalId);
  }

  componentWillUnmount() {
    this.props.unregisterModal(this.props.modalId);
  }

  onOverlayClick = (e: SyntheticEvent<HTMLDivElement>): void => {
    if (this.overlayRef.current) {
      if (e.target === this.overlayRef.current) {
        this.closeModal();
      }
    }
  }

  closeModal = (): void => {
    const { onRequestClose, hideModal, modalId } = this.props;
    if (onRequestClose) onRequestClose();
    hideModal(modalId);
  }

  render() {
    if (!this.state.hydrated || !modalsRoot) {
      return null;
    }

    const {
      visible, title, children, error, showCloseBtn,
      customCloseBtn: CustomCloseBtn, onRequestClose: omitOnRequestClose, ...props
    } = this.props;

    return ReactDOM.createPortal(
      <Overlay visible={visible} ref={this.overlayRef} onClick={this.onOverlayClick}>
        <StyledModal visible={visible} {...props}>
          {showCloseBtn && (
            CustomCloseBtn
              ? <CustomCloseBtn onClick={this.closeModal} />
              : <CloseButton onClick={this.closeModal} />
          )}
          {title && <Title error={error}>{title}</Title>}
          {children}
        </StyledModal>
      </Overlay>,
      modalsRoot
    );
  }
}

export default Modal;
