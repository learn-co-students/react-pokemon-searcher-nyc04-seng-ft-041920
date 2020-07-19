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

  // fetch data and set state to the the returned data value
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemonData => {
      this.setState({
        pokemons: pokemonData
      })
    })
  }

  // handleSetSearchTerm will receive as an argument the event.target.value
  // from the user search input
  handleSetSearchTerm = (value) => {
    this.setState({
      searchTerm: value
    })
  }

  // get the response back from POST fetch
  addPokemon = (newPoke) => {
    this.setState({
      // spread operator
      pokemons: [newPoke, ...this.state.pokemons]
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchTerm={this.state.searchTerm} setSearchTerm={this.handleSetSearchTerm}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchTerm={this.state.searchTerm} />
      </Container>
    )
  }
}

export default PokemonPage
