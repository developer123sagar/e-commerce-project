import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartProduct";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
