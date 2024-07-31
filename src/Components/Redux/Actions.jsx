import { ADD_ITEM, FETCH_ITEMS, UPDATE_ITEM, DELETE_ITEM } from '../Redux/Types';

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const fetchItems = (items) => ({
  type: FETCH_ITEMS,
  payload: items,
});

export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  payload: item,
});

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId,
});
