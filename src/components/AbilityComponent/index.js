import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  buttonAbility: {
    margin: "5px",
    textTransform: "Capitalize"
  }
});

export const AbilitiesComponent = ({ abilities = [] }) => {
  const classes = styles();
  return (
    <>
      {abilities.map((ability, index) => (
        <Button key={index} className={classes.buttonAbility} variant="outlined">{ability.ability.name}</Button>
      ))}
    </>
  );
};

export default AbilitiesComponent;
