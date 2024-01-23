import React, { Component } from 'react';

function PluralWeeksLeft(props) {
  return <p id="weeksToGo">{props.weeksLeft} weeks to go!</p>;
}

function SingleWeekLeft(props) {
  return <p id="weeksToGo">{props.weeksLeft} week to go!</p>;
}

class CurrentWeek extends Component {
  render() {
    let paragraph;
    if (this.props.weeksLeft > 1) {
      paragraph = <PluralWeeksLeft weeksLeft={this.props.weeksLeft} />;
    } else {
      paragraph = <SingleWeekLeft weeksLeft={this.props.weeksLeft} />;
    }

    return (
      <div id="current-week">
        <p>You're in</p>
        <h2>WEEK {this.props.currentWeek}</h2>
        {paragraph}
      </div>
    );
  }
}

export default CurrentWeek;
