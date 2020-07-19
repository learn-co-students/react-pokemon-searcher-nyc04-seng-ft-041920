import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(pokemon => {
      this.setState({pokemon})
    })
  }

  handleAddPokemon = (obj) => {
    this.setState(prevState => {
      return {
        pokemon: [
          ...prevState.pokemon,
          obj
        ]
      }
    }, console.log(this.state.pokemon))
  }

  handleFilter = (val) => {
    this.setState({searchTerm: val})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm
          addPokemon={this.handleAddPokemon}
        />
        <br />
        <Search
          pokemonData={this.state.pokemon}
          filter={this.handleFilter}
        />
        <br />
        <PokemonCollection
          searchWord={this.state.searchTerm}
          pokemonData={this.state.pokemon}
        />
      </Container>
    )
  }
}

export default PokemonPage
