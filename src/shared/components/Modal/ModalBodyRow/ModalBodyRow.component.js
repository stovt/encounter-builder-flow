// @flow
import * as React from 'react';
import Wrapper from './Wrapper';
import BorderTop from './BorderTop';
import BorderBottom from './BorderBottom';
import { SCROLLBAR_PADDING } from './ModalBodyRow.constants';
import StyledModalBodyRow from './ModalBodyRow.styled';

type Props = {
  children?: React.Node,
  scrollable?: boolean
};

type State = {
  shadowTopOpacity: number,
  shadowBottomOpacity: number,
  scrollbarWidth: number
};

class ModalBodyRow extends React.PureComponent<Props, State> {
  static defaultProps = {
    children: null,
    scrollable: false
  }

  state = {
    shadowTopOpacity: 0,
    shadowBottomOpacity: 0,
    scrollbarWidth: 0
  }


  containerRef: { current: null | HTMLDivElement } = React.createRef()

  childRef: { current: null | HTMLDivElement } = React.createRef()

  componentDidMount() {
    if (this.props.scrollable) {
      const { current: containerRefCurrent } = this.containerRef;
      const { current: childRefCurrent } = this.childRef;
      if (containerRefCurrent && childRefCurrent) {
        const { offsetWidth: parentWidth } = containerRefCurrent;
        const { offsetWidth: childWidth } = childRefCurrent;
        this.setState({
          scrollbarWidth: parentWidth - childWidth - SCROLLBAR_PADDING
        });
        this.handleScroll();
        window.addEventListener('resize', this.checkScrollbarWidthOnResize);
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkScrollbarWidthOnResize);
  }

  checkScrollbarWidthOnResize() {
    const { current: containerRefCurrent } = this.containerRef;
    const { current: childRefCurrent } = this.childRef;
    if (containerRefCurrent && childRefCurrent) {
      const { offsetWidth: parentWidth } = containerRefCurrent;
      const { offsetWidth: childWidth } = childRefCurrent;
      const newScrollBarWidth = parentWidth - childWidth - SCROLLBAR_PADDING;
      if (newScrollBarWidth !== this.state.scrollbarWidth) {
        this.setState({ scrollbarWidth: newScrollBarWidth });
      }
      this.handleScroll();
    }
  }

  handleScroll() {
    const { current: containerRefCurrent } = this.containerRef;
    if (containerRefCurrent) {
      const { scrollTop, scrollHeight, clientHeight } = containerRefCurrent;
      const shadowTopOpacity = 1 / 20 * Math.min(scrollTop, 20);
      const bottomScrollTop = scrollHeight - clientHeight;
      const shadowBottomOpacity = 1 / 20 * (bottomScrollTop
      - Math.max(scrollTop, bottomScrollTop - 20));
      this.setState({ shadowTopOpacity, shadowBottomOpacity });
    }
  }

  render() {
    const { children, scrollable } = this.props;

    if (!scrollable) return <div>{children}</div>;

    const { shadowTopOpacity, shadowBottomOpacity, scrollbarWidth } = this.state;
    const paddedScrollbarWidth = scrollbarWidth + SCROLLBAR_PADDING;

    return (
      <Wrapper scrollbarWidth={paddedScrollbarWidth}>
        <StyledModalBodyRow ref={this.containerRef} onScroll={this.handleScroll}>
          <div ref={this.childRef}>{children}</div>
        </StyledModalBodyRow>
        <BorderTop right={paddedScrollbarWidth} opacity={shadowTopOpacity} />
        <BorderBottom right={paddedScrollbarWidth} opacity={shadowBottomOpacity} />
      </Wrapper>
    );
  }
}

export default ModalBodyRow;
