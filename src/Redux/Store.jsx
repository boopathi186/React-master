
import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../Redux/ApiSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});




// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from '../Redux/TodoSlicer';

// export const store = configureStore({
//   reducer: {
//     user: todoReducer,  
//   },
// });
