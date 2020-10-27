import React from 'react'
import DefaultBootstrap from './DefaultBootstrap'

class Alert extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    const { primary, secondary, success, danger, warning, info, light, dark, link } = this.props
    this.defaultClass = [
      'alert',
      {
        'alert-primary': primary,
        'alert-secondary': secondary,
        'alert-success': success,
        'alert-danger': danger,
        'alert-warning': warning,
        'alert-info': info,
        'alert-light': light,
        'alert-dark': dark,
        'alert-link': link
      }
    ]
  }
  getRestProps() {
    const { primary, secondary, success, danger, warning, info, light, dark, link, ...rest } = super.getRestProps()
    return rest
  }
  render() {
    return <div className={this.getClassNames()} {...this.getRestProps()} />
  }
}

export default Alert
