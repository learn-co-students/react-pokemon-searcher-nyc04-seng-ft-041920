import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newPoke = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }

    const configObj = {
      method: 'POST',
      headers: {  "Content-type": "application/json" },
      body: JSON.stringify(newPoke)
    }
    
    fetch('http://localhost:3000/pokemon', configObj)
    .then(res => res.json())
    .then(pokeObj => this.props.newPokemon(pokeObj))
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" onChange={this.handleChange} value={this.state.name} placeholder="Name" name="name" />
            <Form.Input fluid label="hp" onChange={this.handleChange} value={this.state.hp} placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" onChange={this.handleChange} value={this.state.frontUrl} placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" onChange={this.handleChange} value={this.state.backUrl} placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
