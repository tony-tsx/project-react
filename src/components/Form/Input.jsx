import React, { Component, createRef } from 'react'
import Form from './index'

class Input extends Component {
  constructor( props ) {
    super( props )
    console.log( this.context )
    this.input = createRef()
  }
  render() {
    return (
      <Form.Context.Consumer>
        { ( form ) => {
          this.unregister = form.registerField( {
            name: this.props.name,
            ref: this.input,
            path: 'value'
          } )
          return (
            <input
              ref={this.input}
              defaultValue={form.getValueByName( this.props.name )}
              {...this.props}/>
          )
        } }
      </Form.Context.Consumer>
    )
  }
  componentWillUnmount() { this.unregister() }
}

export default Input
