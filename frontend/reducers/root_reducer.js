import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities/entities_reducer';
import errorsReducer from './errors/errorsReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  sessionReducer: sessionReducer,
  errors: errorsReducer,
});

export default rootReducer;
