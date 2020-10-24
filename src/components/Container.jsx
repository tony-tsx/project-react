import React from 'react'
import DefaultBootstrap from './DefaultBootstrap'

class Container extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    this.defaultClass = 'container'
  }
}

export default Container
