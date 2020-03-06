import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import styles from "./style";
import TypeComponent from "../TypeComponent";
import AbilitiesComponent from "../AbilityComponent";
import StatComponent from "../StatComponent";
import { withRouter } from "react-router";

export const PokemonDetailComponent = ({ pokemon, history }) => {
  const classes = styles();

  const handleClickBack = () => {
    history.push("/pokemons");
  };

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
      <Grid className={classes.backContainer}>
        <hr />
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={handleClickBack}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default withRouter(PokemonDetailComponent);
