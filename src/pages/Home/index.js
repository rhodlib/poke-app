import React from "react";
import { Grid } from "@material-ui/core";
import Logo from "../../assets/Poke_logo.png";
import styles from "./style";
import PokemonCardComponent from "../../components/PokemonCardComponent";
import CardContainer from "../../components/CardContainer";

export const Home = () => {
  const classes = styles();

  return (
    <CardContainer>
      <Grid container className={classes.gridItemsContainer}>
        <Grid className={classes.gridTitleContainer}>
          <img className={classes.logoImage} src={Logo} alt="logo" />
        </Grid>
        <Grid className={classes.gridItemsContainer}>
          <PokemonCardComponent
            path="/pokemons"
            url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            title="Pokemon"
          />
          <PokemonCardComponent
            url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            title="Berries"
          />
          <PokemonCardComponent
            url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            title="Locations"
          />
          <PokemonCardComponent
            url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            title="Games"
          />
          <PokemonCardComponent
            url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            title="MT's"
          />
          <PokemonCardComponent
            url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            title="Moves"
          />
        </Grid>
      </Grid>
    </CardContainer>
  );
};

export default Home;
