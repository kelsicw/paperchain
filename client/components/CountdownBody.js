import React, { Component } from 'react';
import Chain from './Chain';
import CurrentWeek from './CurrentWeek';
import ButtonSection from './ButtonSection';
import Footer from './Footer';

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
    };

    //don't forget to bind any functionality with this
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handleIntentionChanged = this.handleIntentionChanged.bind(this);
    this.handleIntentionSubmit = this.handleIntentionSubmit.bind(this);
    this.handleReminderChanged = this.handleReminderChanged.bind(this);
  }

  //function to update total weeks when user submits it to create a new chain
  handleInputChanged(event) {
    // console.log('You updated the text in the text box!');
    this.setState({
      inputText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('You clicked submit!');
    this.setState({
      totalWeeks: Number(this.state.inputText),
      weeksLeft: Number(this.state.inputText),
      inputText: '',
    });
  }

  handleIntentionChanged(event) {
    // console.log('You updated the intention text box!');
    this.setState({
      intentionInput: event.target.value,
    });
  }

  handleIntentionSubmit(event) {
    event.preventDefault();
    // console.log('You clicked submit for the intention!');
    this.setState({
      intention: `Remember, your intention is to ${this.state.intentionInput}`,
      intentionInput: '',
    });
    // console.log('intentionInput: ', this.state.intentionInput);
    // console.log('intention: ', this.state.intention);
  }

  handleReminderChanged(event) {
    // console.log('You updated the reminder text box!');
    this.setState({
      reminderInput: event.target.value,
    });
  }

  handleLinkClick(event) {
    event.preventDefault();
    // console.log('You clicked a link!');
    this.setState({
      totalWeeks: this.state.totalWeeks,
      inputText: '',
      weeksLeft: this.state.weeksLeft - 1,
      currentWeek: this.state.currentWeek + 1,
    });
  }

  render() {
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

export default CountdownBody;
