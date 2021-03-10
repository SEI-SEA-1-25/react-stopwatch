import { Component } from 'react'

export default class StopwatchCounter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}