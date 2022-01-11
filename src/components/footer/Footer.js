import React from "react";
//my imports
import FooterStyles from "./FooterStyles";
import logo from "../../assets/images/dosh-logo.png";
import mtn from "../../assets/images/payment/momo.png";
import airtel from "../../assets/images/payment/atmoney.png";
import vodafone from "../../assets/images/payment/vfcash.png";
import discover from "../../assets/images/payment/discover.png";
import paypal from "../../assets/images/payment/paypal.png";
import express from "../../assets/images/payment/express.png";
import mastercard from "../../assets/images/payment/mastercard.png";
import bank from "../../assets/images/payment/bank.png";
import facebook from "../../assets/images/social media/fb.png";
import twitter from "../../assets/images/social media/twitter.png";
import IG from "../../assets/images/social media/IG.png";
import linkedIn from "../../assets/images/social media/In.png";
import YT from "../../assets/images/social media/YT.png";

function Footer() {
  const classes = FooterStyles();
  return (
    <footer className={classes.Footer}>
      <section className={classes.main}>
        <div className={classes.companyDetails}>
          <img src={logo} alt="" />
          <div className="address">
            <p>Corporate Office</p>
            <p>Sawtel Inc</p>
            <p>2 Park Place</p>
            <p>Harford, CT</p>
            <p>06106</p>
          </div>
        </div>
        <div className={classes.contact}>
          <p className={classes.footer__title}>CONTACTS</p>
          <div>
            <p>Phone: 1-833-769-1767</p>
            <p>Fax: 1-833-769-1767</p>
            <p>
              <a href="d">Online Support</a>
            </p>
            <p>
              <a href="d">Request Service</a>
            </p>
          </div>
        </div>
        <div className={classes.about}>
          <p className={classes.footer__title}>ABOUT US</p>
          <p>
            SAWTEL connects you to your world through a stable and robust
            wireless network coupled to a scalable high-speed, two-way
            satellite.
          </p>
        </div>
        <div className={classes.logoLinks}>
          <div className={classes.top}>
            <img src={mtn} alt="MTN momo icon" />
            <img src={airtel} alt="Airtel-Tigo cash" />
            <img src={vodafone} alt="Vodafone cash" />
            <img src={discover} alt="Discover" />
            <img src={paypal} alt="Paypal" />
            <img src={express} alt="American Express" />
            <img src={mastercard} alt="mastercard logo" />
            <img src={bank} alt="Bank" />
          </div>
          <div className={classes.logoLinks__bottom}>
            <a href="d">
              <img src={facebook} alt="facebook link" />
            </a>
            <a href="d">
              <img src={twitter} alt="twitter link" />
            </a>
            <a href="d">
              <img src={IG} alt="instagram link" />
            </a>
            <a href="d">
              <img src={linkedIn} alt="linkedIn link" />
            </a>
            <a href="d">
              <img src={YT} alt="youtube link" />
            </a>
          </div>
        </div>
      </section>

      <section className={classes.bottom}>
        <p></p>
        <small> &#9400; Sawtel 2021 All Rights Reserved</small>
      </section>
    </footer>
  );
}

export default Footer;
