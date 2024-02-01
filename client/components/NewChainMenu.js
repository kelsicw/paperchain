import React, { Component } from 'react';

class NewChainMenu extends Component {
  constructor() {
    super();

    this.addReminderToDB = this.addReminderToDB.bind(this);
  }

  addReminderToDB(event) {
    event.preventDefault();
    const input = this.props.reminderInput;
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({ reminder: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.handleReminderChanged({ target: { value: '' } });
      });
  }

  render() {
    return (
      <div id="new-chain-menu">
        <label className="menu-button-wrapper">
          <input type="checkbox" id="menu-button" />
          <div className="icon-wrapper">
            <label className="add-item">
              <input className="add-item-input" type="checkbox" />
              <span className="add-symbol">+</span>
            </label>
          </div>
          <div id="item-list">
            <div id="forms-container">
              <div className="form" id="create-new-chain-form">
                <form onSubmit={this.props.handleSubmit}>
                  <p>Create A New Chain</p>
                  <label className="custom-label">
                    How many weeks until your event? <br />
                    <input
                      type="number"
                      max="100"
                      min="1"
                      value={this.props.inputText}
                      onChange={this.props.handleInputChanged}
                      id="newChainText"
                      name="newChainText"
                      required
                    />
                  </label>
                  <input
                    type="submit"
                    value="Create Chain"
                    className="secondary-button"
                  ></input>
                </form>
              </div>

              <div className="form" id="set-intention-form">
                <form onSubmit={this.props.handleIntentionSubmit}>
                  <p>Set Your Intention</p>
                  <label className="custom-label">
                    What is your 'why' for this process? <br />
                    <input
                      type="text"
                      value={this.props.intentionInput}
                      onChange={this.props.handleIntentionChanged}
                      id="newIntentionText"
                      name="newIntentionText"
                      required
                    />
                  </label>
                  <input
                    type="submit"
                    value="Set Intention"
                    className="secondary-button"
                  ></input>
                </form>
              </div>

              <div className="form" id="add-reminder-form">
                <form onSubmit={this.addReminderToDB}>
                  <p>Add A Reminder</p>
                  <label className="custom-label">
                    Give yourself some encouragement. <br />
                    <input
                      type="text"
                      value={this.props.reminderInput}
                      onChange={this.props.handleReminderChanged}
                      id="newReminder"
                      name="newReminder"
                      required
                    />
                  </label>
                  <input
                    type="submit"
                    value="Add Reminder"
                    className="secondary-button"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </label>
      </div>
    );
  }
}

export default NewChainMenu;
