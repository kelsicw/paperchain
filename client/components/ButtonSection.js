// Import the necessary React components
import React, { Component } from 'react';

// Define the ButtonSection component
class ButtonSection extends Component {
  constructor(props) {
    super(props);

    // Bind event handler methods to the component instance
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleGetReminder = this.handleGetReminder.bind(this);
  }

  // Open the modal dialog
  openModal() {
    const modal = document.querySelector('#modal');
    modal.showModal();
  }

  // Close the modal dialog
  closeModal(event) {
    event.preventDefault();
    const modal = document.querySelector('#modal');
    modal.close();
  }

  // Handle the "Need a reminder?" button click
  handleGetReminder(event) {
    event.preventDefault();
    this.props.getReminder(() => {
      this.openModal();
    });
  }

  render() {
    // Render the buttons section with the intention text, the reminder button, and the modal dialog
    return (
      <div id="buttons-section">
        <p id="intentionText">{this.props.intention}</p>
        <button
          className="main-button open-button"
          id="need-reminder-button"
          onClick={this.handleGetReminder}
        >
          Need a reminder?
        </button>
        <dialog className="modal" id="modal">
          <button id="close-button" onClick={this.closeModal}>
            X
          </button>
          <div id="reminder-and-button">
            <h2>{this.props.retrievedReminder}</h2>
            <button
              className="secondary-button"
              id="another-reminder-button"
              onClick={this.handleGetReminder}
            >
              Get Another Reminder
            </button>
          </div>
        </dialog>
      </div>
    );
  }
}

export default ButtonSection;
