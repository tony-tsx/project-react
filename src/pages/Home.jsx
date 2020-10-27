import React, { Component } from 'react'
import Container from '../components/Container'
import { Link, Redirect } from 'react-router-dom'

class Home extends Component {
  state = {}
  static getDerivedStateFromProps( props ) {
    return { hasUser: !!props.auth }
  }
  constructor( props ) {
    super( props )
  }
  render() {
    if ( !this.state.hasUser )
      return <Redirect to='/sign-in' />

    return (
      <Container>
        <h1>Eu sou a home, vá para <Link to='/sign-in'>login</Link></h1>
      </Container>
    )
  }
}

export default Home
