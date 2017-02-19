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
    { search.error ? <div className="FourSquareSearch__error">An error occured. Try again.</div> : null }
    { !search.error && search.loading ? <div className="FourSquareSearch__loading">Loading...</div> : null }
    { !search.error && search.results && !search.loading ? <SearchResults results={search.results} /> : null }
  </div>
);
