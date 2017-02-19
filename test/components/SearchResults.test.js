import React from 'react';
import SearchResults from '../../src/react/components/SearchResults';
import SearchResult from '../../src/react/components/SearchResult';

describe('src/react/components/SearchResults', () => {
  it('renders a list of SearchResult components', () => {
    const results = { venues: [{ name: 'Venue 1' }, { name: 'Venue 2' }] };
    const wrapper = shallow(<SearchResults results={results} />);

    expect(wrapper.find(SearchResult)).length.to.be(2);
  });

  it('passes the correct props to each SearchResult', () => {
    const results = { venues: [{ name: 'Venue 1' }, { name: 'Venue 2' }] };
    const wrapper = shallow(<SearchResults results={results} />);
    const firstSearchResult = wrapper.find(SearchResult).nodes[0];
    const secondSearchResult = wrapper.find(SearchResult).nodes[1];

    expect(firstSearchResult.props.result).to.deep.equal(results.venues[0]);
    expect(secondSearchResult.props.result).to.deep.equal(results.venues[1]);
  });
});
