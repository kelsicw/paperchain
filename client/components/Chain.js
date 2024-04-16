// Import the necessary React components
import React, { Component } from 'react';
import ChainLink from './ChainLink.js';

// Define the Chain component
class Chain extends Component {
  render() {
    // Define an array of colors for the chain links
    const chainLinkColors = [
      '#cd7029',
      '#c77874',
      '#45a6ab',
      '#8cc7d0',
      '#c9e3e3',
      '#8f9261',
      '#db9828',
    ];

    // Initialize an empty array to store the chain links and a currentColor variable to keep track of the color index
    const chainLinks = [];
    let currentColor = 0;

    // Loop through the number of weeks left and create chain links to represent each week
    for (let i = 0; i < this.props.weeksLeft; i++) {
      const style = {
        border: `10px solid ${chainLinkColors[currentColor]}`,
        borderWidth: '22px 2px',
      };

      // Wrap the color index back to the beginner if it reaches the last color in the chainLinkColors array
      if (currentColor === 6) currentColor = -1;

      // Add the current chain link to the chainLinks array
      chainLinks.push(
        <ChainLink
          key={i}
          id={`chainLink${i + 1}`}
          style={style}
          handleLinkClick={this.props.handleLinkClick}
        />
      );
      currentColor++;
    }

    // Render the chain
    return <div id="chain">{chainLinks}</div>;
  }
}

export default Chain;
