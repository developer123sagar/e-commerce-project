import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartProduct";
import authReducer from "./Auth/AuthSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});
