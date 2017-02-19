import axios from 'axios';
import config from '../config';

export const fetchSearchResults = async (searchValue, dispatch) => {
  const response = await axios.get(`${config.fourSquareVenuesURL}/explore?client_id=${config.fourSquareClientID}&client_secret=${config.fourSquareClientSecret}&v=20170219&near=${searchValue}`);
  dispatch({
    type: 'SEARCH_RESULT_DATA',
    response
  });
};
