import { combineReducers } from 'redux';
import getlistReducer from './getlist_reducer';

const rootReducer = combineReducers({
  getList : getlistReducer
});

export default rootReducer;
