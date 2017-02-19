import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

export default ({ search, handleSearchBoxChange, handleSearchSubmit }) => (
  <div className="FourSquareSearch">
    <SearchBox
      searchValue={search.value}
      handleSearchBoxChange={handleSearchBoxChange}
      handleSearchSubmit={handleSearchSubmit}
    />
    { search.results ? <SearchResults results={search.results} /> : null }
  </div>
);
