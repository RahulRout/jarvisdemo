import { createSlice } from '@reduxjs/toolkit';
import { InitialStateInterface } from '../Interfaces';
import type { RootState } from '../store';

// redux initial data
const initialState: InitialStateInterface = {
  data: {
    Email: '',
    Password: ''
  },
  posts: {

  }
};

//redux toolkit reducer functions

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {

    // reducer to add users
    add: (state, action) => {
      const {
        payload: { email, password },
      } = action;
      return {
        ...state,
        data: { Email: email, Password: password },
      };
    },
    // reducer to set posts
    setPost: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        posts: payload,
      };
    },
  },
});

export const { add } = appReducer.actions;

export const appData = (state: RootState) => state.appReducer;

export default appReducer.reducer;
