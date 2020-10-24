import React, { Component, createRef } from 'react'
import LoadingComponent from './Loading'

import pokemons from '../data/pokemons.json'

import styled from 'styled-components'

class ExamplePokemonFormComponent extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      loading: false,
      start: true,
      pokemons: [],
      pokemonName: '',
      sugestionOpen: false
    }
    this.handlerSubmit = this.handlerSubmit.bind( this )
    this.handlerOrderName = this.handlerOrderName.bind( this )
    this.handlerOrderID = this.handlerOrderID.bind( this )
    this.handlerUpdatePokemonOnChange = this.handlerUpdatePokemonOnChange.bind( this )
    this.handlerUpdatePokemonFocus = this.handlerUpdatePokemonFocus.bind( this )
    this.handlerUpdatePokemonBlur = this.handlerUpdatePokemonBlur.bind( this )
    this.changeSugestionPokemonName = this.changeSugestionPokemonName.bind( this )
    console.log( this )
  }

  handlerSubmit( event ) {
    event.preventDefault()
    this.refs.pokemonInputName.value
    this.refs.pokemonInputName.dispatchEvent( new Event( 'submit' ) )
    const url = `https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`
    this.setState( { loading: true } )
    fetch( url )
      .then( response => {
        if ( response.status > 400 )
          return Promise.reject( new Error( 'pokemon not found' ) )
        return response.json()
      } )
      .then( pokemon => this.setState( {
        pokemons: [ ...this.state.pokemons, pokemon ],
        pokemonName: ''
      } ) )
      .catch( reason => {
        alert( reason.message )
        console.log( reason )
        this.setState( { err: reason } )
      } )
      .finally( () => this.setState( { loading: false } ) )
  }

  handlerOrderName() {
    this.setState( state => ( {
      pokemons: state.pokemons.sort(
        ( pokemonA, pokemonB ) => pokemonA.name.localeCompare( pokemonB.name )
      )
    } ) )
  }

  handlerOrderID() {
    this.setState( {
      pokemons: this.state.pokemons.sort( ( pokemonA, pokemonB ) => {
        if ( pokemonA.id < pokemonB.id ) return -1
        else if ( pokemonA.id > pokemonB.id ) return 1
        return 0
      } )
    } )
  }

  componentDidMount() {
    // setTimeout( () => {
    //   this.setState( { start: true } )
    // }, 3000 )
  }

  hasPokemon() {
    return !!this.state.pokemons.length
  }

  handlerUpdatePokemonOnChange( event ) {
    this.setState( { pokemonName: event.target.value } )
  }

  handlerUpdatePokemonFocus( event ) {
    this.setState( { sugestionOpen: true } )
  }

  handlerUpdatePokemonBlur( event ) {
    setTimeout( () => {
      if ( this.state.sugestionOpen )
        this.setState( { sugestionOpen: false } )
    }, 100 )
  }

  getFilterPokemonName() {
    return pokemons
      .filter( name => name.includes( this.state.pokemonName ) )
      .slice( 0, 6 )
  }

  changeSugestionPokemonName( pokemonName ) {
    return ( event ) => {
      this.setState(
        { pokemonName, sugestionOpen: false },
        () => {
          console.log( 'dispatch submit event' )
          this.buttonSubmit.click()
        } )
    }
  }

  componentDidMount() {
    this.props.ref( this )
  }

  render() {
    console.log( 'render example pokemon form' )
    if ( this.state.start )
      return (
        <div className="container m-5">
          <div className="card position-relative">
            <div className="card-header" bg='blue'>
              <div className="card-title">
                <h1>Formulário Pokémon</h1>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={ this.handlerSubmit } ref="form" className="position-relative">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Pokémon:</span>
                  </div>
                  <input name="pokemon" ref="pokemonInputName" value={this.state.pokemonName}
                    onChange={this.handlerUpdatePokemonOnChange}
                    onFocus={this.handlerUpdatePokemonFocus}
                    onBlur={this.handlerUpdatePokemonBlur}
                    autoComplete="off"
                    type="text"
                    className="form-control"
                    placeholder="Pokémon"
                  />
                  <button disabled={this.state.loading} ref={button => {
                    this.buttonSubmit = button
                  }} className="btn btn-dark">Procurar</button>
                </div>
                { this.state.sugestionOpen && (
                  <DinamicSugestionContainer>
                    <div className="list-group">
                      {this.getFilterPokemonName().map((pokemonName, index) => (
                        <button
                          type="button"
                          className="list-group-item list-group-item-action"
                          key={`pokemon[${index}]`}
                          onClick={this.changeSugestionPokemonName( pokemonName )}
                        >
                          {pokemonName}
                        </button>
                      ))}
                    </div>
                  </DinamicSugestionContainer>
                ) }
                <button type="button" disabled={this.state.loading} className="btn btn-primary m-1"
                  onClick={this.handlerOrderName}>
                    Ordernar por nome
                </button>
                <button type="button" disabled={this.state.loading} className="btn btn-primary m-1"
                  onClick={this.handlerOrderID}>
                    Ordernar por id
                </button>
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nome</th>
                      <th>Peso</th>
                      <th>Altura</th>
                      <th>Ataque</th>
                      <th>Defesa</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.hasPokemon()
                      ? (
                        this.state.pokemons.map( ( pokemon, index ) => (
                          <tr key={`pokemon[${index}]${pokemon.id}`}>
                            <td>{pokemon.id}</td>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.weight}</td>
                            <td>{pokemon.height}</td>
                            <td></td>
                            <td></td>
                          </tr>
                        ) )
                      )
                      : (
                        <tr>
                          <td>
                            <h2>Digite o nome do pokémon para procurar</h2>
                          </td>
                        </tr>
                      ) }
                  </tbody>
                </table>
              </form>
            </div>
            { this.state.loading && (
              <div className="loading-wrapper-absolute">
                <LoadingComponent></LoadingComponent>
              </div>
            ) }
          </div>
        </div>
      )
    
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="loading-wrapper-absolute">
          <LoadingComponent size={200} />
        </div>
      </div>
    )
  }
}

const DinamicSugestionContainer = styled.div`
  position: absolute;
  top: 38px;
  left: 0;
  right: 0;
  z-index: 99;
`

export default ExamplePokemonFormComponent
