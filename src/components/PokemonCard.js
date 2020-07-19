import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    imgToggled: false
  }

  handleToggle = () => {
    this.setState({imgToggled: !this.state.imgToggled})
  }

  render() {
    const {name, hp, id, sprites} = this.props
    return (
      <Card id={id}>
        <div>
          <div className="image">
            <img
              onClick={this.handleToggle}
              src={this.state.imgToggled ? sprites.back : sprites.front} alt="oh no!" />
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
