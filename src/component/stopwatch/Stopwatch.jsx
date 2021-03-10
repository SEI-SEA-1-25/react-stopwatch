import { Component } from 'react'

export default class Stopwatch extends Component {
    render() {
        return (
            <div>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handlePause}>Pause</button>
            </div>
        )
    }
}