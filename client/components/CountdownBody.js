import React, { Component } from 'react';
import Chain from './Chain';
import CurrentWeek from './CurrentWeek';
import ButtonSection from './ButtonSection';
import Footer from './Footer';

class CountdownBody extends Component {
  render() {
    return (
      <div id="countdownBody">
        <Chain />
        <CurrentWeek />
        <ButtonSection />
        <Footer />
      </div>
    );
  }
}

export default CountdownBody;
