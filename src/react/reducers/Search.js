export default (state = { value: '' }, action) => {
  switch (action.type) {
    case 'SEARCH_BOX_CHANGE':
      return { ...state, value: action.value };
    default:
      return state;
  }
};
