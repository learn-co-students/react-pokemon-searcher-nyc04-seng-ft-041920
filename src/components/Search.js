import React, {Component} from 'react'

export default class Search extends Component {
  searchInput = React.createRef()
  handleSearch = () => {
    this.props.filter(this.searchInput.current.value)
  }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" onKeyPress={this.handleSearch} ref={this.searchInput}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}
