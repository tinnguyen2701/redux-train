import { combineReducers, createStore } from 'redux';
import {countReducer as count} from './duck'

const rootReducer = combineReducers({
  count,
  // more reducer
});

const store = createStore(rootReducer);

export default store;
