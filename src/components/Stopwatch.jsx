import React, { Component } from 'react'

export default class Stopwatch extends Component{
    state = {
        counter: 0,
        interval: ''
    }

handleReset = (e) => {
    clearInterval(this.state.interval)
    this.setState({
        counter: 0
    })
}

handleStart = (e) => {
    if(this.state.interval){
        return
    } else {
        this.setState({
            interval: setInterval(this.timerOn, 1000)
        })
    }
}

timerOn = () => {
    this.setState({
        counter: this.state.counter + 1
    })
}

handlePause = () => {
    clearInterval(this.state.interval)
}

    rendeer() {
        return(
            <div>
            <h1>{this.state.counter}</h1>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handlePause}>Pause</button>  
            </div>
        )
    }
}