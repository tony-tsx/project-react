import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeroBannerComponent extends Component {
  render() {
    return (
      <div className="hero-image" style={ { backgroundImage: this.props.url } }>
        <div className="hero-text">
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle}</p>
          <button className="btn btn-secondary">{this.props.buttonText}</button>
        </div>
      </div>
    )
  }
}

HeroBannerComponent.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default HeroBannerComponent
