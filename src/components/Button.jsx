import React from 'react'
import DefaultBootstrap from './DefaultBootstrap'

class Button extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    const { primary, secondary, success, danger, warning, info, light, dark, link } = this.props
    this.defaultClass = [
      'btn',
      {
        'btn-primary': primary,
        'btn-secondary': secondary,
        'btn-success': success,
        'btn-danger': danger,
        'btn-warning': warning,
        'btn-info': info,
        'btn-light': light,
        'btn-dark': dark,
        'btn-link': link
      }
    ]
  }
  getRestProps() {
    const { primary, secondary, success, danger, warning, info, light, dark, link, ...rest } = super.getRestProps()
    return rest
  }
  render() {
    return <button className={this.getClassNames()} {...this.getRestProps()} />
  }
}

export default Button
