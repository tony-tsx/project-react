import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const SignIn = () => (
  <Container>
    <h1>Eu sou o login, vá para <Link to='/'>home</Link></h1>
  </Container>
)

export default SignIn
