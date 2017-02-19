import React from 'react';
import SearchResult from '../../src/react/components/SearchResult';

describe('src/react/components/SearchResult', () => {
  it('renders the details of the result', () => {
    const result = { name: 'Venue Name', address: 'Venue Address', rating: '5' };
    const wrapper = shallow(<SearchResult result={result} />);

    expect(wrapper.find('.SearchResult__name').text()).to.equal(result.name);
    expect(wrapper.find('.SearchResult__address').text()).to.equal(result.address);
    expect(wrapper.find('.SearchResult__rating').text()).to.equal(result.rating);
  });
});
