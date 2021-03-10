import { Component } from 'react'
import './Stopwatch.css'

export default class Stopwatch extends Component {

    state = {
        counter: 0,
        interval: null
    }

    timer = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    handleStart = () => {
        this.intervalID = setInterval(this.timer, 1000)
        
    }
    handleReset = () => {
        this.setState(() => {
            return {
                counter: 0
            }
        })
        clearInterval(this.intervalID)
    }
    handlePause = () => {
        clearInterval(this.intervalID)
    }

    render () {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button 
                    onClick={this.handleReset}
                    disabled={this.state.counter === 0}
                >RESET</button>

                <button 
                    onClick={this.handleStart}
                    disabled={this.state.counter > 0}
                >START</button>

                <button 
                    onClick={this.handlePause}
                    disabled={this.state.counter === 0}
                >PAUSE</button>
            </div>
        )
    }
}