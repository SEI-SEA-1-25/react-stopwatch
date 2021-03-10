import { Component } from 'react'
import Stopwatch from './components/Stopwatch.jsx'
import './stopwatch.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Stopwatch />
      </div>
    )
  }
}