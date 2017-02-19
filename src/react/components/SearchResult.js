import React from 'react';

export default ({ result }) => (
  <div className="SearchResult">
    <div className="SearchResult__name">{ result.name }</div>
    <div className="SearchResult__address">{ result.address }</div>
    <div className="SearchResult__rating">{ result.rating }</div>
  </div>
);
