import React, { Component } from 'react';

class CurrentWeek extends Component {
  render() {
    console.log('currentWeek: ', this.props.currentWeek);
    console.log('totalWeeks: ', this.props.totalWeeks);
    console.log('weeksLeft: ', this.props.weeksLeft);
    if (this.props.currentWeek > this.props.totalWeeks) {
      return (
        <div id="finished">
          <h2 id="finishedText">YOU MADE IT!</h2>
        </div>
      );
    } else {
      return (
        <div id="current-week">
          <p>You're in</p>
          <h2>WEEK {this.props.currentWeek}</h2>
          <p id="weeksToGo">{this.props.weeksLeft} weeks to go!</p>
        </div>
      );
    }
  }
}

export default CurrentWeek;
