import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();

    this.addReminderToDB = this.addReminderToDB.bind(this);
  }

  addReminderToDB(event, value) {
    event.preventDefault();
    // console.log('You clicked Add Reminder!');
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
        console.log('Reminder added: ', data);
        this.props.handleReminderChanged({ target: { value: '' } });
      });
  }

  render() {
    return (
      <div id="footer">
        <div className="form">
          <form onSubmit={this.props.handleSubmit}>
            <p>Create A New Chain</p>
            <label>
              How many weeks until your event? <br />
              <input
                type="text"
                value={this.props.inputText}
                onChange={this.props.handleInputChanged}
                id="newChainText"
              />
            </label>
            <input type="submit" value="Create Chain" id="footerButton"></input>
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
              />
            </label>
            <input
              type="submit"
              value="Set Intention"
              id="footerButton"
            ></input>
          </form>
        </div>

        <div className="form">
          <form
            onSubmit={() =>
              this.addReminderToDB(event, this.props.reminderInput)
            }
          >
            {/* Need to update the handler function for onSubmit */}
            <p>Add A Reminder</p>
            <label>
              Give yourself some encouragement. <br />
              <input
                type="text"
                value={this.props.reminderInput}
                onChange={this.props.handleReminderChanged}
                id="newReminder"
              />
            </label>
            <input type="submit" value="Add Reminder" id="footerButton"></input>
          </form>
        </div>

        {/* <button>Edit My Reminders</button> */}
      </div>
    );
  }
}

export default Footer;
