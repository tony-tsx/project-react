import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeaderComponent extends Component {
  constructor( props ) {
    super( props )
    console.log( 'o construtor foi chamado no HeaderComponent' )
  }
  componentWillMount() {
    console.log( 'o componentWillMount foi chamado no HeaderComponent' )
  }
  componentDidMount() {
    console.log( 'o componentDidMount foi chamado no HeaderComponent' )
  }
  componentWillReceiveProps( nextProps ) {
    console.log( 'o componentWillReceiveProps foi chamado no HeaderComponent' )
    console.log( nextProps, this.props )
  }
  shouldComponentUpdate( nextProps, nextState ) {
    console.log( 'o shouldComponentUpdate foi chamado no HeaderComponent' )
    console.log( nextProps, this.props )
    return true
  }
  componentWillUpdate() {
    console.log( 'o componentWillUpdate foi chamado no HeaderComponent' )
  }
  componentDidUpdate() {
    console.log( 'o componentDidUpdate foi chamado no HeaderComponent' )
  }
  componentWillUnmount() {
    console.log( 'o componentWillUnmount foi chamado no HeaderComponent' )
  }
  render() {
    console.log( 'o render foi chamado no HeaderComponent' )
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">{this.props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(página atual)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button">
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Ação</a>
                <a className="dropdown-item" href="#">Outra ação</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Algo mais aqui</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Desativado</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
          </form>
        </div>
      </nav>
    )
  }
}

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeaderComponent
