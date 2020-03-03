import axios from 'axios';

const baseURL = "https://pokeapi.co/api/v2/"

export const getPokemonsApiCall = (url) => axios.get(baseURL + url + "/?&limit=710");
export const getPokemonApiCall = (url, name) => axios.get(baseURL + url + name)