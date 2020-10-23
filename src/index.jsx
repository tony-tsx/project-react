import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// <h1 style="color: red;"></h1>

// input.addEventListener( 'change', () => {} )

class FirstComponent extends Component {
  constructor( props ) {
    super( props )
    this.state = { text: '' }
    this.handler = this.handler.bind( this )
  }
  handler( event ) {
    console.log( 'execute handler' )
    this.setState( { text: event.target.value } )
  }
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <input value={this.state.text} onChange={this.handler}></input>
      </div>
    )
  }
}

ReactDOM.render(
  <FirstComponent />,
  document.getElementById( 'app' )
)
