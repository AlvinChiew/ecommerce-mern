import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

export const { setCredential, logout } = authSlice.actions;
