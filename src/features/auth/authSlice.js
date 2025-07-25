import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
const initialState = {
  email: '',
  token: JSON.parse(token) || null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload;
      state.token = { email: action.payload, id: crypto.randomUUID() };
      localStorage.setItem('token', JSON.stringify(state.token));
    },
    logout: (state) => {
      state.email = '';
      state.token = null;
      localStorage.removeItem('token');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
