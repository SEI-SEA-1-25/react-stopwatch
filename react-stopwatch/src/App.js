import ClockFace from "./ClockFace.svg";
import SecHand from "./SecondHand.svg";

import "./App.css";
import Stopwatch from "./components/stopwatch/Stopwatch";

function App() {
  return (
    <div className="App">
      <img src={ClockFace} className="App-logo-face" alt="logo" />
      <img src={SecHand} className="App-logo-sec" alt="logo" />
      <img src={SecHand} className="App-logo-min" alt="logo" />
      <p></p>
      <Stopwatch />
    </div>
  );
}

export default App;
