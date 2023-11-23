import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
  },

  reducers: {
    register: (state, action) => {
      state.email = action.payload.email;
    },
    logout: (state, action) => {
      // Aquí puedes realizar las acciones necesarias para el logout si las necesitas
    },
    checkingCredentials: (state, action) => {
      console.log('checking');
    },
    login: (state, action) => {
      // Aquí puedes realizar las acciones necesarias para el login si las necesitas
    },
  },
});

export const { register, logout, checkingCredentials, login } = authSlice.actions;
