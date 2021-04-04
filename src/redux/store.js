import { createStore } from 'redux';

import RootReducer from 'redux/reducers';

let initialState = {};
let store = createStore(RootReducer, initialState);

export default store;
