import {Fetch_productFailure,Fetch_productReq,fetchTodoSuccess } from './Types';
import { getproducts } from '../Pages/ApiCall';
import { Fetch_productSuccess } from './Types';

export const fetchTodoRequest = () => ({
  type: Fetch_productReq,
});

export const fetchTodoSuccess = (data) => ({
  type: Fetch_productSuccess,
  payload: data,
});

export const fetchTodoFailure = (error) => ({
  type: Fetch_productFailure,
  payload: error,
});

export const fetchTodo = () => {
  return async (dispatch) => {
    dispatch(fetchTodoRequest());
    try {
      const response = await getproducts();
      dispatch(fetchTodoSuccess(response.data));
    } catch (error) {
      dispatch(fetchTodoFailure(error));
    }
  };
};