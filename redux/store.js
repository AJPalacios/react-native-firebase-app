import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

// first step, create store
export default createStore(rootReducer, {user: "Adan"});