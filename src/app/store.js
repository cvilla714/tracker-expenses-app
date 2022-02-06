/* eslint-disable max-len */
import { configureStore } from '@reduxjs/toolkit';
import { checkLoginStatusapi } from '../features/user/statusSlice';

const store = configureStore({
  reducer: {
    [checkLoginStatusapi.reducerPath]: checkLoginStatusapi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkLoginStatusapi.middleware),
});

export default store;
