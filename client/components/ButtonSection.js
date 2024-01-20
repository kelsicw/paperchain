import React, { Component } from 'react';

class ButtonSection extends Component {
  constructor(props) {
    super(props);

    this.getReminder = this.getReminder.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getReminder() {
    console.log('You clicked Need A Reminder!');
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        console.log('Reminder retrieved: ', data);
        // this.props.handleReminderChanged({ target: { value: '' } });
      });
  }

  openModal(event) {
    event.preventDefault();
    const modal = document.querySelector('#modal');

    this.getReminder();

    modal.showModal();
  }

  closeModal(event) {
    event.preventDefault();
    const modal = document.querySelector('#modal');
    modal.close();
  }

  render() {
    let retrievedReminder = '';

    return (
      <div id="buttons-section">
        <p id="intentionText">{this.props.intention}</p>
        <button className="main-button open-button" onClick={this.openModal}>
          Need a reminder?
        </button>
        <dialog className="modal" id="modal">
          <button
            className="secondary-button close-button"
            onClick={this.closeModal}
          >
            X
          </button>
          <h2>Remember: {retrievedReminder}</h2>
          <p>Here is your reminder</p>
        </dialog>
      </div>
    );
  }
}

export default ButtonSection;
