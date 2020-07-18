import React from "react";
import { Card } from "semantic-ui-react";
class PokemonCard extends React.Component {
  state = {
    showFront: true,
  };
  toggleSprite = () => {
    return this.setState({ showFront: !this.state.showFront });
  };

  render() {
    const { name, hp, sprites } = this.props;
    return (
      <Card>
        <div onClick={this.toggleSprite}>
          <div className="image">
            <img
              src={this.state.showFront ? sprites.front : sprites.back}
              alt={name}
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            {hp}
            <span>
              <i className="icon heartbeat red" />
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
