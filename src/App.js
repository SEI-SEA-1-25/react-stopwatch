import { Component } from "react";
import Stopwatch from "./components/stop-watch/Stopwatch";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Stopwatch />
      </div>
    );
  }
}
