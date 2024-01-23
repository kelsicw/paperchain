import React, { Component } from 'react';
// import paperchainLink from '../../public/paperchainLink.png';

class ButtonSection extends Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleGetReminder = this.handleGetReminder.bind(this);
  }

  openModal() {
    const modal = document.querySelector('#modal');
    modal.showModal();
  }

  closeModal(event) {
    event.preventDefault();
    const modal = document.querySelector('#modal');
    modal.close();
  }

  handleGetReminder(event) {
    event.preventDefault();
    this.props.getReminder(() => {
      this.openModal();
    });
  }

  render() {
    return (
      <div id="buttons-section">
        <p id="intentionText">{this.props.intention}</p>
        <button
          className="main-button open-button"
          onClick={this.handleGetReminder}
        >
          Need a reminder?
        </button>
        <dialog className="modal" id="modal">
          <button id="close-button" onClick={this.closeModal}>
            X
          </button>
          {/* <img src={paperchainLink} /> */}
          <h2>{this.props.retrievedReminder}</h2>
        </dialog>
      </div>
    );
  }
}

export default ButtonSection;
