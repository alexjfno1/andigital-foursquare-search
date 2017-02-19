import { fetchSearchResults } from '../fetchers/Search';

export default store => next => action => {
  next(action);

  switch (action.type) {
    case 'SEARCH_SUBMIT':
      const searchValue = store.getState().search.value;
      return fetchSearchResults(searchValue, store.dispatch);
    default:
  }
};
