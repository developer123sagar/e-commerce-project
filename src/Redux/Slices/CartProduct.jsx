import { createSlice } from "@reduxjs/toolkit";

const cartProductSlice = createSlice({
  name: "cart",
  initialState: {
    cartDatas: [],
  },
  reducers: {
    addProduct(state, action) {
      state.cartDatas.push(action.payload);
    },
    removeProduct(state, action) {
      state.cartDatas = state.cartDatas.filter(
        (item) => item.uid !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = cartProductSlice.actions;
export default cartProductSlice.reducer;
