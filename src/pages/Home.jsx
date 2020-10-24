import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
const Home = () => (
  <Container>
    <h1>Eu sou a home, vá para <Link to='/sign-in'>login</Link></h1>
  </Container>
)

export default Home
