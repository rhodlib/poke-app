import {GET_POKEMONS_START} from '../../constants/actionTypes';

export const getPokemons = payload => ({
    type: GET_POKEMONS_START,
    payload
});