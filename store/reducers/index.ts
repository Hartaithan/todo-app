import { combineReducers } from 'redux';
import appReducer from './appReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  app: appReducer,
  todo: todoReducer,
});

export default rootReducer;
