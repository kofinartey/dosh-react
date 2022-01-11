import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import DoshAppStyles from "./DoshAppStyles";

function DoshApp() {
  const classes = DoshAppStyles();
  return (
    <div className={classes.DoshApp}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default DoshApp;
