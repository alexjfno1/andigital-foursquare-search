import { compose, createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const middleware = [];

const enhancers = [
  applyMiddleware(...middleware)
];

const enhancer = compose(...enhancers);
const store = createStore(reducers, enhancer);

export default store;
