import React from 'react'
import DefaultBootstrap from './DefaultBootstrap'
import PropTypes from 'prop-types'
class Col extends DefaultBootstrap {
  constructor( props ) {
    super( props )
    let { col, sm, md, lg, xl } = this.props
    const objectToProcess = { col, sm, md, lg, xl }

    if ( Object.values( objectToProcess ).some( Boolean ) ) {

      this.defaultClass = Object.fromEntries(

        Object.entries( objectToProcess )
          .filter( ( [ key, value ] ) => !!value )
          .map( ( [ key, value ] ) => {
            if ( key === 'col' )
              return [ `${key}-${value}`, true ]

            return [ `col-${key}-${value}`, true ]
          } )

      )

    } else this.defaultClass = 'col'
  }
  render() {
    return <div className={this.getClassNames()} {...this.getRestProps()} />
  }
}

Col.propTypes = {
  col: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
}

export default Col
