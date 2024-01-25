import React, { Component } from 'react';
import Chain from './Chain';
import CurrentWeek from './CurrentWeek';
import ButtonSection from './ButtonSection';
import Footer from './Footer';
import { CompletedChain } from './CompletedChain';

class CountdownBody extends Component {
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

    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleIntentionChanged = this.handleIntentionChanged.bind(this);
    this.handleIntentionSubmit = this.handleIntentionSubmit.bind(this);
    this.handleReminderChanged = this.handleReminderChanged.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.getReminder = this.getReminder.bind(this);
  }

  componentDidUpdate() {
    this.checkCountdownEnded();
  }

  checkCountdownEnded() {
    const { currentWeek, totalWeeks, countdownEnded } = this.state;
    if (currentWeek > totalWeeks && !countdownEnded) {
      this.setState({ countdownEnded: true });
    }
  }

  //function to update total weeks when user submits it to create a new chain
  handleInputChanged(event) {
    if (event.target.value !== '') {
      this.setState({
        inputText: event.target.value,
      });
    } else {
      alert('Please enter a number between 1 and 100!');
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      totalWeeks: Number(this.state.inputText),
      weeksLeft: Number(this.state.inputText),
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

  getReminder(callback) {
    fetch('/api')
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

  render() {
    const { countdownEnded } = this.state;

    if (countdownEnded) {
      return (
        <>
          <CompletedChain onRestart={this.handleRestart} />
        </>
      );
    } else {
      return (
        <div id="countdownBody">
          <Chain
            totalWeeks={this.state.totalWeeks}
            handleLinkClick={this.handleLinkClick}
            weeksLeft={this.state.weeksLeft}
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
          <Footer
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
        </div>
      );
    }
  }
}

export default CountdownBody;
