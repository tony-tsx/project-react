import React, { Component } from 'react'
import classnames from 'classnames'

class InputGroup extends Component {
  attachInputElement = input => this.input = input
  getRestProps() {
    const { children, ...rest } = this.props
    return rest
  }
  render() {
    return (
      <div className={classnames( 'input-group', this.props.className )}>
        <div className="input-group-prepend">
          <span className="input-group-text">{this.props.label}</span>
        </div>
        <input {...this.getRestProps()} ref={ this.attachInputElement } className="form-control" />
        {this.props.children}
      </div>
    )
  }
}

export default InputGroup
