import React, { Component } from 'react';

class ButtonSection extends Component {
  render() {
    return (
      <div id="buttons-section">
        <p id="intentionText">{this.props.intention}</p>
        <button>I need a reminder</button>
      </div>
    );
  }
}

export default ButtonSection;
