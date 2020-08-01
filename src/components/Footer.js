import React, { Component } from "react";
import logo192 from "../images/logo192.png";
import "../App.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-5 pt-3 border-top border-dark ">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-3">
              <p className="lead text-light text-left">
                Clicky Game! {" "}
                <img className="footerImg" alt="react" src={logo192}></img>
              </p>
            </div>
            <div className="col-lg-6 text-light"></div>
            <div className="col-lg-3 text-light text-right">
              <p className="lead">{" "} Created by Miguel Celis</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
