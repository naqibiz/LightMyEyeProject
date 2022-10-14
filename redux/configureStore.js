import {createStore, combineReducers} from 'redux';
import rootReducer from './reducers';
const Reducer = combineReducers(rootReducer);
const configureStore = () => {
  return createStore(Reducer);
};
export default configureStore;
