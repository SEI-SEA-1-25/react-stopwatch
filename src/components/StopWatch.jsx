import {Component} from 'react'


export default class StopWatch extends Component {
state = {
    counter: 0
}
    handleStart = () => {
       this.timer = setInterval(() => {
            this.setState(prevState => ({
                counter: prevState.counter + 1,
            }))
        }, 1000)
    }
    handlePause = () => {
        clearInterval(this.timer)
    }

    handleReset = () => {
        this.setState(() => {
            clearInterval(this.timer)
            return{
                counter: 0
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <div id='buttons'>
                    <button className='button' onClick={this.handleReset}>Reset</button>
                    <button className='button' onClick={this.handleStart}>Start</button>
                    <button className='button' onClick={this.handlePause}>Pause</button>
                </div>
            </div>
        )
    }
}