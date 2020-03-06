import {
  GET_ITEMS_START,
  GET_ITEMS_ERROR,
  GET_ITEMS_COMPLETE,
  GET_ITEM_BY_ID_START,
  GET_ITEM_BY_ID_ERROR,
  GET_ITEM_BY_ID_COMPLETE,
} from "../constants/actionTypes";

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_START:
      return { ...state, isLoading: true };
    case GET_ITEMS_ERROR:
      return { ...state, isLoading: false };
    case GET_ITEMS_COMPLETE:
      return { ...state, isLoading: false, itemsResult: action };
    case GET_ITEM_BY_ID_START:
      return { ...state, isLoading: true };
    case GET_ITEM_BY_ID_ERROR:
      return { ...state, isLoading: false };
    case GET_ITEM_BY_ID_COMPLETE:
      return { ...state, isLoading: false, itemResult: action };
    default:
      return { ...state };
  }
}
