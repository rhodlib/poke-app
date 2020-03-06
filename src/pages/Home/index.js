import React from "react";
import { Grid } from "@material-ui/core";
import assets from "../../assets";
import styles from "./style";
import CardContainer from "../../components/CardContainer";
import MenuCard from "../../components/MenuCard";

export const Home = () => {
  const classes = styles();

  return (
    <CardContainer small>
      <Grid container className={classes.gridItemsContainer}>
        <Grid className={classes.gridTitleContainer}>
          <img className={classes.logoImage} src={assets.pokelogo} alt="logo" />
        </Grid>
        <Grid className={classes.gridItemsContainer}>
          <MenuCard title="Pokedex" path="/pokemons" url={assets.pokedex}/>
          <MenuCard title="Berries" path="/berries" url={assets.berry}/>
        </Grid>
      </Grid>
    </CardContainer>
  );
};

export default Home;
