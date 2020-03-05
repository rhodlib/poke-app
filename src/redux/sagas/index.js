import { all } from "redux-saga/effects";
import pokemons from "./pokemons";
import berries from "./berries";
import items from './items';

export default function* rootSaga() {
  yield all([pokemons(), berries(), items()]);
}
