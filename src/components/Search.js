import React from 'react'
// import { render } from 'react-dom'

class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      searchInput: ""
    }
  }


  onChangeHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  onSubmitHander = (e) => {
    if(e.key === "Enter"){
      this.props.onSearch(this.state.searchInput)
    }
  }

  render(){
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
          onChange={this.onChangeHandler} 
          value={this.state.searchInput}
          onKeyPress={this.onSubmitHander}/>
        <i className="search icon" />
      </div>
    </div>
  )
  }
}

export default Search
