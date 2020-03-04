import React from "react";
import { Typography, Grid } from "@material-ui/core";
import styles from "./style";
import TypeComponent from "../TypeComponent";
import AbilitiesComponent from "../AbilityComponent";
import StatComponent from "../StatComponent";

export const PokemonDetailComponent = ({ pokemon }) => {
  const classes = styles();
  return (
    <Grid container className={classes.gridContainer}>
      <Grid className={classes.imageAndName}>
        <img src={`/model/${pokemon.id}.png`} alt={pokemon.name} />
        <Typography variant="h5">{pokemon.name}</Typography>
      </Grid>
      <Grid>
        <TypeComponent types={pokemon.types} />
      </Grid>
      <Typography variant="h6">Abilities</Typography>
      <Grid className={classes.gridAbilitiesContainer}>
        <AbilitiesComponent abilities={pokemon.abilities} />
      </Grid>
      <Typography variant="h6">Basic Stats</Typography>
      <Grid>
        <StatComponent stats={pokemon.stats} />
      </Grid>
    </Grid>
  );
};

export default PokemonDetailComponent;
