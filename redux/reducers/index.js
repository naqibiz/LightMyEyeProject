import {combineReducers} from 'redux';
import RegisterReducer from './RegisterReducer';

const appReducer = combineReducers({
  register: RegisterReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'DESTROY_SESSION') {
    AsyncStorage.removeItem('persist:root');
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
