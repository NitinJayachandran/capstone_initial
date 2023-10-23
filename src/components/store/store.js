  // store.js
  import { createStore } from 'redux';
  import { authReducer } from './reducers';
  
  const store = configureStore(authReducer);
  
  export default store;