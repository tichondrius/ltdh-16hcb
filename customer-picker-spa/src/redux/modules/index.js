import { combineReducers } from 'redux';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import configReducer from './configReducer';
import carReducer from './carReducer';
import pointReducer from './pointReducer';
import infoReducer from './infoReducer'; 

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  config: configReducer,
  info: infoReducer,
  point: pointReducer,
  car: carReducer,
});

export default rootReducer;