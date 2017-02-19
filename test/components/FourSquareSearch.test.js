import React from 'react';
import FourSquareSearch from '../../src/react/components/FourSquareSearch';
import SearchBox from '../../src/react/components/SearchBox';

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
});
