import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import reactLogo from '../assets/react.png'
import styled from 'styled-components'

console.log( reactLogo )
class Header extends Component {
  constructor( props ) {
    super( props )
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <Img src={reactLogo} />
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sign-in">
                Entrar
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const Img = styled.img`
  max-width: 30px;
`

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
