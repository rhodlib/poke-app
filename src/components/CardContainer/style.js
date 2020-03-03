import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  container: {
    height: "100vh",
    flexDirection: "column",
    ...centeredStyleObj,
  
  },
  cardContainer: {
    width: "80%",
    padding: "2rem",
    ...centeredStyleObj,
    flexWrap: 'wrap',
    overflow: 'scroll'
  }

});
