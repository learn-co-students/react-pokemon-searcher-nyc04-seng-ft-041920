import React, {Component} from 'react'
import { Form } from 'semantic-ui-react'

export default class PokemonForm extends Component {
  nameInput = React.createRef()
  hpInput = React.createRef()
  frontImgInput = React.createRef()
  backImgInput = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      name: this.nameInput.current.value,
      hp: parseInt(this.hpInput.current.value, 10),
      sprites: {
        front: this.frontImgInput.current.value,
        back: this.backImgInput.current.value
      }
    }
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .then(newPokemon => {
      // have a function to add a new pokemon
      this.props.addPokemon(newPokemon)
    })
    e.currentTarget.reset()
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        {/* heres why i did it this way */}
        {/* Semantic-UI and I have a very long history of not being on friendly terms */}
        {/* Also Semantic-UI and createRef seem to dislike working together */}
        {/* I love createRef. This is me taking sides. */}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <input ref={this.nameInput}
            placeholder="Name" name="name"/>
            <input
              ref={this.hpInput}
               placeholder="hp" name="hp" type="text"/>
            <input
              ref={this.frontImgInput}
               placeholder="url" name="frontUrl" type="text"/>
            <input
              ref={this.backImgInput}
              type="text" placeholder="url" name="backUrl" />

          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}
