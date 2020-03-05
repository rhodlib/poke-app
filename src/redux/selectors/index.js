import { get } from 'lodash';

// Loading selector.
export const isLoading = state => get(state, 'isLoading');

// Pkm selector.
export const pokemonsResult = state => get(state, 'pokemons.pokemonsResult.result.data.results');
export const pokemonDataResult = state => get(state, 'pokemons.pokemonDataResult.result.data');

// Berries selector.
export const berriesResult = state => get(state, 'berries.berriesDataResult.result.data.results');
export const berriesItemEffect = state => get(state, 'items.itemResult.result.data.effect_entries[0].short_effect');

// Items selector.
export const itemsResult = state => get(state, 'items.itemsResult.result.data.results')

