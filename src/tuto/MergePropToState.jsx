import React, { Component, GetDerivedStateFromProps } from 'react'
import PropTypes from 'prop-types'

class MergePropToState extends Component {
  static getDerivedStateFromProps( nextProps, prevState ) {
    console.log( 'getDerivedStateFromProp' )
    return { title: nextProps.title }
  }
  constructor( props ) {
    super( props )
    this.state = { title: props.title }
  }
  componentDidMount() {
    console.log( 'componentDidMount' )
  }
  componentWillUpdate() {
    console.log( 'componentWillUpdate' )
  }
  componentDidUpdate() {
    console.log( 'componentDidUpdate' )
  }
  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <pre>{JSON.stringify( this.state, null, 2 )}</pre>
        <pre>{JSON.stringify( this.props, null, 2 )}</pre>
      </div>
    )
  }
}

MergePropToState.propTypes = {
  title: PropTypes.string.isRequired
}

export default MergePropToState