import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {

  const handleInputChange = event => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleInputChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search


