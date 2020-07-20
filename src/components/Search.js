import React from 'react'

const Search = props => {

  const handleInputChange = e => {
    props.setSearchTerm(e.target.value.toLowerCase())
  }

  

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"  value={props.searchTerm} onChange={handleInputChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
