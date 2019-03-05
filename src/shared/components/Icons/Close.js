// @flow
import React from 'react';

type Props = {
  width?: number,
  height?: number
}

const Close = ({ width, height }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 12 12">
    <path fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M6 6L1 1l5 5 5-5-5 5zm0 0l5 5-5-5-5 5 5-5z" />
  </svg>
);

Close.defaultProps = {
  width: 12,
  height: 12
};

export default Close;
