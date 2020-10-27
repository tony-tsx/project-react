import React, { Component } from 'react'
import Table from '../../components/Table'
import PropTypes from 'prop-types'

class PokemonTable extends Component {
  include( name ) {
    return this.props.pokemons.some( pokemon => pokemon.name === name )
  }
  render() {
    return (
      <Table
        heads={ [ 'ID', 'Nome', 'Peso', 'Altura', 'Ataque', 'Defesa' ] }
        className={ [ 'mt-3' ] }
      >
        {this.props.pokemons.map(
          ( pokemon, index ) => <PokemonTable.Row pokemon={pokemon} key={`pokemons[${index}]${index.id}`}/>
        )}
      </Table>
    )
  }
}

PokemonTable.Row = class extends Component {
  render() {
    return (
      <Table.Row>
        <Table.DataCell>{this.props.pokemon.id}</Table.DataCell>
        <Table.DataCell>{this.props.pokemon.name}</Table.DataCell>
        <Table.DataCell>{this.props.pokemon.weight}</Table.DataCell>
        <Table.DataCell>{this.props.pokemon.height}</Table.DataCell>
        <Table.DataCell>{}</Table.DataCell>
        <Table.DataCell>{}</Table.DataCell>
      </Table.Row>
    )
  }
}

PokemonTable.propTypes = {
  pokemons: PropTypes.array.isRequired
}

export default PokemonTable
