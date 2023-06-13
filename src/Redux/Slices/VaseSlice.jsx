import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action
export const fetchVasesAPI = createAsyncThunk("fetchVasesAPI", async () => {
  try {
    const response = await axios.get(
      "https://express-js-api-two.vercel.app/vases"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const vasesSlice = createSlice({
  name: "vases",
  initialState: {
    isLoading: false,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVasesAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVasesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchVasesAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default vasesSlice.reducer;
