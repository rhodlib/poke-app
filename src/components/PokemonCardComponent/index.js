import React from "react";
import styles from "./style";
import { Card, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const PokemonCardComponent = ({ index, title }) => {
  const classes = styles();

  return (
    <Link to={`/pokemon/${title}`} className={classes.linkContainer}>
      <Card className={classes.cardContainer}>
        <img src={`/model/${index}.png`} alt={title} className={classes.imagePkmCard} />
        <Typography className={classes.title}>
          {`#${index} - ${title}`}
        </Typography>
      </Card>
    </Link>
  );
};

export default PokemonCardComponent;
