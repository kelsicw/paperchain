// Import the necessary React components
import React, { Component } from 'react';

// Define the ChainLink component
class ChainLink extends Component {
  render() {
    // Render a button element with the provided styles and click handler so that each link can be clicked to remove it from the chain
    return (
      <button
        className="chain-link"
        style={this.props.style}
        onClick={this.props.handleLinkClick}
      >
        &#10003;
      </button>
    );
  }
}

export default ChainLink;
