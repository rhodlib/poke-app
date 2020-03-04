import {
  orange,
  green,
  purple,
  blue,
  lightGreen,
  red,
  lime,
  brown,
  grey,
  deepPurple,
  yellow,
  indigo
} from "@material-ui/core/colors";

const typeColor = type => {
  switch (type) {
    case "fighting":
      return {
        backgroundColor: orange[700]
      };
    case "flying":
      return {
        backgroundColor: blue["A100"]
      };
    case "poison":
      return {
        backgroundColor: purple[500],
        color: "white"
      };
    case "ground":
      return {
        backgroundColor: lime[900],
        color: "white"
      };
    case "rock":
      return {
        backgroundColor: brown[900],
        color: "white"
      };
    case "bug":
      return {
        backgroundColor: lightGreen[500]
      };
    case "ghost":
      return {
        backgroundColor: deepPurple[700],
        color: "white"
      };
    case "steel":
      return {
        backgroundColor: grey[600],
        color: "white"
      };
    case "fire":
      return {
        backgroundColor: red["A700"],
        color: "white"
      };
    case "water":
      return {
        backgroundColor: blue[900],
        color: "white"
      };
    case "grass":
      return {
        backgroundColor: green[500],
        color: "white"
      };
    case "electric":
      return {
        backgroundColor: yellow["A200"],
        color: "white"
      };
    case "psychic":
      return {
        backgroundColor: purple["A400"],
        color: "white"
      };
    case "ice":
      return {
        backgroundColor: blue[500],
        color: "white"
      };
    case "dragon":
      return {
        backgroundColor: indigo[900],
        color: "white"
      };
    case "dark":
      return {
        backgroundColor: grey[900],
        color: "white"
      };
    case "fairy":
      return {
        backgroundColor: purple["A100"],
        color: "white"
      };
    default:
      return null;
  }
};

export default typeColor;
