// Import the necessary React components
import React, { Component } from 'react';

// Functional component to display the "weeks to go" message when it's plural
function PluralWeeksLeft(props) {
  return <p id="weeksToGo">{props.weeksLeft} weeks to go!</p>;
}

// Functional component to display the "week to go" message when it's singular
function SingleWeekLeft(props) {
  return <p id="weeksToGo">{props.weeksLeft} week to go!</p>;
}

// Define the CurrentWeek component
class CurrentWeek extends Component {
  render() {
    let paragraph;
    // Determine whether to display the plural or singular weeks left component
    if (this.props.weeksLeft > 1) {
      paragraph = <PluralWeeksLeft weeksLeft={this.props.weeksLeft} />;
    } else {
      paragraph = <SingleWeekLeft weeksLeft={this.props.weeksLeft} />;
    }

    // Render the current week information
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
