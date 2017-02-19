import searchReducer from '../../src/react/reducers/Search';
import { response } from '../../fixtures/searchResult';

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

  describe('SEARCH_RESULT_DATA', () => {
    it('returns the found search results', () => {
      const action = { type: 'SEARCH_RESULT_DATA', response: { data: response } };
      const state = searchReducer({ value: 'Tonbridge' }, action);

      expect(state).to.deep.equal({
        value: 'Tonbridge',
        results: {
          displayName: 'Tonbridge, Kent, United Kingdom',
          venues: [{
            id: '4b9baba8f964a5209f1836e3',
            name: 'Penshurst Place',
            address: 'Penshurst, Tonbridge, Kent, TN11 8DG, United Kingdom',
            rating: 8.7
          }]
        }
      });
    });
  });
});
