import React from 'react';

export default ({ searchValue, handleSearchBoxChange, handleSearchSubmit }) => (
  <div className="SearchBox">
    <form onSubmit={e => { e.preventDefault(); handleSearchSubmit();}}>
    <input
      className="SearchBox__input"
      type="text" value={searchValue}
      onChange={e => handleSearchBoxChange(e.target.value)}
      placeholder="Enter a place name to search..."
    />
    <button className="SearchBox__button" type="submit" onClick={handleSearchSubmit}>Search</button>
    </form>
  </div>
);
