import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  displayCards = () => {
    const filteredPokemon = this.props.pokemon.filter(pokemon =>{
      return pokemon.name.includes(this.props.searchTerm)
    })
    console.log( filteredPokemon)
    return filteredPokemon.map( p => {
      return <PokemonCard pokemon={p} key={p.id}/>
    })
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
