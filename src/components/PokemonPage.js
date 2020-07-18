import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    searchTerm: "",
    pokemons: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemonData => {
      this.setState({
        pokemons: pokemonData
      })
    })
  }

  addPokemon = (newPoke) => {
    this.setState({
      pokemons: [newPoke, ...this.state.pokemons]
    })
  }

  handleSetSearch = (searchTerm) => {
    // console.log(event.target.value)
    this.setState({
      searchTerm: searchTerm
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchTerm={this.state.searchTerm} setSearchTerm={this.handleSetSearch} />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchTerm={this.state.searchTerm} />
      </Container>
    )
  }
}

export default PokemonPage
