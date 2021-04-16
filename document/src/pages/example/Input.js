import React, { Component } from 'react'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.defaultValue }
  }

  upperCase = () => {
    this.setState({ value: this.state.value?.toUpperCase() })
  }

  clear = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={(e) => this.setState({ value: e.target.value })}
      />
    )
  }
}

export default Input
