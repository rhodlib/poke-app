import React from "react";
import { Container, Card } from "@material-ui/core";
import styles from "./style";

export const CardContainer = ({ children }) => {
  const classes = styles();
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>{children}</Card>
    </Container>
  );
};

export default CardContainer;
