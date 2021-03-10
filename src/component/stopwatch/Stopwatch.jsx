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
    incrementTime = () => {
        this.setState({
            counter: this.state.counter + 1
        }, () => console.log('plus one to the thyme'))
    }

    handleReset = (e) => {
        this.setState({
            counter: 0
        })
        this.state.interval ? this.handlePause() : this.handleStart()
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
        this.setState({
            interval: clearInterval(this.state.interval)
        }, () => console.log('pause'))
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter} </h1>

                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handlePause}>Pause</button>
            </div>
        )
    }
}