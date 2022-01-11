import { makeStyles } from "@mui/styles";
import bg from "./assets/images/bg.png";

export default makeStyles({
  DoshApp: {
    width: "100%",
    height: "100vh",
    background: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    // backgroundSize: "contain",
    backgroundSize: "auto 100%",
    // backgroundColor: "red",
  },
});
