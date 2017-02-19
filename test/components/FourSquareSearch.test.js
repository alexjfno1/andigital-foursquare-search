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

  it('renders a loading element when fetching results', () => {
    const wrapper = shallow(<FourSquareSearch
      search={{ loading: true }}
    />);
    const loading = wrapper.find('.FourSquareSearch__loading');
    const searchResults = wrapper.find(SearchResults);

    expect(loading).length.to.be(1);
    expect(searchResults).length.to.be(0);
  });

  it('renders an error element when fetching results fails', () => {
    const wrapper = shallow(<FourSquareSearch
      search={{ error: true }}
    />);
    const error = wrapper.find('.FourSquareSearch__error');
    const loading = wrapper.find('.FourSquareSearch__loading');
    const searchResults = wrapper.find(SearchResults);

    expect(error).length.to.be(1);
    expect(loading).length.to.be(0);
    expect(searchResults).length.to.be(0);
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
