import React, { Component } from 'react';

class ChainLink extends Component {
  render() {
    return (
      <button className="chain-link" style={this.props.style}>
        &#10003;
      </button>
    );
  }
}

export default ChainLink;
