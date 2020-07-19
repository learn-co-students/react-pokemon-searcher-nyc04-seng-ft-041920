import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  // ============================================================
  // ...lift state...
  // my initial fetch (componentDidMount) was located in this component.
  // However because PokemonForm component needs to pass the new pokemon
  // added to the database to be added to the state where it has 
  // the array of all pokemons, the initial fetch and the pokemons array
  // needs to be in the component that has PokemonForm and PokemonCollection 
  // as children.
  // ============================================================

  // renderPokemons will loop over each pokemons and render
  // to the page
  renderPokemons() {
    // filter each pokemon and by each character of its name or by the full name itself - store all that pass the
    // test into filteredPokemon array
    const filteredPokemon = this.props.pokemons.filter(poke => poke.name.includes(this.props.searchTerm.toLowerCase()))

    // loop over the filteredPokemon array
    return filteredPokemon.map(pokemon => 
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
        {this.renderPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
