import React from "react";

const Search = ({ searchTerm, setSearch }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={setSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
