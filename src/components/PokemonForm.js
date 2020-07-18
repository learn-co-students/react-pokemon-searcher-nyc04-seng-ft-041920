import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "Enter pokemon name",
    hp: "Enter pokemon HP",
    frontUrl: "Front URL image",
    backUrl: "Back URL image"
  }

  handleInputChange = (event) => {
    // generic assignment of the state key and values
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    const bodyData = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
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
      console.log(newPoke)
      this.props.addPokemon(newPoke)
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" placeholder={this.state.name} onChange={this.handleInputChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" placeholder={this.state.hp} onChange={this.handleInputChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" placeholder={this.state.frontUrl} onChange={this.handleInputChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" placeholder={this.state.backUrl} onChange={this.handleInputChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
