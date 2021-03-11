import { Component } from "react";

export default class StopWatch extends Component {
  state = {
    counter: 0,
  };
  startButton = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  };
  pauseButton = () => {
    clearInterval(this.timer);
  };

  resetButton = () => {
    this.setState(() => {
      clearInterval(this.timer);
      return {
        counter: 0,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div id="buttons">
          <button className="button" onClick={this.resetButton}>
            Reset
          </button>
          <button className="button" onClick={this.startButton}>
            Start
          </button>
          <button className="button" onClick={this.pauseButton}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}
