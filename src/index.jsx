import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LoadingComponent from './components/Loading'
import styled from 'styled-components'
import './index.scss'

class AppComponent extends Component {
  constructor( props ) {
    super( props )
    this.state = { loading: false, pokemons: [], start: false }
    this.handler = this.handler.bind( this )
    this.handlerOrderName = this.handlerOrderName.bind( this )
    this.handlerOrderID = this.handlerOrderID.bind( this )
  }

  handler( event ) {
    event.preventDefault()
    const formData = new FormData( event.target )
    const pokemonName = formData.get( 'pokemon' )
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    this.setState( { loading: true } )
    fetch( url )
      .then( response => {
        if ( response.status > 400 )
          return Promise.reject( new Error( 'pokemon not found' ) )
        return response.json()
      } )
      .then( pokemon => this.setState( {
        pokemons: [ ...this.state.pokemons, pokemon ]
      } ) )
      .catch( reason => alert( reason.message ) )
      .finally( () => this.setState( { loading: false } ) )
  }

  handlerOrderName() {
    this.setState( {
      pokemons: this.state.pokemons.sort( ( pokemonA, pokemonB ) => {
        return pokemonA.name.localeCompare( pokemonB.name )
      } )
    } )
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
    setTimeout( () => {
      this.setState( { start: true } )
    }, 3000 )
  }

  hasPokemon() {
    return !!this.state.pokemons.length
  }

  render() {
    console.log( 'o render foi chamado' )
    if ( this.state.start )
      return (
        <div className="container m-5">
          <div className="card position-relative">
            <div className="card-header">
              <div className="card-title">
                <h1>Formulário Pokémon</h1>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={ this.handler }>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Pokémon:</span>
                  </div>
                  <input name="pokemon" type="text" className="form-control" placeholder="Pokémon"/>
                  <button disabled={this.state.loading} className="btn btn-dark">Procurar</button>
                </div>
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
              <LoadingWrapper>
                <LoadingComponent></LoadingComponent>
              </LoadingWrapper>
            ) }
          </div>
        </div>
      )
    
    return (
      <div className="d-flex align-items-center justify-content-center">
        <LoadingWrapper>
          <LoadingComponent size={200} />
        </LoadingWrapper>
      </div>
    )
  }
}

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000040;
`

ReactDOM.render(
  <AppComponent />,
  document.getElementById( 'app' )
)
