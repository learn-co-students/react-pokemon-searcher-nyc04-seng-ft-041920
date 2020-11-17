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
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(pokemon => {
      
      this.setState({
        pokemon: pokemon
      })
    })
  }

  addPokemon = (newPoke) => {
    this.setState({
      pokemon: [newPoke, ...this.state.pokemon]
    })
  }
  
  handleSearchTerm = (searchTerm) => {
    this.setState ({
      searchTerm: searchTerm
    })
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search searchTerm={this.state.searchTerm} setSearchTerm={this.handleSearchTerm} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} searchTerm={ this.state.searchTerm }/>
      </Container>
    )
  }
}

export default PokemonPage
