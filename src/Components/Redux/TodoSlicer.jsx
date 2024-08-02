import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getproducts } from "../Pages/ApiCall";
import { Add_Item,Delete_Item,Update_Item } from "./Types";
export const fetchTodo = createAsyncThunk("user/fetchTodo",async() => {
    const data = await getproducts();
    return data.data;
    
})
const todoSlice =createSlice({
    name :'user',
    initialState :{
        isLoading :false,  
        data:[],
        error: false
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchTodo.pending, (state,action) =>{
            state.isLoading=true;
        });
        builder.addCase(fetchTodo.fulfilled, (state,action) =>{
            state.isLoading=false;
            state.data= action.payload
        });
        builder.addCase(fetchTodo.rejected, (state,action) =>{
            state.error=true;
        });
    }
})
export const {remove}  =todoSlice.actions
export default todoSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getproducts } from '../Pages/ApiCall';
// import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from './Types';
// export const fetchTodo = createAsyncThunk('user/fetchTodo', async () => {
//   const response = await getproducts();
//   return response.data;
// });

// const todoSlice = createSlice({
//   name: 'user',
//   initialState: {
//     isLoading: false,
//     data: [],
//     error: false,
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.data.push(action.payload);
//     },
//     deleteItem: (state, action) => {
//       state.data = state.data.filter(item => item.id !== action.payload);
//     },
//     updateItem: (state, action) => {
//       const index = state.data.findIndex(item => item.id === action.payload.id);
//       if (index !== -1) {
//         state.data[index] = action.payload;
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchTodo.pending, (state) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchTodo.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchTodo.rejected, (state) => {
//       state.isLoading = false;
//       state.error = true;
//     });
//   },
// });

// export const { addItem, deleteItem, updateItem } = todoSlice.actions;
// export default todoSlice.reducer;
