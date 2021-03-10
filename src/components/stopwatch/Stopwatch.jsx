import { Component } from 'react'

class Stopwatch extends Component {
    state = {
        counter: 0,
        currentInterval: ''
    }
    handleStart = (e) =>  {
        this.setState({
            currentInterval: setInterval(this.count, 1000)
        })
        //i do not fully understand set interval... 
    }
    count = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleReset = (e) => {
        this.setState({
            clearInterval
        })
    }
    handlePause = (e) => {

    }
    render () {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <div>
                    <button onClick={this.handleReset}>reset</button>
                    <button onClick={this.handleStart}>start</button>
                    <button onClick={this.handlePause}>pause</button>
                </div>
            </div>
        )
    }
}

export default Stopwatch;