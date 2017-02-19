import searchReducer from '../../src/react/reducers/Search';

describe('src/react/reducers/Search', () => {
  it('returns default state', () => {
    const action = { type: '' };
    const state = searchReducer(undefined, action);

    expect(state).to.deep.equal({ value: '' });
  });

  it('returns current state when action is unknown', () => {
    const action = { type: 'UNKNOWN' };
    const searchValue = 'A town';
    const state = searchReducer({ value: searchValue }, action);

    expect(state).to.deep.equal({ value: searchValue });
  });

  describe('SEARCH_BOX_CHANGE', () => {
    it('returns the search value entered', () => {
      const searchValue = 'A town';
      const action = { type: 'SEARCH_BOX_CHANGE', value: searchValue };
      const state = searchReducer({}, action);

      expect(state).to.deep.equal({ value: searchValue });
    });
  });
});
