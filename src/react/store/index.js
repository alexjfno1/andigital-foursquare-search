import { compose, createStore, applyMiddleware } from 'redux';
import searchMiddleware from '../middleware/Search';
import reducers from '../reducers';

const middleware = [
  searchMiddleware
];

const enhancers = [
  applyMiddleware(...middleware)
];

const enhancer = compose(...enhancers);
const store = createStore(reducers, enhancer);

export default store;
