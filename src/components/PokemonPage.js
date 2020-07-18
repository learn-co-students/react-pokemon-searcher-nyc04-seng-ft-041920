import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    search: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(allPokemon => this.setState({allPokemon: allPokemon}))
  }

  renderNewPokemon = (pokemon) => {
    console.log(pokemon)
    this.setState({
      allPokemon:[...this.state.allPokemon, pokemon]
    })
  }

  handleSearch = (letter) => {
    this.setState({
      search: letter
    })
  }

  handleSearchFilter = () => {
    const search = this.state.search
    const allPokemon = this.state.allPokemon
    const filteredPokemon = allPokemon.filter(pokemon => pokemon.name.includes(search))
    return filteredPokemon
  }

  render() {
    console.log(this.state.search)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.renderNewPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection allPokemon={this.handleSearchFilter()}/>
      </Container>
    )
  }
}

export default PokemonPage
