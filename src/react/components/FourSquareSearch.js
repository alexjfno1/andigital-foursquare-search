import React from 'react';
import SearchBox from './SearchBox';

export default ({ search, handleSearchBoxChange, handleSearchSubmit }) => (
  <div className="FourSquareSearch">
    <SearchBox
      searchValue={search.value}
      handleSearchBoxChange={handleSearchBoxChange}
      handleSearchSubmit={handleSearchSubmit}
    />
  </div>
);
