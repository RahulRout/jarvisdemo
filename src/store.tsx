import { configureStore } from '@reduxjs/toolkit';
import appReducer from './Redux/AppReducer';
import thunk from 'redux-thunk';

//configure store
export const store = configureStore({
  reducer: {
    appReducer: appReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;