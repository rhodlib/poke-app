import {
  GET_BERRIES_START,
  GET_BERRIES_ERROR,
  GET_BERRIES_COMPLETE
} from "../../constants/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BERRIES_START:
      return { ...state, isLoading: true };
    case GET_BERRIES_ERROR:
      return { ...state, isLoading: false };
    case GET_BERRIES_COMPLETE:
      return { ...state, isLoading: false, berriesDataResult: action };
    default:
      return { ...state };
  }
}
