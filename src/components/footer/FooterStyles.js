import { makeStyles } from "@mui/styles";

export default makeStyles({
  Footer: {
    width: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    "& section": {
      padding: "1rem 2rem",
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
  },
  main: {
    height: "100%",
    backgroundColor: "#1a1a1a",
    borderBottom: "2px solid #bf965e",
  },
  bottom: {
    padding: "0.5rem 2rem",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  companyDetails: {
    display: "flex",
    alignItems: "center",
    borderRight: "1px solid white",
    paddingRight: "4rem",
    marginTop: "1rem",
    "& img": {
      width: "5rem",
      marginRight: "1rem",
    },
  },
  footer__title: {
    fontSize: "1.3rem",
  },
  contact: {
    "& div": {
      paddingTop: "1.5rem",
      borderTop: "1px solid white",
      color: "#bf965e",
    },
  },
  about: {
    maxWidth: "25rem",
    "& p:nth-of-type(2)": {
      paddingTop: "1.5rem",
      borderTop: "1px solid white",
    },
  },
  logoLinks: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: "7rem",
    "& div:nth-of-type(1)": {
      "& img": {
        margin: " 0 0.2rem",
      },
    },
  },
  logoLinks__bottom: {
    "& a": {
      transition: "all ease-in-out 0.3s",
      "&:hover": {
        "& img": {
          opacity: 0.5,
        },
      },
    },
    "& img": {
      maxHeight: "20px",
      margin: "0 0.2rem",
    },
  },
});
