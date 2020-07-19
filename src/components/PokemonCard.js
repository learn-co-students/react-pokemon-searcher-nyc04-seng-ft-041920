import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    showFront: true
  }

  // handling the card click on the div
  // setting the new state to its opposite value
  handleToggle = () => {
    this.setState(prevState => ({
      showFront: !prevState.showFront
    }))
  } 

  render() {
    // destructuring assignment
    const { name, hp, sprites } = this.props

    return (
      <Card>
        <div onClick={this.handleToggle}>
          <div className="image">
            {/* inline ternary operator to display the correct data based on state */}
            <img src={this.state.showFront ? sprites.front : sprites.back} alt={name} />
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
