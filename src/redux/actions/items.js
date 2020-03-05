import { GET_ITEMS_START, GET_ITEM_BY_ID_START } from "../../constants/actionTypes";

export const getItems = payload => ({
  type: GET_ITEMS_START,
  payload
});

export const getItemById = payload => ({
  type: GET_ITEM_BY_ID_START,
  payload
});
