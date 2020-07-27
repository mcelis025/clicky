import React, { Component } from "react";
import logo192 from "../images/logo192.png";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-5 pt-3 pb-2 bg-dark">
        <div className="container">
          <span className="text-light">
            Clicky Game! {" "}
            <img className="footerImg" alt="react" src={logo192}></img>
          </span>
          <span className="text-light text-right">
            Created by Miguel Celis
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
