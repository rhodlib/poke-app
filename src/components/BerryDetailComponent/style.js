import { makeStyles } from "@material-ui/styles";

const centeredObj = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};

export default makeStyles({
  gridBerryDetailComponent: {
    ...centeredObj,
    padding: "0px",
    minHeight: "300px"
  },
  headerImageTitle: {
    ...centeredObj,
    textTransform: "capitalize",
    width: "100%"
  },
  gridContainer: {
    padding: "0.5rem",
    width: "100%"
  },
  typographyMargin: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    alignSelf: "left"
  },
  imageHeader: {
    margin: "1rem"
  }
});
