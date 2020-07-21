import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokes: [],
    search: ''
  }

  handleSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(r => r.json())
      .then(pokeArray => this.setState({
        pokes: pokeArray
      }))
  }

  filterPokes = () => {
    const pokes = this.state.pokes
    const searchTerm = this.state.search
    return pokes.filter(poke => poke.name.includes(searchTerm))
  }

  addPoke = (newPoke) => {

    const newPokeNested = {
      name: newPoke.name,
      hp: newPoke.hp,
      sprites: {
        front: newPoke.frontUrl,
        back: newPoke.backUrl
      }
    }

    fetch(`http://localhost:3000/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPokeNested)
    })
      .then(r => r.json())
      .then(poke => this.setState({
        pokes: [...this.state.pokes, poke]
      }))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke}/>
        <br />
        <Search handleSearch={this.handleSearch} />
        <br />
        <PokemonCollection pokes={this.filterPokes()}/>
      </Container>
    )
  }
}

export default PokemonPage
