import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  descrease = () => {
    this.setState({ count: this.state.count - 1 })
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.descrease}>-</button>
        <input value={this.state.count} />
        <button onClick={this.increase}>+</button>
      </div>
    )
  }
}

export default Counter
