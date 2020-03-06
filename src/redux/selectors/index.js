import { get } from 'lodash';

// Pkm selector.
export const pokemonsResult = state => get(state, 'pokemons.pokemonsResult.result.data.results');
export const pokemonDataResult = state => get(state, 'pokemons.pokemonDataResult.result.data');
export const pkmIsLoading = state => get(state, 'pokemons.isLoading')

// Berries selector.
export const berriesResult = state => get(state, 'berries.berriesDataResult.result.data.results');
export const berryItemData = state => get(state, 'items.itemResult.result.data');

// Items selector.
export const itemsResult = state => get(state, 'items.itemsResult.result.data.results')
export const itemIsLoading = state => get(state, 'items.isLoading');

