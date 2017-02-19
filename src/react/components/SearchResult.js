import React from 'react';

export default ({ result }) => (
  <div className="SearchResult">
    <div className="SearchResult__name">
      <span className="SearchResult__title">Name:</span>
      { result.name }
    </div>
    <div className="SearchResult__address">
      <span className="SearchResult__title">Address:</span>
      { result.address }
    </div>
    <div className="SearchResult__rating">
      <span className="SearchResult__title">Rating:</span>
      { result.rating }
    </div>
  </div>
);
