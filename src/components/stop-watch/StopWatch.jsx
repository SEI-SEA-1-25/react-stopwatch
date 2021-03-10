//Imports//
import { Component } from "react";

export default class Stopwatch extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      isTimerOn: null,
    };
  }

  //handlers//
  handleStart = (e) => {
    if (this.state.interval) {
      return;
    }
    this.setState({
      isTimerOn: setInterval(this.incrementTime, 1000),
    });
  };

  incrementTime = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handlePause = (e) => {
    this.setState({
      isTimerOn: clearInterval(this.state.interval),
    });
  };

  handleReset = (e) => {
    this.setState({
      counter: 0,
    });
    if (this.state.interval) {
      this.handlePause();
    } else {
      this.handleStart();
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div>
          <button onClick={this.handleStart}>start</button>
          <button onClick={this.handlePause}>pause</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
        <img src="https://i.imgur.com/HZzV5sJ.gif" />
      </div>
    );
  }
}
