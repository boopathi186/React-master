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
        // remove : (state,action) => {
        // state.user = state.user.filter(u => u.id !== action.payload)
        // }
    }
})
export const {remove}  =todoSlice.actions
export default todoSlice.reducer;