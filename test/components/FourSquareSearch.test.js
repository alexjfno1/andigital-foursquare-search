import React from 'react';
import FourSquareSearch from '../../src/react/components/FourSquareSearch';
import SearchBox from '../../src/react/components/SearchBox';
import SearchResults from '../../src/react/components/SearchResults';

describe('/src/react/components/FourSquareSearch', () => {
  it('renders SearchBox with correct props', () => {
    const searchValue = 'A town';
    const handleSearchBoxChange = () => {};
    const handleSearchSubmit = () => {};
    const wrapper = shallow(<FourSquareSearch
      search={{ value: searchValue }}
      handleSearchSubmit={handleSearchSubmit}
      handleSearchBoxChange={handleSearchBoxChange}
    />);
    const searchBox = wrapper.find(SearchBox);

    expect(searchBox).length.to.be(1);
    expect(searchBox.prop('searchValue')).to.equal(searchValue);
    expect(searchBox.prop('handleSearchSubmit')).to.equal(handleSearchSubmit);
    expect(searchBox.prop('handleSearchBoxChange')).to.equal(handleSearchBoxChange);
  });

  it('renders the SearchResults with correct props', () => {
    const results = [{ name: 'Blah' }];
    const wrapper = shallow(<FourSquareSearch
      search={{ results }}
    />);
    const searchResults = wrapper.find(SearchResults);

    expect(searchResults).length.to.be(1);
    expect(searchResults.prop('results')).to.equal(results);
  });

  it('does not render SearchResults when there are no results', () => {
    const wrapper = shallow(<FourSquareSearch
      search={{ results: null }}
    />);
    const searchResults = wrapper.find(SearchResults);

    expect(searchResults).length.to.be(0);
  });
});
