import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const filtered = this.props.pokemonData.filter(pika => pika.name.includes(this.props.searchWord))
    return (
      <Card.Group itemsPerRow={6}>
        {filtered.map((pokemon, idx) =>
          <PokemonCard
            key={idx}
            hp={pokemon.hp}
            id={pokemon.id}
            name={pokemon.name}
            sprites={pokemon.sprites}
          />
        )}
      </Card.Group>

    )
  }
}

export default PokemonCollection
