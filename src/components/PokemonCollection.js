import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemons() {
    const filteredPokes = this.props.pokemons.filter(poke => poke.name.includes(this.props.searchTerm.toLowerCase()))
    return filteredPokes.map(pokemon => 
      <PokemonCard 
        key={pokemon.id}
        name={pokemon.name}
        hp={pokemon.hp}
        sprites={pokemon.sprites}
      />
    )
  }

  render() {
    console.log("=======> componentDidMount: ", this.props.pokemons)
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
