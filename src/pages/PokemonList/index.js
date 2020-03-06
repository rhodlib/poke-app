import React, { useEffect } from "react";
import { Button, Grid, LinearProgress } from "@material-ui/core";
import CardContainer from "../../components/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions/pokemons";
import { pokemonsResult } from "../../redux/selectors";
import PokemonCardComponent from "../../components/PokemonCardComponent";
import styles from './style';
import {withRouter} from 'react-router';

export const PokemonList = ({history}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const pokemons = useSelector(state => pokemonsResult(state));

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handleBackClick = () => {
    history.push('/');
  }

  const renderPkmns = () => {
    return pokemons === undefined ? (
      <LinearProgress size={50} color="primary" />
    ) : (
      pokemons.map((value, index) => (
        <PokemonCardComponent
          key={index}
          title={value.name}
          index={index + 1}
        />
      ))
    );
  };

  return (
    <Grid className={classes.gridContainer}>
      <CardContainer>{renderPkmns()}</CardContainer>
      <Button variant="contained" color="secondary" onClick={handleBackClick}>To home</Button>
    </Grid>
  );
};

export default withRouter(PokemonList);
