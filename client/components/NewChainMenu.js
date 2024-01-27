import React, { Component } from 'react';

class NewChainMenu extends Component {
  constructor() {
    super();

    this.addReminderToDB = this.addReminderToDB.bind(this);
  }

  addReminderToDB(event, value) {
    event.preventDefault();
    const input = value;
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
        <label class="menu-button-wrapper" for="">
          <input type="checkbox" class="menu-button" />
          <div class="icon-wrapper">
            <label class="hamburger">
              <input class="hamburger-input" type="checkbox" />
              <span class="hamburger-line first"></span>
              <span class="hamburger-line second"></span>
              <span class="hamburger-line third"></span>
            </label>
          </div>
          <div class="item-list">
            <div className="form">
              <form onSubmit={this.props.handleSubmit}>
                <p>Create A New Chain</p>
                <label>
                  How many weeks until your event? <br />
                  <input
                    type="number"
                    max="100"
                    min="1"
                    value={this.props.inputText}
                    onChange={this.props.handleInputChanged}
                    id="newChainText"
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

            <div className="form">
              <form onSubmit={this.props.handleIntentionSubmit}>
                <p>Set Your Intention</p>
                <label>
                  What is your 'why' for this process? <br />
                  <input
                    type="text"
                    value={this.props.intentionInput}
                    onChange={this.props.handleIntentionChanged}
                    id="newIntentionText"
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

            <div className="form">
              <form
                onSubmit={() =>
                  this.addReminderToDB(event, this.props.reminderInput)
                }
              >
                <p>Add A Reminder</p>
                <label>
                  Give yourself some encouragement. <br />
                  <input
                    type="text"
                    value={this.props.reminderInput}
                    onChange={this.props.handleReminderChanged}
                    id="newReminder"
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
        </label>
      </div>
    );
  }
}

export default NewChainMenu;
