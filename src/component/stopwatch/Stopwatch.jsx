import { Component } from 'react'

export default class Stopwatch extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            interval: null
        }
    }
    // event handlers
    handleReset = (e) => {


        console.log('reset works')
    }

    handleStart = (e) => {
        if (this.state.interval) {
            return
        } this.setState({
            interval: setInterval(this.incrementTime, 1000)
        }, () => console.log('rev up those fryers'))
    }

    handlePause = (e) => {
        console.log('pause')
    }

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