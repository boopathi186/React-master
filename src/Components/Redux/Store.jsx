import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Redux/TodoSlicer'
export const store = configureStore({
    reducer : { 
         todo : todoReducer
        }
  
})