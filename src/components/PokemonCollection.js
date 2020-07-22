import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  renderPokemonCards() {
    const filteredPokes = this.props.pokemon.filter(poke => poke.name.includes(this.props.searchTerm))
    console.log(filteredPokes)
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
    console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
