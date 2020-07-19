import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "Enter pokemon name",
    hp: "Enter pokemon HP",
    front: "Enter front URL image",
    back: "Enter back URL image"
  }

  // set new state to the values input by the user on the form 
  handleInput = (e) => {
    this.setState({
      // be generic when assiging these key/value pairs
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {

    // create new object to pass the data to the fetch to create a new pokemon.
    // pass the values of the state to the new object
    const bodyData = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.front,
        back: this.state.back
      }
    }

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(bodyData)
    })
    .then(r => r.json())
    .then(newPoke => {
      this.props.addPokemon(newPoke)
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" name="name" placeholder={this.state.name} onChange={this.handleInput} />
            <Form.Input fluid label="hp" name="hp" placeholder={this.state.hp} onChange={this.handleInput} />
            <Form.Input fluid label="Front Image URL" name="front" placeholder={this.state.front} onChange={this.handleInput} />
            <Form.Input fluid label="Back Image URL" name="back" placeholder={this.state.back} onChange={this.handleInput} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
