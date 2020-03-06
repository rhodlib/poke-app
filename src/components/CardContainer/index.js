import React from "react";
import { Container, Card } from "@material-ui/core";
import styles from "./style";

export const CardContainer = ({ children, small = false }) => {
  const classes = styles();
  return (
    <Container
      className={small ? classes.containerSmall : classes.containerBig}
    >
      <Card className={classes.cardContainer}>{children}</Card>
    </Container>
  );
};

export default CardContainer;
