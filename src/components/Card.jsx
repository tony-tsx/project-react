import React from 'react'
import DefaultBootstrap from './DefaultBootstrap'

class Card extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    this.defaultClass = 'card'
  }
}

Card.Header = class extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    this.defaultClass = 'card-header'
  }
}

Card.Body = class extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    this.defaultClass = 'card-body'
  }
}

Card.Title = class extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    this.defaultClass = 'card-title'
  }
}

export default Card