import searchMiddleware from '../../src/react/middleware/Search';
import * as fetchers from '../../src/react/fetchers/Search';

describe('src/react/middleware/Search', () => {
  it('calls next', sinon.test(function () {
    const next = this.spy();
    const store = {};
    const action = { type: 'ACTION' };

    searchMiddleware(store)(next)(action);

    expect(next).to.have.been.calledWith(action);
  }));

  describe('SUBMIT_SEARCH', () => {
    it('calls fetchSearchResults', sinon.test(function () {
      const searchValue = 'A town';
      const action = { type: 'SEARCH_SUBMIT' };
      const next = this.spy();
      const store = {
        dispatch: this.spy(),
        getState: () => ({
          search: {
            value: searchValue
          }
        })
      };

      const fetchersMock = this.mock(fetchers);
      fetchersMock.expects('fetchSearchResults').withArgs(searchValue, store.dispatch);

      searchMiddleware(store)(next)(action);
    }));
  });
});
