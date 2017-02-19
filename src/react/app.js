import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import FourSquareSearch from './containers/FourSquareSearch';

import './styles/app.scss';

ReactDOM.render(
  <Provider store={store}>
    <FourSquareSearch />
  </Provider>,
  document.getElementById('app')
);
