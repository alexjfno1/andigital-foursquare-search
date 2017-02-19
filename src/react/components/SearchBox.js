import React from 'react';

export default ({ searchValue, handleSearchBoxChange, handleSearchSubmit }) => (
  <div className="SearchBox">
    <form onSubmit={handleSearchSubmit}>
    <input type="text" value={searchValue} onChange={e => handleSearchBoxChange(e.target.value)} />
    <button type="submit" onClick={handleSearchSubmit}>Search</button>
    </form>
  </div>
);
