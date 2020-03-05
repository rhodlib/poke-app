import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2/"

// Pkm apiCalls.

export const getPokemonsApiCall = () => axios.get(`${baseURL}pokemon/?&limit=710`);
export const getPokemonDataApiCall = name => axios.get(`${baseURL}pokemon/${name}`);

// Berries apiCalls.

export const getBerriesApiCall = () => axios.get(`${baseURL}berry?offset=20&limit=100"`)

// Items apiCalls.

export const getItemsApiCall = () => axios.get(`${baseURL}item?offset=20&limit=1000`);
export const getItemByIdApiCall = id => axios.get(`${baseURL}item/${id}`);