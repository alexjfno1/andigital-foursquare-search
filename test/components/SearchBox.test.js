import React from 'react';
import SearchBox from '../../src/react/components/SearchBox';

describe('/src/react/components/SearchBox', () => {
  it('renders a search box with a passed value', () => {
    const searchValue = 'A town';
    const wrapper = shallow(<SearchBox searchValue={searchValue} />);
    const input = wrapper.find('input');

    expect(input).length.to.be(1);
    expect(input.prop('type')).to.equal('text');
    expect(input.prop('value')).to.equal(searchValue);
  });

  it('renders a submit button', () => {
    const wrapper = shallow(<SearchBox />);
    const button = wrapper.find('button');

    expect(button).length.to.be(1);
    expect(button.prop('type')).to.equal('submit');
  });

  it('calls handleSearchBoxChange when the search box value is changed', sinon.test(function () {
    const searchValue = 'A town';
    const handleSearchBoxChangeSpy = sinon.spy();
    const wrapper = shallow(<SearchBox handleSearchBoxChange={handleSearchBoxChangeSpy} />);
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: searchValue } });

    expect(handleSearchBoxChangeSpy).to.have.been.calledWith(searchValue);
  }));

  it('calls handleSearchSubmit on submit button click', sinon.test(function () {
    const handleSearchSubmitSpy = sinon.spy();
    const wrapper = shallow(<SearchBox handleSearchSubmit={handleSearchSubmitSpy} />);
    const button = wrapper.find('button');

    button.simulate('click');

    expect(handleSearchSubmitSpy).to.have.been.calledOnce;
  }));

  it('calls handleSearchSubmit on form submit', sinon.test(function () {
    const handleSearchSubmitSpy = sinon.spy();
    const wrapper = shallow(<SearchBox handleSearchSubmit={handleSearchSubmitSpy} />);
    const form = wrapper.find('form');

    form.simulate('submit');

    expect(handleSearchSubmitSpy).to.have.been.calledOnce;
  }));
});
