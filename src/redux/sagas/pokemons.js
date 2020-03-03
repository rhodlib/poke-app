import {put, call, takeLatest} from 'redux-saga/effects';
import {GET_POKEMONS_COMPLETE, GET_POKEMONS_START, GET_POKEMONS_ERROR} from '../../constants/actionTypes';

import {getPokemonsApiCall} from '../api';

export function*  getPokemons({payload}) {
    try {
        const result = yield call( getPokemonsApiCall, payload );
        yield put({type: GET_POKEMONS_COMPLETE, result});
    } catch (error) {
        yield put({type: GET_POKEMONS_ERROR, error});      
    }
}

export default function * pokemons() {
    yield takeLatest(GET_POKEMONS_START, getPokemons);
}

