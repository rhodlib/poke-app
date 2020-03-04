import {GET_POKEMONS_START, GET_POKEMON_DATA_START} from '../../constants/actionTypes';

export const getPokemons = payload => ({
    type: GET_POKEMONS_START,
    payload
});

export const getPokemonData = payload => ({
    type: GET_POKEMON_DATA_START,
    payload
});