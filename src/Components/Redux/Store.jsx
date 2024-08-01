import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Redux/TodoSlicer'
import { remove } from '../Redux/TodoSlicer';
export const store = configureStore({
    reducer : { 
         user : todoReducer
        }
  
})