// @flow
import React from 'react';

const Plus = ({ size }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
    <path fill="none" fillRule="evenodd" stroke="#fff" strokeLinejoin="round" strokeWidth="1.25" d="M8 8H1h7V1v7zm0 0v7-7h7-7z" />
  </svg>
);

export default Plus;

Plus.defaultProps = {
  size: 16
};
