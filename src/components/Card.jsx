import React from 'react'
import DefaultBootstrap from './DefaultBootstrap'

class Card extends DefaultBootstrap { defaultClass = 'card' }

Card.Header = class extends DefaultBootstrap { defaultClass = 'card-header' }

Card.Body = class extends DefaultBootstrap { defaultClass = 'card-body' }

Card.Title = class extends DefaultBootstrap { defaultClass = 'card-title' }

export default Card