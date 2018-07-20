// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {localizeMessage} from 'utils/utils.jsx';

export default class MattermostLogo extends React.PureComponent {
  render() {
    return (
      <span {...this.props}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="152.000000pt" height="152.000000pt" viewBox="0 0 152.000000 152.000000"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,152.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M0 760 l0 -760 760 0 760 0 0 760 0 760 -760 0 -760 0 0 -760z m1246
      464 c-3 -9 -6 -225 -6 -480 l0 -464 -480 0 -480 0 0 480 0 480 486 0 c439 0
      486 -2 480 -16z"/>
      <path d="M330 760 l0 -430 430 0 430 0 0 430 0 430 -430 0 -430 0 0 -430z
      m328 109 l3 -34 -106 -42 -105 -41 0 38 0 39 61 17 c33 9 56 20 52 24 -4 4
      -32 15 -60 25 -52 16 -53 17 -53 55 l0 39 103 -43 c99 -41 102 -43 105 -77z
      m222 -159 l0 -30 -105 0 -105 0 0 30 0 30 105 0 105 0 0 -30z"/>
      </g>
      </svg>
      </span>
    );
  }
}

const style = {
  background: {
    enableBackground: 'new 0 0 500 500',
  },
  st0: {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  },
};
