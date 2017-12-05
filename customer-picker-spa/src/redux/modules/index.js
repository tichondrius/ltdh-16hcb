import { combineReducers } from 'redux';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import roomReducer from './roomReducer';
import configReducer from './configReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  room: roomReducer,
  config: configReducer,
});

export default rootReducer;