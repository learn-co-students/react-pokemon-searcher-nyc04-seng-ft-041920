import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  state = {
    name: "Bowser",
    hp: 1010,
    frontUrl: "url",
    backUrl: "event.target.backUrl.value,",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state, "in new form");
  };

  handleSubmit = () => {
    const newPkData = {
      name: this.state.name,
      hp: parseInt(this.state.hp),
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl,
      },
    };
    debugger;
    console.log(newPkData);
    const payLoad = {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPkData),
    };

    fetch("http://localhost:3000/pokemon", payLoad)
      .then((r) => r.json())
      .then((newPoke) => {
        debugger;
        this.props.addPoke(newPoke);
      });
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
              onChange={this.handleInputChange}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
