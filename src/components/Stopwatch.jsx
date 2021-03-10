import { Component } from 'react';

class Stopwatch extends Component {
    state = {
        counter: 0,
        interval: null
    }
    handleReset = () => {
        clearInterval(this.state.interval)
        this.setState({
            counter: 0
        })
    }
    handleStart = () => {
        this.setState({
            interval: setInterval(this.incrementTime, 1000)
        })
    }
    incrementTime = () => {
        this.setState ({
            counter: this.state.counter + 1
        })
    }
    handlePause = () => {
        clearInterval(this.state.interval)
    }
    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <div>
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.handleStart}>Start</button>
                    <button onClick={this.handlePause}>Pause</button>
                </div>
            </div>
        )
    }
}

export default Stopwatch