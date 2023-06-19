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
    removeOneProd(state,action){
      const index = state.cartDatas.findIndex((item)=>item.uid ===action.payload)
      if (index !== -1) state.cartDatas.splice(index,1)
    }
  },
});

export const { addProduct, removeProduct, removeOneProd } = cartProductSlice.actions;
export default cartProductSlice.reducer;
