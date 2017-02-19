import React from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';

export default ({ search, handleSearchBoxChange, handleSearchSubmit, loading }) => (
  <div className="FourSquareSearch">
    <SearchBox
      searchValue={search.value}
      handleSearchBoxChange={handleSearchBoxChange}
      handleSearchSubmit={handleSearchSubmit}
    />
    { search.loading ? <div className="FourSquareSearch__loading">Loading...</div> : null }
    { search.results && !search.loading ? <SearchResults results={search.results} /> : null }
  </div>
);
