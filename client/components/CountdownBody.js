import React, { Component } from 'react';
import Chain from './Chain';
import CurrentWeek from './CurrentWeek';
import ButtonSection from './ButtonSection';
import Footer from './Footer';

class CountdownBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWeeks: 3,
    };

    //function to update total weeks when user submits it to create a new chain

    //don't forget to bind any functionality with this
  }

  render() {
    return (
      <div id="countdownBody">
        <Chain totalWeeks={this.state.totalWeeks} />
        <CurrentWeek totalWeeks={this.state.totalWeeks} />
        <ButtonSection totalWeeks={this.state.totalWeeks} />
        <Footer />
      </div>
    );
  }
}

export default CountdownBody;
