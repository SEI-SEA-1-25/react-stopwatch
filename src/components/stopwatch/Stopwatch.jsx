import { Component } from 'react'

class Stopwatch extends Component {
    state = {
        counter: 0,
        currentInterval: ''
    }
    count = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleStart = (e) =>  {
        this.setState({
            currentInterval: setInterval(this.count, 1000)
        })
        //i do not fully understand set interval... 
    }
    handleReset = (e) => {
        this.setState({
            currentInterval: clearInterval(),
            counter: 0
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