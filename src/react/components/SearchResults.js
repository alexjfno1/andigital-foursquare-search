import React from 'react';
import SearchResult from './SearchResult';

export default ({ results }) => (
  <div className="SearchResults">
    { results.venues.map(result => <SearchResult key={result.id} result={result} />) }
  </div>
);
