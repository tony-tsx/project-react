import React, { Component } from 'react'
import Button from '../../components/Button'
import InputGroup from '../../components/InputGroup'
import PropTypes from 'prop-types'
import PokemonTable from './PokemonTable'

class RealPokemonForm extends Component {
  state = {
    pokemons: []
  }

  submitHandler = event => {
    event.preventDefault()
    const data = new FormData( event.target )
    if ( this.table.include( data.get( 'pokemon' ) ) )
      return this.props.onRequestError?.( new Error( 'Pokémon já inserido' ) )

    const url = `https://pokeapi.co/api/v2/pokemon/${data.get( 'pokemon' )}`
    this.props.onRequestSend?.()
    fetch( url )
      .then( response => {
        if ( response.status > 400 )
          return Promise.reject( new Error( 'Pokémon não encontrado' ) )
        return response.json()
      } )
      .then( pokemon => {
        const pokemons = this.state?.pokemons?.concat?.( pokemon )
        this.setState( { pokemons } )
      } )
      .catch( err => this.props.onRequestError?.( err ) )
      .finally( () => {
        this.props.onRequestEnd?.()
      } )
  }

  attachTable = table => this.table = table

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <InputGroup name="pokemon" label="Nome do pokémon" onChange={this.props.onChange}>
          <Button dark>Procurar</Button>
        </InputGroup>
        <PokemonTable ref={this.attachTable} pokemons={this.state.pokemons}/>
      </form>
    )
  }
}

RealPokemonForm.propTypes = {
  onRequestSend: PropTypes.func,
  onRequestLoad: PropTypes.func,
  onRequestError: PropTypes.func,
  onChange: PropTypes.func
}

export default RealPokemonForm
