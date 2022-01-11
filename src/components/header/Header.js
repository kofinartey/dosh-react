import React from "react";

//my imports
import HeaderStyles from "./HeaderStyles";
import logo from "../../assets/images/logo_png.png";
import bottomLine from "../../assets/images/Header-bottom-line1.png";

function Header() {
  const classes = HeaderStyles();
  return (
    <header className={classes.Header}>
      <div className={classes.header__top}>
        <div className="header__logo">
          <a href="df">
            <img src={logo} alt="Dosh logo" />
          </a>
        </div>
        <div className={classes.header__form}>
          <div>
            <input type="text" />
            <button>LOGIN</button>
          </div>
          <p>
            Not registered? <a href="#de">Signup</a>
          </p>
        </div>
      </div>
      <img className={classes.header__bottom} src={bottomLine} alt="" />
    </header>
  );
}

export default Header;
