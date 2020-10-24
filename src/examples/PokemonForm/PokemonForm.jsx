import React, { Component } from 'react'
import HeaderComponent from '../../components/Header'
import Container from '../../components/Container'
import Card from '../../components/Card'
import RealPokemonForm from './RealPokemonForm'
import Loading from '../../components/Loading'
import Alert from '../../components/Alert'

class PokemonForm extends Component {
  state = { loading: false, err: null }
  startLoading = () => this.setState( { loading: true } )
  endLoading = () => this.setState( { loading: false } )
  setErr = err => this.setState( { err } )
  clearErr = () => {
    if ( this.state.err ) this.setState( { err: null } )
  }

  render() {
    return (
      <>
        <HeaderComponent title="Pokémon Form" />
        <Container>
          <Card className={[ 'position-relative', 'mt-5' ]}>
            <Card.Header className={ [ 'bg-dark', 'text-white' ] }>
              <Card.Title>
                <h1>Pokémon Form</h1>
              </Card.Title>
            </Card.Header>
            <Card.Body>
              { this.state.err && <Alert danger className="w-100">{this.state.err.message}</Alert> }
              <RealPokemonForm
                onRequestSend={this.startLoading}
                onRequestEnd={this.endLoading}
                onRequestError={this.setErr}
                onChange={this.clearErr}
              />
            </Card.Body>
            { this.state.loading && (
              <div className="loading-wrapper-absolute">
                <Loading />
              </div>
            ) }
          </Card>
        </Container>
      </>
    )
  }
}

export default PokemonForm
