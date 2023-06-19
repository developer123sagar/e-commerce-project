import { createSlice } from '@reduxjs/toolkit';

const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const userEmail = localStorage.getItem("userEmail") || "";


const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: isLoggedIn,
    userEmail: userEmail,
  },
  reducers: {
    setLoginStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
  },
});

export const { setLoginStatus, setUserEmail } = AuthSlice.actions;
export default AuthSlice.reducer;
