import { put, call, takeLatest } from "redux-saga/effects";
import {
  GET_POKEMONS_COMPLETE,
  GET_POKEMONS_START,
  GET_POKEMONS_ERROR,
  GET_POKEMON_DATA_COMPLETE,
  GET_POKEMON_DATA_ERROR,
  GET_POKEMON_DATA_START
} from "../constants/actionTypes";

import { getPokemonsApiCall, getPokemonDataApiCall } from "../api";

function* getPokemons({ payload }) {
  try {
    const result = yield call(getPokemonsApiCall, payload);
    yield put({ type: GET_POKEMONS_COMPLETE, result });
  } catch (error) {
    yield put({ type: GET_POKEMONS_ERROR, error });
  }
}

function* getPokemonData({ payload }) {
    try {
        const result = yield call(getPokemonDataApiCall, payload);
        yield put({ type: GET_POKEMON_DATA_COMPLETE, result});
    } catch (error) {
        yield put({ type: GET_POKEMON_DATA_ERROR, error});
    }
}


export default function* pokemons() {
  yield takeLatest(GET_POKEMONS_START, getPokemons);
  yield takeLatest(GET_POKEMON_DATA_START, getPokemonData);
}
