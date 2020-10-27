import React, { Component } from 'react'
import Container from '../components/Container'
import { Redirect } from 'react-router-dom'
import Row from '../components/Row'
import Col from '../components/Col'
import Card from '../components/Card'
import login from '../fakeFunctions/login'
import Alert from '../components/Alert'
import Form from '../components/Form'
import Input from '../components/Form/Input'

class SignIn extends Component {
  state = { error: null }
  static getDerivedStateFromProps( props ) {
    return { hasUser: !!props.auth }
  }
  constructor( props ) {
    super( props )
  }
  handlerSubmit = data => {
    login( data.email, data.password )
      .then( user => this.props.signIn( user ) )
      .catch( error => this.setState( { error } ) )
  }
  render() {
    if ( this.state.hasUser )
      return <Redirect to='/' />

    return (
      <Container style={ { margin: 'auto' } }>
        <Form onSubmit={this.handlerSubmit} defaultInputsValues={ { email: 'antonio@gmail.com', password: '123456789' } }>
          <Row>
            <Col />
            <Col sm={12} md={4}>
              <Card>
                <Card.Header>
                  <Card.Title>
                    <h2>Sign in form</h2>
                  </Card.Title>
                  { !!this.state.error && <Alert danger className="w-100">{this.state.error.message}</Alert> }
                </Card.Header>
                <Card.Body>
                  <div className="form-group">
                    <label>Email address</label>
                    <Input type="email" name="email" required className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <Input type="password" name="password" required className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </Card.Body>
              </Card>
            </Col>
            <Col />
          </Row>
        </Form>
      </Container>
    )
  }
}

export default SignIn
