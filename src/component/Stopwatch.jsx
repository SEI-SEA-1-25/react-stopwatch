import { Component } from 'react'

class Stopwatch extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0,
            interval: null
        }
    }

    handleStart = e => {
        if(this.state.interval) {
            return
        }
        this.setState({
            interval: setInterval(this.incrementTime, 1000)
        })
    }

    incrementTime = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handlePause = e => {
        this.setState({
            interval: clearInterval(this.state.interval)
        })
    }

    handleReset = e => {
        this.setState({
            counter: 0
        })
        // if(this.state.interval) {
        //     this.handlePause()
        // } else {
        //     this.handleStart();
        // }
        this.state.interval ? this.handlePause() : this.handleStart()
    }

    render() {
        return (
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