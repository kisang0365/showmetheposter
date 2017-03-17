import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import getlistReducer from './getlist_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  getList : getlistReducer
});

export default rootReducer;
