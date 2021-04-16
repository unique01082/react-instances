import React, { Component } from 'react'
import { withInstanceManage } from 'react-instances'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  decrease = () => {
    this.setState({ count: this.state.count - 1 })
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        <input value={this.state.count} />
        <button onClick={this.increase}>+</button>
      </div>
    )
  }
}

export default withInstanceManage(Counter)
