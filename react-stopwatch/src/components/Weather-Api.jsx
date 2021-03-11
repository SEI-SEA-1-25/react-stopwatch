import { Component } from "react";

class Weather extends Component {
  state = {
    // Your required states here
   zipcode
  };

  handleChange = (event) => {
    this.setState({ zipcode: event.target.value }, () => {
      console.log("Your zip code is", this.state.zipcode);
    });
  };

  handleSubmit = (event) => {
    // Your fetch call here
    api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={75368d6b1d2ac84a89a42ae13988cbfc}
    // Your state updates go under function(json)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="zipcode">
            Please enter your zip code for the weather:
          </label>
          <input id="zipcode" type="text" onChange={this.handleChange} />
          <input type="submit" value="Get my forecast!" />
        </form>
        <div>{/* Display weather information here */}</div>
      </div>
    );
  }
}

export default Weather;
