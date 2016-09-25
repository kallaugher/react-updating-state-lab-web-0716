import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };

    this.updateClick = this.updateClick.bind(this);
  }

  updateClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return <button onClick={this.updateClick} >{this.state.timesClicked}</button>
  }
}

module.exports = DigitalClicker;
