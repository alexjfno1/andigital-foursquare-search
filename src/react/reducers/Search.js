const reduceVenues = (data) => {
  const recommendedPlaces = data.response.groups.find(group => group.name === 'recommended');
  return recommendedPlaces.items.map((place) => {
    const id = place.venue.id;
    const name = place.venue.name;
    const address = place.venue.location.formattedAddress.join(', ');
    const rating = place.venue.rating;

    return { id, name, address, rating };
  });
};

export default (state = { value: '' }, action) => {
  switch (action.type) {
    case 'SEARCH_BOX_CHANGE':
      return { ...state, value: action.value };
    case 'SEARCH_RESULT_DATA': {
      const { data } = action.response;
      const displayName = data.response.geocode.displayString;
      const venues = reduceVenues(data);

      return {
        ...state,
        results: {
          displayName,
          venues
        }
      };
    }
    default:
      return state;
  }
};
