import { get } from 'lodash';

export const isLoading = state => get(state, 'isLoading');
export const pokemonsResult = state => get(state, 'pokemons.pokemonsResult.result.data.results');
export const pokemonDataResult = state => get(state, 'pokemons.pokemonDataResult.result.data');