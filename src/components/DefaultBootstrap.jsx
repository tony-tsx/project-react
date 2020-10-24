import React, { Component } from 'react'
import classnames from 'classnames'
class DefaultBootstrap extends Component {
  getClassNames() { return classnames( this.defaultClass, this.props.className ) }
  getRestProps() {
    const { className, ...rest } = this.props
    return rest
  }
  render() {
    return <div className={this.getClassNames()} {...this.getRestProps()}/>
  }
}

export default DefaultBootstrap
