// store.js
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './reducers/navigation'
const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    // Add other reducers here...
  },
});

export default store;
