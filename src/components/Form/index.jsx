import React, { Component, createContext } from 'react'

class Form extends Component {
  fields = []
  constructor( props ) {
    super( props )
    this.defaultInputsValues = props.defaultInputsValues
  }
  getValueByName = name => {
    return this.defaultInputsValues[name]
  }
  registerField = fieldInfo => {
    console.log( fieldInfo )
    this.fields.push( fieldInfo )
    return () => this.unregisterField( fieldInfo )
  }
  unregisterField = fieldInfo => {
    this.fields.splice( fieldInfo, 1 )
  }

  handlerSubmit = event => {
    event.preventDefault()
    this.props.onSubmit?.( this.getData() )
  }

  getData() {
    const data = this.fields.reduce( ( data, item ) => {
      console.log( item.ref )
      data[item.name] = item.ref.current[item.path]
      return data
    }, {} )
    
    return data
  }

  getContextProviderValue = () => ( {
    registerField: this.registerField,
    unregisterField: this.unregisterField,
    getValueByName: this.getValueByName
  } )

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <Form.Context.Provider value={ this.getContextProviderValue() }>
          {this.props.children}
        </Form.Context.Provider>
      </form>
    )
  }
}

Form.Context = createContext( {} )

export default Form
