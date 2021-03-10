import { Component } from 'react' 
import StopwatchCounter from '../Stopwatch-Counter/StopwatchCounter'

export default class Stopwatch extends Component {
    
    state = {
        counter: 0,
    }

    handleStart = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter +1
            }
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