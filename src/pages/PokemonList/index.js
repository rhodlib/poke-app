import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import CardContainer from "../../components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/pokemons";
import { pokemonsResult } from "../../redux/selectors";
import PokemonCardComponent from "../../components/PokemonCardComponent";

export const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => pokemonsResult(state));

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const renderPkmns = () => {
    return pokemons === undefined ? (
      <CircularProgress size={100} color="primary" />
    ) : (
      pokemons.map((value, index) => (
        <PokemonCardComponent key={index} title={value.name} index={index+1} />
      ))
    );
  };
  console.log(pokemons);

  return <CardContainer>{renderPkmns()}</CardContainer>;
};

export default PokemonList;
