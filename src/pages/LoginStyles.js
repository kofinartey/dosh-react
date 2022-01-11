import { makeStyles } from "@mui/styles";

export default makeStyles({
  Login: {
    height: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Card: {
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "35rem",
    margin: "auto",
    padding: "2rem",
    borderRadius: "1rem",
    color: "#b8b8b8",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    width: "1rem",
    position: "absolute",
    right: "2rem",
    top: "2rem",
  },
  form__head: {
    fontSize: "1.3rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  form__control: {
    margin: "0.8rem 0",
    "& label": {
      marginRight: "0.5rem",
    },
    "& input[type='text']": {
      width: "20rem",
      padding: "0.3rem",
      borderRadius: "0.5rem",
    },
    "&:nth-of-type(1)": {
      display: "flex",

      "& div": {
        display: "flex",
        width: "20rem",
        alignItems: "center",
      },
      "& label": {
        display: "flex",
      },
      "& input": { display: "none" },
      "& $custom__radio": {
        width: "1.3rem",
        height: "1.3rem",
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "0.5rem",
        "& div": {
          content: "",
          width: "1rem",
          height: "1rem",
          background:
            "linear-gradient(51.95deg, #be953c 17.48%, #e7d99f 86.83%)",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "all 0.1s ease-in-out",
          backgroundColor: "red",
        },
      },
    },
  },
  custom__radio: {},
  numberInput: {
    display: "flex",
    "& div": {
      width: "20rem",
      //   height: "1rem",
      display: "flex",
      justifyContent: "space-between",
      "& input[type='text']": {
        width: "70%",
      },
      "& select": {
        width: "25%",
        borderRadius: "0.5rem",
      },
    },
  },
  forgot: {
    fontSize: "0.8rem",
    color: "#caa959 !important",
    alignSelf: "flex-start",
    marginLeft: "23%",
    "& img": {
      width: "0.8rem",
      marginRight: "1rem",
    },
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "1rem",
    borderStyle: "none",
    background: "linear-gradient(90deg, #e7d99f 20.43%, #be953c 100%)",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "all 0.1s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(120%)",
    },
  },
});
