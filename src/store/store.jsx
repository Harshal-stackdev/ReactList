/**
 * Redux Store Configuration
 */

import { createStore } from 'redux';
import reducer from './reducers';

// Create the Redux store with the combined reducer
const store = createStore(reducer);

export default store;
