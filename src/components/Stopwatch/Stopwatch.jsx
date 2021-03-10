import { Component } from 'react' 
import StopwatchCounter from '../Stopwatch-Counter/StopwatchCounter'

export default class Stopwatch extends Component {
    
    state = {
        counter: 0,
        interval: ''
    }

    incrementInterval = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    handleStart = () => {
        if(this.state.interval) {
            return
        } else {
            this.setState({
                interval: setInterval(this.incrementInterval, 1000)
            })
        }
    }

    handlePause = () => {
        if(this.state.interval === null) {
            return
        } else {
            this.setState({
                interval: clearInterval(this.state.interval)
            })
        }
    }

    handleReset = () => {
        this.setState({
            counter: 0,
            interval: null
        })
    }
    
    render () {
        return (
            <div>
                <StopwatchCounter counter={this.state.counter}/>
                <div>
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.handleStart}>Start</button>
                    <button onClick={this.handlePause}>Pause</button>
                </div>
            </div>
        )
    }
}