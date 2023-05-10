import React, { Component } from 'react';

class CurrentWeek extends Component {
  render() {
    // TODO: Instead of hard coding week 1 below, put logic here to make it change depending on the current state
    return (
      <div id="current-week">
        Week <br />
        {this.props.currentWeek}
      </div>
    );
  }
}

export default CurrentWeek;
