import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonData } from "../../redux/actions/pokemons";
import { pokemonDataResult } from "../../redux/selectors";
import CardContainer from "../../components/CardContainer";
import { CircularProgress } from "@material-ui/core";
import PokemonDetailComponent from "../../components/PokemonDetailComponent";

export const PokemonDetail = ({ match }) => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => pokemonDataResult(state));

  useEffect(() => {
    const param = match.params.name;
    dispatch(getPokemonData(param));
  }, [dispatch, match]);

  const renderPokemonInfo = () => {
    return pokemon === undefined ? (
      <CircularProgress size={100} color="primary" />
    ) : (
      <PokemonDetailComponent pokemon={pokemon} />
    );
  };

  return <CardContainer small={true}>{renderPokemonInfo()}</CardContainer>;
};

export default PokemonDetail;
