import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2/"

export const getPokemonsApiCall = () => axios.get(`${baseURL}pokemon/?&limit=710`);
export const getPokemonDataApiCall = name => axios.get(`${baseURL}pokemon/${name}`);