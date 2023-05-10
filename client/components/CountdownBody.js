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
      totalWeeks: 3,
      weeksLeft: 3,
      currentWeek: 1,
    };

    //don't forget to bind any functionality with this
    this.handleInputChanged = this.handleInputChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  //function to update total weeks when user submits it to create a new chain
  handleInputChanged(event) {
    console.log('You updated the text in the text box!');
    this.setState({
      inputText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('You clicked submit!');
    this.setState({
      totalWeeks: Number(this.state.inputText),
      weeksLeft: Number(this.state.inputText),
      inputText: '',
    });
  }

  handleLinkClick(event) {
    event.preventDefault();
    console.log('You clicked a link!');
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
        <ButtonSection totalWeeks={this.state.totalWeeks} />
        <Footer
          totalWeeks={this.state.totalWeeks}
          inputText={this.state.inputText}
          handleInputChanged={this.handleInputChanged}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default CountdownBody;
