import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(){
    super();
    this.state = {
      displayFront: true
    }
    
  }

  toggleCard = () => {
    this.setState(prevState => {
      return {displayFront: !prevState.displayFront}
    })
  }

  render() {
  const  {sprites, name, hp} = this.props.pokemon //object destructuring
    return (
      <Card onClick={this.toggleCard}>
        <div>
          <div className="image">
            <img src={this.state.displayFront? sprites.front : sprites.back} alt="oh no!" />
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
