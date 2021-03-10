import { Component } from 'react'

class Stopwatch extends Component {
    // constructor (props) {
    //     super(props)
    //     this.state = {
    //         counter: 0,
    //         currentInterval: ''
    //     }
    // }
    state = {
        counter: 0,
        currentInterval: null
    }
    handleStart = (e) =>  {
        if(this.state.currentInterval) {
            return
        } else {
            this.setState({
                currentInterval: setInterval(this.count, 1000)
            })

        }
        //i do not fully understand set interval... 
    }
    count = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    handleReset = (e) => {
        clearInterval(this.state.currentInterval)
        this.setState({
            counter: 0,
            currentInterval: null
        })
    }
    handlePause = (e) => {
        clearInterval(this.state.currentInterval)
        this.setState({ interval: null })
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