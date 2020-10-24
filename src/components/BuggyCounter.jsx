import React, { Component } from 'react'

class BuggyCounter extends Component {
  constructor(props) {
    super( props )
    this.state = { counter: 0 }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    this.setState( ( { counter } ) => ( {
      counter: counter + 1
    } ) )
  }
  
  render() {
    if ( this.state.counter === 3 )
      throw new Error('I crashed!')

    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button className="btn btn-primary" onClick={this.handleClick}>Incrementar</button>
      </div>
    )
  }
}

export default BuggyCounter
