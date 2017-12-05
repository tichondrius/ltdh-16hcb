import { combineReducers } from 'redux';

import authReducer from './authReducer';
import uiReducer from './uiReducer';
import configReducer from './configReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  config: configReducer,
});

export default rootReducer;