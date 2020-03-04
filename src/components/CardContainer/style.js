import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  containerBig: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObj,
  },
  containerSmall: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObj,
    maxWidth: "400px",
  },
  cardContainer: {
    width: "80%",
    padding: "2rem",
    ...centeredStyleObj,
    flexWrap: 'wrap',
  }

});
