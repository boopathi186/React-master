import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { getproducts } from "../Pages/ApiCall";
export const fetchTodo = createAsyncThunk("fetchTodo",async() => {
    const data = await fetch ('https://api.escuelajs.co/api/v1/products')
    return data.json();
})
const todoSlice =createSlice({
    name :'todo',
    initialState :{
        isLoading :false,
        data:[],
        error: false
    },
    extraReducers : (builder) =>{
        builder.addCase(fetchTodo.pending, (state,action) =>{
            state.isLoading=true
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
export default todoSlice.reducer;