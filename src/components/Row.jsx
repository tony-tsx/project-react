import React from 'react'
import DefaultBootstrap from './DefaultBootstrap'
class Row extends DefaultBootstrap {
  defaultClass = 'row'
  render() {
    return <div className={this.getClassNames()} {...this.getRestProps()} />
  }
}

export default Row
