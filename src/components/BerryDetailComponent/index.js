import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import styles from "./style";
import { withRouter } from "react-router";

export const BerryDetailComponent = ({ berry, history }) => {
  const classes = styles();

  const handleClickBack = () => {
    history.push("/berries");
  };

  return (
    <Grid container className={classes.gridBerryDetailComponent}>
      <Grid className={classes.headerImageTitle}>
        <img
          className={classes.imageHeader}
          src={`/berries/${berry.name}.png`}
          alt={berry.name}
        />
        <Typography variant="h5">{berry.name}</Typography>
      </Grid>
      <Grid className={classes.gridContainer}>
        <Typography className={classes.typographyMargin} variant="h6">
          Effect
        </Typography>
        <Typography>{berry.effect_entries[0].effect}</Typography>
      </Grid>
      <Grid className={classes.gridContainer}>
        <Typography className={classes.typographyMargin} variant="h6">
          Category
        </Typography>
        <Button variant="outlined" color="secondary">
          {berry.category.name}
        </Button>
      </Grid>
      <Grid>
        <hr />
        <Button variant="contained" size="large" onClick={handleClickBack}>
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default withRouter(BerryDetailComponent);
