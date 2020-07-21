import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  

  renderCards() {
    const filteredPokes = this.props.pokemon.filter(poke => poke.name.includes(this.props.searchTerm))
   
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
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
