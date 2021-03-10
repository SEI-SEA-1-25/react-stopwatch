import {Component} from 'react'

class Stopwatch extends Component{
    state = {
        counter: 0,
        active: false,
        optionalMessage: "",
        intervalID: 0

    }

    handleResetClock = () => {
        console.log("handle reset")

        this.setState({
            counter: 0,
            active: false,
            optionalMessage: "",
            intervalID: this.state.intervalID

        },this.runTimer)
        console.log(this.state)
        this.runTimer()
    }
    handleStartClock = () => {
        console.log("handle start")
        if(this.state.active === false){
        this.setState({
            counter: this.state.counter,
            active:true,
            optionalMessage: "",
            intervalID: this.state.intervalID
        },this.runTimer)
        console.log(this.state)
        } else {
            this.setState({
                optionalMessage: "counter is arledy running, IMBECILE"
            })
        }
        

    }
    handlePauseClock = () => {
        console.log("handle pause")
        this.setState({
            counter: this.state.counter,
            active:false,
            optionalMessage: "",
            intervalID: this.state.intervalID
        },this.runTimer)
        console.log(this.state)
        
    }
    runTimer = () => {
        clearInterval(this.state.intervalID)
        if(this.state.active){
            // console.log("increment")
            const intervalID = setInterval( this.incrementClock, 1000);
            this.setState({
                counter: this.state.counter,
                active:this.state.active,
                optionalMessage: this.state.optionalMessage,
                intervalID: intervalID
            })
        }
    }

    incrementClock = () =>{
        this.setState({
            counter: this.state.counter + 1,
            active: this.state.active
        })
    }

    render(){
        return <div>
           <h1>{this.state.counter}</h1>
           <h2>{this.state.optionalMessage}</h2>
           <button onClick={this.handleResetClock}>Reset</button>
           <button onClick={this.handleStartClock}>Start</button>
           <button onClick={this.handlePauseClock}>Pause</button>
            </div>
    }
}

export default Stopwatch;