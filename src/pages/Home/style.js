import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

export default makeStyles({
  logoImage: {
    display: "block",
    maxWidth: "320px",
    width: "80%",
    margin: "15px"
  },
  gridTitleContainer: {
      ...centeredStyleObj,
  },
  gridItemsContainer: {
      ...centeredStyleObj,
      flexWrap: 'wrap',
  }
});
