import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  constructor(){
    super();
    this.state = {
      pokemons: []
    }
  }

  fetchAllPokemons(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      })
    })
  }

  componentDidMount(){
    this.fetchAllPokemons()
  }
 
  onSearch = (term) => {
    if(term){
      let filtered = this.state.pokemons.filter(pokemon => {
        return pokemon.name === term 
      })
      this.setState({
        pokemons: filtered
      })
    } else {
      this.fetchAllPokemons()
    }
  }
 
  onFormSubmit = (e) => {
    const newPokemon = {
      name: e.target.name.value,
      hp: e.target.hp.value,
      sprites: {
        front: e.target.frontUrl.value,
        back: e.target.backUrl.value
      }
    }
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
        "Accept": "Application/json"
      }, 
      body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState(prevState => {
        return {pokemons: [...prevState.pokemons, data]}
      })
    })
 
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm onFormSubmit={this.onFormSubmit}/>
        <br />
        <Search onSearch={this.onSearch}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
