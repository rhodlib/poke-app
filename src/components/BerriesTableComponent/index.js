import React from "react";
import { TableRow, TableCell, Button, Typography } from "@material-ui/core";
import styles from "./style";

export const BerriesTableComponent = ({ berries = [] }) => {
  const classes = styles();
  return (
    <>
      {berries.map((berry, index) => {
        return (
          <TableRow key={index + 1}>
            <TableCell padding="none" component="th" scope="row" align="center">
              <img src={`/berries/${berry.name}-berry.png`} alt={berry.name} />
            </TableCell>
            <TableCell
              padding="none"
              align="center"
              className={classes.capitalizeCss}
            >
              <Typography>{berry.name}</Typography>
            </TableCell>
            <TableCell padding="none" align="center">
              <Button
                variant="outlined"
                color="secondary"
                className={classes.capitalizeCss}
              >
                >
              </Button>
            </TableCell>
          </TableRow>
        );
      })}
    </>
  );
};

export default BerriesTableComponent;
