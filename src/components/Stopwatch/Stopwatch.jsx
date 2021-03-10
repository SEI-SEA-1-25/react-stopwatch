import { Component } from 'react' 

export default class Stopwatch extends Component {
    
    state = {
        counter: 0
    }

    handleStart
    
    render () {
        return (
            <div>
                <h1></h1>
                <div>
                    <button>Reset</button>
                    <button>Start</button>
                    <button>Pause</button>
                </div>
            </div>
        )
    }
}