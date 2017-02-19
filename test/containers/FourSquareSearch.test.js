import React from 'react';
import { Provider } from 'react-redux';
import FourSquareSearch from '../../src/react/containers/FourSquareSearch';
import FourSquareSearchComponent from '../../src/react/components/FourSquareSearch';

const setup = (sandbox) => {
  const store = {
    subscribe: sandbox.spy(),
    dispatch: sandbox.spy(),
    getState: () => ({})
  };
  const wrapper = mount(
    <Provider store={store}>
      <FourSquareSearch />
    </Provider>
  );
  const props = wrapper.find(FourSquareSearchComponent).props();

  return {
    dispatch: store.dispatch,
    props
  };
};

describe('src/react/containers/FourSquareSearch', () => {
  describe('handleSearchBoxChange', () => {
    it('dispatches SEARCH_BOX_CHANGE action with search value', sinon.test(function () {
      const { props, dispatch } = setup(this);
      const searchValue = 'A town';

      props.handleSearchBoxChange(searchValue);

      expect(dispatch).to.have.been.calledWith({
        type: 'SEARCH_BOX_CHANGE',
        value: searchValue
      });
    }));
  });

  describe('handleSearchSubmit', () => {
    it('dispatches SEARCH_SUBMIT action', sinon.test(function () {
      const { props, dispatch } = setup(this);

      props.handleSearchSubmit();

      expect(dispatch).to.have.been.calledWith({
        type: 'SEARCH_SUBMIT'
      });
    }));
  });
});
