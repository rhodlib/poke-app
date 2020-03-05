import {combineReducers} from 'redux';
import pokemons from './pokemons';
import berries from './berries';
import items from './items';

const rootReducer= combineReducers({
    pokemons,
    berries,
    items
});

export default rootReducer;