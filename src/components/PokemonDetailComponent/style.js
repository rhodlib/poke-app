import { makeStyles } from "@material-ui/styles";

const centerObj = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export default makeStyles({
  gridContainer: {
    ...centerObj,
    minHeight: "300px"
  },
  imageAndName: {
    ...centerObj,
    textTransform: "capitalize"
  },
  gridAbilitiesContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  backContainer: {
    marginTop: '1rem'
  }
});
