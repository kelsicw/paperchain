import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="form">
          <form>
            <p>Create A New Chain</p>
            <label htmlFor="newChainText" id="footerLabel">
              How many weeks until your event?
            </label>
            <input type="text" id="newChainText" name="newChainText"></input>
            <input type="submit" value="Create Chain" id="footerButton"></input>
          </form>
        </div>

        <div className="form">
          <form>
            <p>Add A Reminder</p>
            <label htmlFor="newReminder" id="footerLabel">
              Give yourself a good reminder.
            </label>
            <input type="text" id="newReminder" name="newReminder"></input>
            <input type="submit" value="Add Reminder" id="footerButton"></input>
          </form>
        </div>

        {/* <button>Add A Reminder</button>
       <button>Edit My Reminders</button> */}
      </div>
    );
  }
}

export default Footer;
