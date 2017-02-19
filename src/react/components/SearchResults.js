import React from 'react';
import SearchResult from './SearchResult';

export default ({ results }) => (
  <div className="SearchResults">
    <div className="SearchResults__displayName">Displaying results for { results.displayName }.</div>
    { results.venues.map(result => <SearchResult key={result.id} result={result} />) }
  </div>
);
