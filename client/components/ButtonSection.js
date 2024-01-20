import React, { Component } from 'react';

class ButtonSection extends Component {
  constructor() {
    super();

    this.getReminder = this.getReminder.bind(this);
  }

  getReminder(event) {
    event.preventDefault();
    console.log('You clicked Need A Reminder!');
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        console.log('Reminder retrieved: ', data);
        // this.props.handleReminderChanged({ target: { value: '' } });
      });
  }

  render() {
    return (
      <div id="buttons-section">
        <p id="intentionText">{this.props.intention}</p>
        <button className="main-button" onClick={this.getReminder}>
          Need a reminder?
        </button>
      </div>
    );
  }
}

export default ButtonSection;
