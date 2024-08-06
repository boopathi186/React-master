import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getproducts } from '../Pages/ApiCall';


export const fetchTodo = createAsyncThunk('user/fetchTodo', async () => {
  const response = await getproducts();
  return response.data;
});

const todoSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    data: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodo.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export default todoSlice.reducer;

// import {Fetch_productFailure,Fetch_productSuccess,Fetch_productReq } from './Types';

// const initialState = {
//   isLoading: false,
//   data: [],
//   error: false,
// };

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Fetch_productReq:
//       return { ...state, isLoading: true, error: false };
//     case Fetch_productSuccess:
//       return { ...state, isLoading: false, data: action.payload };
//     case Fetch_productFailure:
//       return { ...state, isLoading: false, error: true };
//     default:
//       return state;
//   }
// };

// export default todoReducer;