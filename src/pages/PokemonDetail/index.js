import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const PokemonDetail = ({match}) => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state);

    useEffect(()=> {
        
    })

    return (
        <div>Pokemon Detail</div>
    )
};

export default PokemonDetail;