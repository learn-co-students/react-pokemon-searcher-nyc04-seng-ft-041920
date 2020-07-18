import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    showCard: false,
    searchTerm: "",
  };
  setSearch = (event) => {
    this.setState({
      searchTerm: event.target.value.toLowerCase(),
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then((res) => res.json())
      .then((pokemon) => {
        this.setState({ pokemon });
      });
  }

  addPoke = (newPoke) => {
    debugger;
    this.setState({
      pokemon: [newPoke, ...this.state.pokemon],
    });
  };

  render() {
    console.log(this.state.searchTerm, "in pokemong page");
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPoke={this.addPoke} />
        <br />
        <Search searchTerm={this.state.searchTerm} setSearch={this.setSearch} />
        <br />
        <PokemonCollection
          searchTerm={this.state.searchTerm}
          pokemon={this.state.pokemon}
        />
      </Container>
    );
  }
}

export default PokemonPage;
