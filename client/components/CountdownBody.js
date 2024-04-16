// Import necessary dependencies
import React, { Component } from 'react';
import Chain from './Chain';
import CurrentWeek from './CurrentWeek';
import ButtonSection from './ButtonSection';
import NewChainMenu from './NewChainMenu';
import { CompletedChain } from './CompletedChain';
import UserTour from './UserTour';

// Define the main CountdownBody component
class CountdownBody extends Component {
  // Initialize the component's state
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      intentionInput: '',
      intention: '',
      totalWeeks: 4,
      weeksLeft: 4,
      currentWeek: 1,
      reminderInput: '',
      countdownEnded: false,
      retrievedReminder: '',
      needReminderClicked: false,
    };

    // Bind event handler functions to the component instance
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleIntentionChanged = this.handleIntentionChanged.bind(this);
    this.handleIntentionSubmit = this.handleIntentionSubmit.bind(this);
    this.handleReminderChanged = this.handleReminderChanged.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.getReminder = this.getReminder.bind(this);
  }

  // Check if the countdown has ended and update state accordingly
  componentDidUpdate() {
    this.checkCountdownEnded();
  }

  // Update the countdownEnded state if the current week exceeds the total weeks
  checkCountdownEnded() {
    const { currentWeek, totalWeeks, countdownEnded } = this.state;
    if (currentWeek > totalWeeks && !countdownEnded) {
      this.setState({ countdownEnded: true });
    }
  }

  // The following are event handler functions for various user interactions (creating a new chain, setting an intention, etc.)
  handleInputChanged(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      totalWeeks: Number(this.state.inputText),
      weeksLeft: Number(this.state.inputText),
      currentWeek: 1,
      inputText: '',
    });
  }

  handleIntentionChanged(event) {
    this.setState({
      intentionInput: event.target.value,
    });
  }

  handleIntentionSubmit(event) {
    event.preventDefault();
    this.setState({
      intention: `Remember your intention: ${this.state.intentionInput}`,
      intentionInput: '',
    });
  }

  handleReminderChanged(event) {
    this.setState({
      reminderInput: event.target.value,
    });
  }

  handleLinkClick(event) {
    event.preventDefault();
    this.setState({
      totalWeeks: this.state.totalWeeks,
      inputText: '',
      weeksLeft: this.state.weeksLeft - 1,
      currentWeek: this.state.currentWeek + 1,
    });
  }

  handleRestart() {
    this.setState({
      inputText: '',
      intentionInput: '',
      intention: '',
      totalWeeks: 4,
      weeksLeft: 4,
      currentWeek: 1,
      reminderInput: '',
      countdownEnded: false,
      retrievedReminder: '',
      needReminderClicked: false,
    });
  }

  // Function to fetch a reminder from the server
  getReminder(callback) {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    fetch(`${baseUrl}/api`)
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            retrievedReminder: data,
          },
          () => {
            if (callback) {
              callback();
            }
          }
        );
      });
  }
  // Render the CountdownBody component
  render() {
    const { countdownEnded } = this.state;
    // If the countdown has ended, render the CompletedChain component
    if (countdownEnded) {
      return (
        <>
          <CompletedChain onRestart={this.handleRestart} />
        </>
      );
    }
    // Otherwise, render the main countdown components (the chain, new chain menu, current week, etc.)
    else {
      return (
        <div id="countdownBody">
          <Chain
            totalWeeks={this.state.totalWeeks}
            handleLinkClick={this.handleLinkClick}
            weeksLeft={this.state.weeksLeft}
          />
          <div id="main-countdown">
            <NewChainMenu
              totalWeeks={this.state.totalWeeks}
              inputText={this.state.inputText}
              intentionInput={this.state.intentionInput}
              intention={this.state.intention}
              handleInputChanged={this.handleInputChanged}
              handleSubmit={this.handleSubmit}
              handleIntentionChanged={this.handleIntentionChanged}
              handleIntentionSubmit={this.handleIntentionSubmit}
              reminderInput={this.state.reminderInput}
              handleReminderChanged={this.handleReminderChanged}
            />
            <CurrentWeek
              totalWeeks={this.state.totalWeeks}
              currentWeek={this.state.currentWeek}
              weeksLeft={this.state.weeksLeft}
            />
            <ButtonSection
              totalWeeks={this.state.totalWeeks}
              intention={this.state.intention}
              retrievedReminder={this.state.retrievedReminder}
              getReminder={this.getReminder}
              needReminderClicked={this.state.needReminderClicked}
            />
          </div>
          <UserTour />
        </div>
      );
    }
  }
}

export default CountdownBody;
