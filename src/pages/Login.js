import React, { useState } from "react";
import LoginStyles from "./LoginStyles";
import close from "../assets/images/icons/close.png";
import lock from "../assets/images/icons/lock.png";

function Login() {
  const classes = LoginStyles();
  const [emailLogin, setEmailLogin] = useState(true);
  const handleChange = () => {
    setEmailLogin(!emailLogin);
  };
  return (
    <div className={classes.Login}>
      <div className={classes.Card}>
        <p className={classes.form__head}>Login as a Dosh Insurance Agent</p>
        <img src={close} className={classes.close} alt="" />
        <form className={classes.form}>
          <div className={classes.form__control}>
            <label>Login using</label>
            <div>
              <input
                type="radio"
                id="emailRadio"
                name="login-method"
                checked={emailLogin}
                onChange={handleChange}
              />
              <label htmlFor="emailRadio">
                <div className={classes.custom__radio}>
                  <div style={{ transform: emailLogin && "scale(1)" }}></div>
                </div>
                Email
              </label>

              <input
                type="radio"
                id="mobileRadio"
                name="login-method"
                checked={!emailLogin}
                onChange={handleChange}
              />
              <label htmlFor="mobileRadio">
                <div className={classes.custom__radio}>
                  <div style={{ transform: !emailLogin && "scale(1)" }}></div>
                </div>
                Mobile Number
              </label>
            </div>
          </div>
          {emailLogin ? (
            <div className={classes.form__control}>
              <label>Email</label>
              <input type="text" />
            </div>
          ) : (
            <div className={`${classes.form__control} ${classes.numberInput}`}>
              <label>Number</label>
              <div>
                <select>
                  <option>+1</option>
                </select>
                <input type="text" />
              </div>
            </div>
          )}
          <div className={classes.form__control}>
            <label>Password</label>
            <input type="text" />
          </div>
          <a href="#" className={classes.forgot}>
            <img src={lock} alt="" />I forgot my password
          </a>
          <button className={classes.button}>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
