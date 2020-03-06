import {
  GET_POKEMONS_ERROR,
  GET_POKEMONS_START,
  GET_POKEMONS_COMPLETE,
  GET_POKEMON_DATA_START,
  GET_POKEMON_DATA_COMPLETE,
  GET_POKEMON_DATA_ERROR
} from "../constants/actionTypes";

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
        pokemonsResult: action
      };
    case GET_POKEMON_DATA_START:
      return { ...state, isLoading: true };
    case GET_POKEMON_DATA_ERROR:
      return { ...state, isLoading: false, pokemonDataResult: null };
    case GET_POKEMON_DATA_COMPLETE:
      return {
        ...state,
        isLoading: false,
        pokemonDataResult: action
      };
    default:
      return { ...state };
  }
}
