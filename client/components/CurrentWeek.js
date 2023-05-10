import React, { Component } from 'react';

class CurrentWeek extends Component {
  render() {
    // TODO: Instead of hard coding week 1 below, put logic here to make it change depending on the current state
    console.log('currentWeek: ', this.props.currentWeek);
    console.log('totalWeeks: ', this.props.totalWeeks);
    console.log('weeksLeft: ', this.props.weeksLeft);
    if (this.props.currentWeek > this.props.totalWeeks) {
      return <div id="current-week">You did it!</div>;
    } else {
      return (
        <div id="current-week">
          Week <br />
          {this.props.currentWeek}
        </div>
      );
    }
  }
}

export default CurrentWeek;
