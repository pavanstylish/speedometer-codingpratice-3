// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="paragraph">Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button_sec">
          <button className="button1" type="button" onClick={this.onIncrement}>
            accelerate
          </button>
          <button className="button12" type="button" onClick={this.onDecrement}>
            Apply Brakes
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
