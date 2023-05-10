import React, { Component } from 'react';

class Footer extends Component {
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
          <form onSubmit={this.props.handleSubmit}>
            <p>Add A Reminder</p>
            <label>
              Give yourself a good reminder. <br />
              <input
                type="text"
                // value={this.props.inputText}
                // onChange={this.props.handleInputChanged}
                id="newReminder"
              />
            </label>
            <input type="submit" value="Add Reminder" id="footerButton"></input>
          </form>
        </div>

        {/* <div className="form">
          <form>
            <p>Add A Reminder</p>
            <label htmlFor="newReminder" id="footerLabel">
              Give yourself a good reminder.
            </label>
            <input type="text" id="newReminder" name="newReminder"></input>
            <input type="submit" value="Add Reminder" id="footerButton"></input>
          </form>
        </div> */}

        {/* <button>Edit My Reminders</button> */}
      </div>
    );
  }
}

export default Footer;
