import { Component } from 'react'

export default class Stopwatch extends Component {




    state = {
        timer: 0,
        interval: null
    }

    temp = () =>{
        this.setState({
            timer: this.state.timer + 1
        })
    }

    handleStart = () => {
        this.setState({
               interval: setInterval(this.temp, 1000)
        }, () => console.log(this.state.interval))
    }

    handleStop = () => {
      clearInterval(this.state.interval)
    }
    
    handleReset = () => {
        this.setState( () => {
            return {
                timer: 0
            }
        })
    }
    
    render (){

        return(
            <div>
                <h1>{this.state.timer}</h1>
        
                
                <div>
                    <button onClick={this.handleStart}>START</button>
                    <button onClick={this.handleStop}>STOP</button>
                    <button onClick={this.handleReset}>RESET</button>
                </div>

            </div>
        )
    }
}