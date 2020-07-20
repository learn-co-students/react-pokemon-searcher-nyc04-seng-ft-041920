import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    searchTerm: "",
    pokemon: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    })
  }

  addPokemon = (newPokemon) => {
    this.setState({
      pokemon: [newPokemon, ...this.state.pokemon]
    })
  }

  setSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm  pokemon={this.state.pokemon} addPokemon={this.addPokemon} />
        <br />
        <Search setSearchTerm={this.setSearchTerm}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemon} searchTerm={this.state.searchTerm}/>
      </Container>
    )
  }
}

export default PokemonPage
