import { combineReducers } from 'redux';
import globalReducer from './index';
import mainPageReducer from '../containers/MainPage/reducer';

export default combineReducers({
  globalReducer,
  mainPageReducer,
});
