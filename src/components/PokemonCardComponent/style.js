import { makeStyles } from "@material-ui/styles";

export default makeStyles({
  linkContainer: {
    textDecoration: "none",
  },
  cardContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
    width:'150px',
    height: '150px'
  },
  title: {
    textAlign: "center",
    padding: "0.5rem"
  },
  imagePkmCard: {
      maxWidth: '120px'
  }
});
