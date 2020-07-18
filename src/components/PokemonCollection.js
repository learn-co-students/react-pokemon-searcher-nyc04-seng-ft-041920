import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  renderCards = () => {
    const filteredPokemon = this.props.pokemon.filter((poke) => {
      // console.log(this.props.searchTerm, "in poke collection");
      return poke.name.includes(this.props.searchTerm);
    });

    return filteredPokemon.map((poke) => (
      <PokemonCard
        key={poke.id}
        name={poke.name}
        hp={poke.hp}
        sprites={poke.sprites}
      />
    ));
  };
  render() {
    return <Card.Group itemsPerRow={6}>{this.renderCards()}</Card.Group>;
  }
}

export default PokemonCollection;

// what was the project? key points? and technologies used.
//Bold some things, easy to scan, life easier for the reader
//Highlight section at the top maybe
//Is there a career ladder?
//How many direct reports does my manager have?
//do you do code reviews?
//try to find a place where you can helpout. Probs tickets that have
//been languishing. Be of service to help the team & learn the code base
//Something that other teammates didn't , take work from teammate
//Writing tests can be a good start/feature
//
