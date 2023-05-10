import React, { Component } from 'react';
import ChainLink from './ChainLink.js';

class Chain extends Component {
  // TODO: put render logic for creating the correct number of chain links here
  render() {
    return (
      <div id="chain">
        <ChainLink />
        <ChainLink />
        <ChainLink />
        <ChainLink />
        <ChainLink />
        <ChainLink />
      </div>
    );
  }
}

export default Chain;
