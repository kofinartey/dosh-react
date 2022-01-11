import { makeStyles } from "@mui/styles";

const HeaderStyles = makeStyles({
  Header: {
    backgroundColor: "#1a1a1a",
    display: "flex",
    flexDirection: "column",
  },
  header__top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 2rem",
    color: "white",
    "& img": {
      width: "10rem",
    },
  },
  header__bottom: {
    width: "100%",
  },
  header__form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    "& input": {
      width: "14.125rem",
      background: "linear-gradient(90deg, #303030 0%, #525252 100%)",
      color: "white",
      border: "none",
      borderRadius: "10rem",
      padding: "0.3rem",
      marginRight: "1rem",
    },
    "& button": {
      backgroundColor: "#747474",
      padding: "0.2rem 1rem",
      color: "white",
    },
    "& p": {
      fontSize: "0.8rem",
      marginTop: "1rem",
    },
    "& a": {
      color: "#f2c780",
    },
  },
});

export default HeaderStyles;
