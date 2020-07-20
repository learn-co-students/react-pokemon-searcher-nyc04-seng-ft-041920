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

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`) 
    .then (r => r.json())
    .then (pokemon => {
      this.setState({ pokemon: pokemon })
    })

  }

  addPokemon = newPokemon => {
    this.setState ({ pokemon: [newPokemon, ...this.state.pokemon]})
  }

  handleSetSearch = searchTerm => {
    this.setState({
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
        <Search searchTerm={this.state.searchForm} setSearchTerm={this.handleSetSearch}/>
        <br />
        <PokemonCollection pokemon={this.state.pokemon} searchTerm={this.state.searchTerm} />
      </Container>
    )
  }
}

export default PokemonPage
