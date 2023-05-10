import React, { Component } from 'react';
import ChainLink from './ChainLink.js';

class Chain extends Component {
  // TODO: put render logic for creating the correct number of chain links here

  render() {
    const chainLinkColors = [
      '#db9828',
      '#cd7029',
      '#c77874',
      '#45a6ab',
      '#8cc7d0',
      '#c9e3e3',
      '#8f9261',
    ];

    const chainLinks = [];
    let currentColor = 0;

    for (let i = 0; i < this.props.totalWeeks; i++) {
      const style = {
        border: `10px solid ${chainLinkColors[currentColor]}`,
        borderWidth: '22px 2px',
      };

      if (i > chainLinkColors.length - 1) currentColor = 0;
      chainLinks.push(
        <ChainLink key={i} id={`chainLink${i + 1}`} style={style} />
      );
      currentColor++;
    }
    console.log('chainLinks array: ', chainLinks);

    return <div id="chain">{chainLinks}</div>;
  }
}

export default Chain;
