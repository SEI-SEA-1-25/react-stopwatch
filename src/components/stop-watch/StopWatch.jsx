import { Component } from "react";

export default class Stopwatch extends Component {
  state = {
    counter: 0,
    isTimerOn: false,
  };
  //event handlers//
  handleStart = () => {
    this.setState({ runningTime: 5, isTimerOn: true }, () =>
      console.log("starting the timer!", this.state)
    );
  };
  handleReset = () => {
    this.setState({ runningTime: 0, isTimerOn: false }, () =>
      console.log("resetting the timer!", this.state)
    );
  };
  ///

  render() {
    const { isTimerOn, runningTime } = this.state;
    return (
      <div id="main-container">
        <h1>{runningTime}</h1>
        <div id="button-container">
          <button onClick={this.handleStart}>start</button>
          <button>pause</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      </div>
    );
  }
}
