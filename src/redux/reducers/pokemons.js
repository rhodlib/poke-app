import {
  GET_POKEMONS_ERROR,
  GET_POKEMONS_START,
  GET_POKEMONS_COMPLETE
} from "../../constants/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_START:
      return { ...state, isLoading: true };
    case GET_POKEMONS_ERROR:
      return { ...state, isLoading: false, pokemonsResult: null };
    case GET_POKEMONS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        pokemonsResult: action,
      };
    default:
      return { ...state };
  }
}
