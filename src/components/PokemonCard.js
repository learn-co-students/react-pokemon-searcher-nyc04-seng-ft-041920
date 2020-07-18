import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontSprite: true
  }

  //when i do the below with the prevstate approach, it does not toggle
  flipSprite = () => {
    this.setState({
      frontSprite: !this.state.frontSprite
    })
  }

  render() {
    const { name, hp, sprites } = this.props.pokemon 
    
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.flipSprite} alt={name} src={this.state.frontSprite ? sprites.front : sprites.back} />
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
