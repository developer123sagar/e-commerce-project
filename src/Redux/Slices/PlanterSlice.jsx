import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action
export const fetchPlanterAPI = createAsyncThunk("fetchPlanterAPI", async () => {
  try {
    const response = await axios.get(
      "https://express-js-api-two.vercel.app/planters"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const planterSlice = createSlice({
  name: "planter",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanterAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPlanterAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchPlanterAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default planterSlice.reducer;
