import React from "react";
import { Typography, LinearProgress, Grid } from "@material-ui/core";
import styles from "./style";

export const StatComponent = ({ stats = [] }) => {
  const classes = styles();
  return (
    <>
      {stats.map((stat, index) => (
        <Grid className={classes.gridContainer} key={index}>
          <Grid className={classes.gridStatContainer}>
            <Typography className={classes.statName}>
              {stat.stat.name}
            </Typography>
            <Typography>{stat.base_stat}</Typography>
          </Grid>
          <LinearProgress
            className={classes.linearProgressBar}
            variant="determinate"
            value={stat.base_stat}
          />
        </Grid>
      ))}
    </>
  );
};

export default StatComponent;
