import { Component } from 'react' 


export default class Stopwatch extends Component {


    state = {
        counter: 0,
        interval: null
    }

    handleStart = (e) => {
        if(this.state.interval){
            return 
        }
        this.setState({
            interval: setInterval(this.incrementTime,1000)

        })
    }

    incrementTime = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handlePause = (e) => {
        this.setState({
            interval: clearInterval(this.state.interval)
        })
    }


    handleReset = (e) => {
        this.setState({
            counter: 0
        })
        
    }




    render(){
        return(
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