import rootReducer from './reducers';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';

const middleware=[thunk]
const initialState={}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  
  applyMiddleware(...middleware)
  
    ));
    export default store;