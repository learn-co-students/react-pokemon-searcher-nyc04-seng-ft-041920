import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showFront: true
  }

  // create an arrow function to absorb the "this" from the outer context.
  // Where we write our arrow functions it has a role on what "this" is.
  handleToggle = () => {
    this.setState(prevState => ({
      showFront: !prevState.showFront
    }))
  }

  render() {
    const { name, hp, sprites } = this.props
    return (
      <Card>
        <div onClick={this.handleToggle}>
          <div className="image">
            <img src={ this.state.showFront ? sprites.front : sprites.back } alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
