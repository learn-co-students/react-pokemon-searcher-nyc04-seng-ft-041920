import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {

  // when we use this named function we do not need to use 'this'
  // because this is not a Class component but a function component.
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleInputChange}/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
