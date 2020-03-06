import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import typeColors from "../../utils/typeColors";

const styles = makeStyles({
  buttonType: {
    margin: "5px"
  }
});

export const TypeComponent = (types = []) => {
  const classes = styles();
  return (
    <>
      {types.types.map((type, index) => (
        <Button
          key={index}
          variant="contained"
          className={classes.buttonType}
          style={typeColors(type.type.name)}
        >
          {type.type.name}
        </Button>
      ))}
    </>
  );
};

export default TypeComponent;
