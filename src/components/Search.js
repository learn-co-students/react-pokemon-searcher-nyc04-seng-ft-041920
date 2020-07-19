import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {

  const handleInputValue = (e) => {
    // passing the user's search input
    setSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleInputValue} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
